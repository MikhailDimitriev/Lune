import { Link } from "react-router";

type FooterNavigationsProps = {
  title: string;
  links: { to: string; label: string }[];
};

export const FooterNavigations = ({ title, links }: FooterNavigationsProps) => {
  return (
    <div className="text-white/80">
      <h3 className="p-1 mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
        {title}
      </h3>

      <nav className="flex flex-col items-start gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="p-1 text-sm transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};