/**
 * Footer component with navigation links and contact info.
 * @author Tristan Mahinay
 */
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { label: 'Home Cleaning', href: '#' },
    { label: 'Repairs', href: '#' },
    { label: 'Errands', href: '#' },
    { label: 'Gardening', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { label: 'Facebook', icon: 'fb', href: '#' },
  { label: 'Instagram', icon: 'ig', href: '#' },
  { label: 'Twitter', icon: 'tw', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>🏠</span>
              <span className={styles.logoText}>got<span className="gradient-text">chu</span></span>
            </a>
            <p className={styles.tagline}>
              Gotchu covered! Your trusted platform for home services. Making everyday tasks effortless.
            </p>
            <div className={styles.social}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.icon === 'fb' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                  {social.icon === 'ig' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>}
                  {social.icon === 'tw' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Gotchu. All rights reserved.</p>
          <p className={styles.contact}>
            Questions? <a href="mailto:hello@gotchu.ph">hello@gotchu.ph</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
