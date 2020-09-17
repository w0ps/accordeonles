import Header from './header';
import styles from '@styles/layout.scss';

export default ({children}) => (
  <div className={styles.container}>
    <Header/>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}></footer>
  </div>
);

console.log('yoo');
