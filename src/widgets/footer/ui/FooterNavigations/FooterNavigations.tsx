import { Link } from "react-router";

type FooterColumnProps = {
  title: string;
  links: { to: string; label: string }[];
};

export const FooterNavigations = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-6 text-xs font-semibold tracking-[0.25em] text-black uppercase">
        {title}
      </h3>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-sm text-black/60 transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};