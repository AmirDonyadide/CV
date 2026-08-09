import { contactDetails } from "../../data/contact";
import type { Locale } from "../Hero/hero.types";
import { contactCopy } from "./contact.copy";
import styles from "./Contact.module.css";

interface ContactProps {
  locale: Locale;
}

interface ContactLinkProps {
  detail: string;
  download?: boolean;
  external?: boolean;
  href: string;
  label: string;
  variant?: "default" | "download" | "email";
}

function ContactLink({
  detail,
  download,
  external,
  href,
  label,
  variant = "default",
}: ContactLinkProps) {
  const className = [
    styles.contactLink,
    variant === "email" ? styles.emailLink : "",
    variant === "download" ? styles.downloadLink : "",
  ].filter(Boolean).join(" ");

  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className={styles.linkLabel}>{label}</span>
      <span className={styles.linkDetail}>{detail}</span>
      <svg className={styles.arrow} aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

export function Contact({ locale }: ContactProps) {
  const copy = contactCopy[locale];

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.intro}>
        <p className={styles.question}>{copy.question}</p>
        <h2 className={styles.heading} id="contact-heading">{copy.heading}</h2>
      </div>

      <nav className={styles.links} aria-label={copy.navigationLabel}>
        <ContactLink
          label={copy.email}
          detail={contactDetails.email.display}
          href={contactDetails.email.href}
          variant="email"
        />
        <ContactLink
          label={copy.linkedIn}
          detail={contactDetails.linkedIn.display}
          href={contactDetails.linkedIn.href}
          external
        />
        <ContactLink
          label={copy.github}
          detail={contactDetails.github.display}
          href={contactDetails.github.href}
          external
        />
        <ContactLink
          label={copy.downloadCv}
          detail={copy.downloadDetail}
          href={contactDetails.cv.href}
          download
          variant="download"
        />
      </nav>

      <footer className={styles.footer}>
        <span>Amirhossein Donyadidegan</span>
        <span>{copy.footer}</span>
      </footer>
    </section>
  );
}
