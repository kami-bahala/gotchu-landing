/**
 * Hero section with tagline, CTAs, and phone mockup.
 * @author Tristan Mahinay
 */
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Your Home Services,{' '}
            <span className="gradient-text">Made Simple</span>
          </h1>
          <p className={styles.subtitle}>
            Connect with trusted local professionals for cleaning, repairs, errands, and more. 
            Quality service at your fingertips — because you deserve peace of mind.
          </p>
          <div className={styles.ctas}>
            <a href="#download" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download for iOS
            </a>
            <a href="#download" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.708l2.302 2.302-10.937 6.333 8.635-8.635zm3.01-3.01l2.387 1.38a1 1 0 0 1 0 1.844l-2.387 1.38-2.594-2.594 2.594-2.01zM5.865 3.657L16.802 9.99l-2.302 2.302-8.635-8.635z"/>
              </svg>
              Download for Android
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Verified Providers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.mockApp}>
                <div className={styles.mockHeader}></div>
                <div className={styles.mockCards}>
                  <div className={styles.mockCard}></div>
                  <div className={styles.mockCard}></div>
                  <div className={styles.mockCard}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge1}`}>
            <span>🧹</span> Cleaning
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge2}`}>
            <span>🔧</span> Repairs
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge3}`}>
            <span>📦</span> Errands
          </div>
        </div>
      </div>
      <div className={styles.heroGlow}></div>
    </section>
  );
}
