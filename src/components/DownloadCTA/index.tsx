/**
 * Download CTA section with app store buttons.
 * @author Tristan Mahinay
 */
import styles from './DownloadCTA.module.css';

export default function DownloadCTA() {
  return (
    <section className={`section ${styles.downloadCta}`} id="download">
      <div className="container">
        <div className={`glass-card ${styles.ctaCard}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className={styles.ctaDescription}>
              Download the Gotchu app today and discover the easiest way to get things done. 
              Available on iOS and Android.
            </p>
            <div className={styles.downloadButtons}>
              <a href="#" className={styles.storeButton} aria-label="Download on the App Store">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeSmall}>Download on the</span>
                  <span className={styles.storeName}>App Store</span>
                </div>
              </a>
              <a href="#" className={styles.storeButton} aria-label="Get it on Google Play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.708l2.302 2.302-10.937 6.333 8.635-8.635zm3.01-3.01l2.387 1.38a1 1 0 0 1 0 1.844l-2.387 1.38-2.594-2.594 2.594-2.01zM5.865 3.657L16.802 9.99l-2.302 2.302-8.635-8.635z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeSmall}>Get it on</span>
                  <span className={styles.storeName}>Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.qrCode}>
            <div className={styles.qrPlaceholder}>
              <span>📱</span>
              <p>Scan to Download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
