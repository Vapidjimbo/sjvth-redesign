import styles from '../styles/Home.module.css'
import { NextHead } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <NextHead/>
      <Header/>
      <main className={styles.main}>
        
      </main>
      <Footer/>
    </div>
  )
}
