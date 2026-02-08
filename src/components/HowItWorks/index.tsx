/**
 * How It Works section with 3-step process visualization.
 * @author Tristan Mahinay
 */
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Browse our wide catalog of services and select what you need. Filter by ratings, price, and availability.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Book a Provider',
    description: 'View provider profiles, read reviews, and book your preferred professional instantly.',
    icon: '📅',
  },
  {
    number: '03',
    title: 'Enjoy Peace of Mind',
    description: 'Sit back while verified professionals handle your tasks. Rate and review after completion.',
    icon: '✨',
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.howItWorks}`} id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It <span className="gradient-text">Works</span></h2>
          <p>Getting help has never been easier. Three simple steps to a worry-free experience.</p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={`glass-card ${styles.stepContent}`}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
