import TransitionLink from "../ui/TransitionLink";
import ClientLogo from "../ui/ClientLogo";
import styles from "./ClientSection.module.css";
import { usePageContent } from "../../hooks/usePageContent";
import { getContent } from "../../lib/content";
import { defaults } from "../../lib/contentDefaults";

/**
 * Home page client strip: one quiet row of single-colour logos under the
 * About section. Logos come from the Clients page list (CMS: clients.list,
 * "Show on Homepage" flag); the label and link copy from home.clients.
 */
export default function ClientSection() {
  const { sections: clientSections } = usePageContent("clients");
  const { sections: homeSections } = usePageContent("home");

  const allClients = getContent(clientSections, "list", defaults.clients.list);
  const label = getContent(homeSections, "clients.label", defaults.home.clients.label);
  const linkText = getContent(homeSections, "clients.linkText", defaults.home.clients.linkText);

  const featured = allClients.filter((c) => c.showOnHome === true || c.showOnHome === "true");
  const clients = (featured.length > 0 ? featured : allClients).filter((c) => c.logo).slice(0, 12);

  if (clients.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Clients">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.label}>{label}</p>
          {linkText && (
            <TransitionLink to="/work" className={styles.link}>
              {linkText} <span aria-hidden="true">→</span>
            </TransitionLink>
          )}
        </div>
        <ul className={styles.row}>
          {clients.map((client) => (
            <li key={client.name} className={styles.item}>
              <ClientLogo name={client.name} logo={client.logo} size={client.logoSize} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
