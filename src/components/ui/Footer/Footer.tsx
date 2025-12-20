import type React from "react";
import "./Footer.css";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import LinkedInIcon from "../Icon/LinkedInIcon";
import TikTokIcon from "../Icon/TikTokIcon";
import { useTheme } from "../../../shared/hooks";

const Footer: React.FC = () => {
    const { mode } = useTheme();
    return (
        <footer className="footer">
        <div className="footer-container">

            {/* Top Section */}
            <div className="footer-top">
            <h2 className="footer-title">
                LET’S DISCUSS <br /> YOUR IDEAS
            </h2>

            <img src={mode === 'dark' ? 'assets/logos/logo.svg' : 'assets/logos/light-logo.svg'} alt="Logo" className="footer-logo" />
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
            <nav className="footer-nav">
                <a href="#about">About</a>
                <a href="#service">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#faq">FAQ</a>
            </nav>

            <div className="footer-socials">
                <a href="#" className="social-button"><FacebookIcon /></a>
                <a href="#" className="social-button"><InstagramIcon /></a>
                <a href="#" className="social-button"><LinkedInIcon /></a>
                <a href="#" className="social-button"><TikTokIcon  /></a>
            </div>
            </div>

        </div>
        </footer>
    );
};

export default Footer;
