/**
 * Services section displaying available service categories.
 * @author Tristan Mahinay
 */
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: '🧹',
    title: 'Home Cleaning',
    description: 'Professional deep cleaning, regular maintenance, and specialized services for your home.',
  },
  {
    icon: '🔧',
    title: 'Repairs & Maintenance',
    description: 'Expert plumbing, electrical, appliance repair, and handyman services.',
  },
  {
    icon: '📦',
    title: 'Errands & Delivery',
    description: 'Grocery shopping, package pickup, and personal errands handled for you.',
  },
  {
    icon: '🌿',
    title: 'Gardening & Landscaping',
    description: 'Lawn care, plant maintenance, and outdoor beautification services.',
  },
  {
    icon: '🚗',
    title: 'Car Services',
    description: 'Car wash, detailing, and basic automotive maintenance at your location.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Personal Assistance',
    description: 'Elderly care, pet sitting, babysitting, and personal helper services.',
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className="section-title">
          <h2>Services We <span className="gradient-text">Offer</span></h2>
          <p>From everyday chores to specialized tasks, find trusted professionals for all your needs.</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article key={index} className={`glass-card ${styles.serviceCard}`}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
