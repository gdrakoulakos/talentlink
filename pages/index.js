import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TalentLink</title>
      </Head>

      <main>
        <div className={styles.title}>
          <h1>Welcome to</h1>
          <h1><a href="https://talentlink-pi.vercel.app/">TalentLink!</a></h1>
        </div>

        <p className={styles.description}>
        Your path to success starts here!
        </p>

        <div className={styles.grid}>
          <a href="https://talentlink-pi.vercel.app/actors" className={styles.card}>
            <h3>Find Your New Actor</h3>
            <p>Connecting you with top talents for success.</p>
          </a>

          <a href="https://talentlink-pi.vercel.app/directors" className={styles.card}>
            <h3>Find Your New Casting Director</h3>
            <p>Unlocking your career potential with the perfect match.</p>
          </a>

          <a
            href="https://talentlink-pi.vercel.app/reviews" className={styles.card}>
            <h3>Customers' Reviews</h3>
            <p>Hear what our clients have said about us.</p>
          </a>

          <a
            href="https://talentlink-pi.vercel.app/about"
            className={styles.card}
          >
            <h3>About Us</h3>
            <p>Explore TalentLink to learn more about our values.</p>
          </a>
        </div>
      </main>
    </div>
  );
}

