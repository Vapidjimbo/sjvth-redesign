import styles from '../styles/Home.module.css'
import { NextHead } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TicketForm } from '../components/TicketForm';

export default function Tickets() {
  
  return (
    <div className={styles.container}>
      <NextHead/>
      <Header/>
      <main className={styles.main}>
        <TicketForm />
      </main>
      <Footer/>
    </div>
  )
}
