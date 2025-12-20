import React, { useState } from "react";
import Button from "../Button";
import { useTheme } from "../../../shared/hooks/useTheme";
import "./navbar.css";
import type { ThemeMode } from "../../../providers/theme";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#service", label: "Service" },
  { href: "#projects", label: "Projects" },
  { href: "#testimoni", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar: React.FC = () => {
  const { mode, toggle } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const themeLabel = mode === "dark" ? "☀️ Light" : "🌙 Dark";

  const openMobile = () => setIsMobileOpen(true);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__inner">
          <BrandLogo theme={mode} />

          <DesktopNav items={NAV_ITEMS} />

          <div className="navactions">
            <Button 
            onClick={toggle} className="btn btn--theme" ariaLabel="Toggle theme">
              {themeLabel}
            </Button>

            <Button onClick={() => {}} className="btn btn--cta" ariaLabel="Lets talk">
              Let’s Talk
            </Button>

            <Button onClick={openMobile} className="btn btn--menu" ariaLabel="Open menu">
              ☰
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu
        open={isMobileOpen}
        onClose={closeMobile}
        onToggleTheme={toggle}
        themeMode={mode}
        items={NAV_ITEMS}
      />
    </nav>
  );
};

const BrandLogo = ({ theme }: { theme: ThemeMode }) => {
  return (
    <div className="brand">
      <img src={theme ==='dark'? 'assets/logos/logo.svg' : 'assets/logos/light-logo.svg'} alt="Logo" className="brand__logo brand__logo--dark" />
    </div>
  );
}

const DesktopNav = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="navlinks">
      {items.map((it) => (
        <a key={it.href} href={it.href} className="navlinks__link">
          {it.label}
        </a>
      ))}
    </div>
  );
}

const MobileMenu = (props: {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  themeMode: "light" | "dark";
  items: NavItem[];
}) => {
  const { open, onClose, onToggleTheme, themeMode, items } = props;

  return (
    <div
      className={`mobileMenu ${open ? "mobileMenu--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="mobileMenu__header">
        <BrandLogo theme={themeMode} />
        <Button onClick={onClose} className="mobileMenu__close" ariaLabel="Close menu">
          ✕
        </Button>
      </div>

      <div className="mobileMenu__links">
        {items.map((it) => (
          <a key={it.href} href={it.href} onClick={onClose} className="mobileMenu__link">
            {it.label}
          </a>
        ))}
      </div>

      <div className="mobileMenu__footer">
        <Button ariaLabel="Lets Talk" className="mobileMenu__cta" onClick={() => {}}>
          Let’s Talk
        </Button>

        <ThemeSwitch mode={themeMode} onToggle={onToggleTheme} />
      </div>
    </div>
  );
}

const ThemeSwitch = ({ mode, onToggle }: { mode: "light" | "dark"; onToggle: () => void }) => {
  const checked = mode === "dark";

  return (
    <div className="themeSwitch">
      <span className="themeSwitch__label">Light</span>

      <Button
        onClick={onToggle}
        className={`themeSwitch__toggle ${checked ? "themeSwitch__toggle--on" : "themeSwitch__toggle--off"}`}
        ariaLabel="Toggle theme"
        aria-pressed={checked}
      >
        <span className={`themeSwitch__knob ${checked ? "themeSwitch__knob--on" : ""}`} />
      </Button>

      <span className="themeSwitch__label">Dark</span>
    </div>
  );
}


export default Navbar;