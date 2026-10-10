// DELETE /api/admin/contact/:id  (admin only) — removes one lead submission.
//
// Lives in its own file because Vercel only routes one path segment to
// api/admin/[...path].js on this project; nested paths like
// /api/admin/contact/<id> never reached the Express app (the admin panel's
// "Delete" button silently failed with a Vercel 404).
const mongoose = require("mongoose");
const { connect } = require("../../_lib/mongo");
const { requireAdmin } = require("../../_lib/auth");

const ContactSubmissionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    services: [String],
    message: String,
    source: String,
    extraFields: [{ label: String, value: String }],
    attribution: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true, minimize: false }
);

const ContactSubmission =
  mongoose.models.ContactSubmission || mongoose.model("ContactSubmission", ContactSubmissionSchema);

module.exports = async (req, res) => {
  const { id } = req.query;
  if (!id || !mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid id" });

  if (req.method !== "DELETE") {
    res.setHeader("Allow", "DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!requireAdmin(req, res)) return;

  try {
    await connect();
    const doc = await ContactSubmission.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
