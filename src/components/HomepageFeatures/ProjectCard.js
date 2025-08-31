// src/components/ProjectCard.js
import Link from '@docusaurus/Link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ imageUrl, title, description, linkUrl }) {
  return (
    <Link to={linkUrl} className={styles.projectCard}>
      <div className={styles.cardImageContainer}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
