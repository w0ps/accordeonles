import Link from 'next/link';

import styles from '@styles/header.scss'

export default () => (
  <header className={styles.foo}>
    <nav><Link href="/">Home</Link></nav>
  </header>
);
