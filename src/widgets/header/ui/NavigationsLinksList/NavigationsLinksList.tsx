import React from 'react';
import {navLinks} from "~/widgets/header/model/navLinks";
import {NavLink} from "react-router";

const NavigationsLinksList = () => {
  return (
    <nav className="flex justify-between items-center gap-12 text-[12px] font-medium tracking-[0.2em] uppercase lg:gap-20 lg:text-[13px]">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `transition-colors hover:text-gold ${isActive ? "text-gold" : "text-white/80"}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationsLinksList;