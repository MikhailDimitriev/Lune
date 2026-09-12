import type { ReactNode } from "react";
import {SOCIALS_LINKS} from "~/widgets/footer/model/constants/footerLinks";
import {Link} from "react-router";

const socialIcons: Record<string, ReactNode> = {
  Instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Pinterest: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 20.5c.5-2 1.5-5.5 2-8" />
      <path d="M10.5 12.5c.5-2 2-3.5 4-3.5 2.5 0 3.5 1.5 3.5 4 0 3-2 5.5-4.5 5.5-1.5 0-2.5-1-2.5-1" />
    </svg>
  ),
};

export const SocialList = () => {
  return (
    <ul className="flex items-center gap-3">
      {SOCIALS_LINKS.map((social) => (
        <li key={social.name}>
          <Link
            to={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/70 transition-colors hover:border-gold hover:text-gold"
          >
            {socialIcons[social.name]}
          </Link>
        </li>
      ))}
    </ul>
  );
};