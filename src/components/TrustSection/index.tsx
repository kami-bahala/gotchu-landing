/**
 * Trust & Safety section highlighting platform security features.
 * @author Tristan Mahinay
 */
import styles from './TrustSection.module.css';

const trustFeatures = [
  {
    icon: '✓',
    title: 'KYC Verified',
    description: 'All service providers undergo thorough identity verification and background checks.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Your payments are protected with bank-level encryption and secure escrow.',
  },
  {
    icon: '💬',
    title: 'In-App Chat',
    description: 'Communicate safely with providers through our secure messaging system.',
  },
  {
    icon: '⭐',
    title: 'Ratings & Reviews',
    description: 'Make informed decisions with genuine reviews from verified customers.',
  },
];

export default function TrustSection() {
  return (
    <section className={`section ${styles.trust}`} id="trust">
      <div className="container">
        <div className="section-title">
          <h2>Your Safety, <span className="gradient-text">Our Priority</span></h2>
          <p>We've built trust and safety into every interaction on our platform.</p>
        </div>
        
        <div className={styles.trustGrid}>
          {trustFeatures.map((feature, index) => (
            <div key={index} className={styles.trustItem}>
              <div className={styles.trustIcon}>{feature.icon}</div>
              <div className={styles.trustContent}>
                <h3 className={styles.trustTitle}>{feature.title}</h3>
                <p className={styles.trustDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
