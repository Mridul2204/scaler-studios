require("dotenv").config({ path: require("path").resolve(__dirname, "../.env.local") });
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const PageContent = require("./models/PageContent");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  // Upload logo to ImageKit
  const logoPath = path.resolve(__dirname, "../dist/CliendLogo/logo.png");
  const buffer = fs.readFileSync(logoPath);
  const file = await toFile(buffer, "weizmann-institute.png");
  const result = await imagekit.files.upload({
    file,
    fileName: "weizmann-institute.png",
    folder: "/ScalerStudios/logos",
    useUniqueFileName: false,
  });
  const logoUrl = result.url;
  console.log("Uploaded logo:", logoUrl);

  // Update clients in MongoDB — replace all Marshall Haber clients with real ones
  const clients = [
    {
      name: "Weizmann Institute of Science",
      logo: logoUrl,
      category: "Education",
      logoSize: "160",
      showOnHome: true,
    },
  ];

  await PageContent.findOneAndUpdate(
    { page: "clients" },
    { $set: { "sections.list": clients } },
    { upsert: false }
  );
  console.log("Updated clients list in MongoDB with", clients.length, "client(s)");

  await mongoose.disconnect();
  console.log("Done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
