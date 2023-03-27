import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <a href="https://www.ankarawebtasarim.net/">Ankara Web Tasarim</a>
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://www.ankarawebtasarim.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.4alabs.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Web Technologies"
          >
            <h2 className={inter.className}>
              4A Labs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Web Technologies.
            </p>
          </a>

          <a
            href="https://dentumitkoy.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Gülüş Estetiği, Gülüş Estetiği Ankara"
          >
            <h2 className={inter.className}>
              Dent Ümitköy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Gülüş Estetiği - Gülüş Estetiği Ankara
            </p>
          </a>

          <a
            href="https://www.drderm.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="lazer epilasyon"
          >
            <h2 className={inter.className}>
              Dr Derm <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Lazer Epilasyon
            </p>
          </a>

          <a
            href="https://www.enisguray.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="ankara ortodontist"
          >
            <h2 className={inter.className}>
              Enis Güray <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Ankara Ortodontist.
            </p>
          </a>
           <a
            href="https://www.ercebelecoglu.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Ankara Gülüş Tasarımı,Gülüş Tasarımı"
          >
            <h2 className={inter.className}>
              Erce Beleçoğlu <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Ankara Gülüş Tasarımı - Gülüş Tasarımı.
            </p>
          </a>
            <a
            href="https://estezone.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Lazer Epilasyon ve Zayıflama Cihazı"
          >
            <h2 className={inter.className}>
              Estezone <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Lazer Epilasyon ve Zayıflama Cihazı.
            </p>
          </a>
            <a
            href="https://www.esemosgb.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="İş Sağlığı ve Güvenliği"
          >
            <h2 className={inter.className}>
              ESEM OSGB <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              İş Sağlığı ve Güvenliği.
            </p>
          </a>
            <a
            href="https://fabo.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Konkasör"
          >
            <h2 className={inter.className}>
              FABO <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Konkasör.
            </p>
          </a>
            <a
            href="https://www.gurbuziskele.com.tr/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="İskele Kalıp Sistemleri"
          >
            <h2 className={inter.className}>
              Gürbüz İskele ve Kalıp Sistemleri <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              İskele Kalıp Sistemleri.
            </p>
          </a>
             <a
            href="https://www.magcanta.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Bez Çanta"
          >
            <h2 className={inter.className}>
              MAG Çanta <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Bez Çanta.
            </p>
          </a>
            <a
            href="https://ntsmedicare.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Evde Hasta ve Yaşlı Bakım"
          >
            <h2 className={inter.className}>
              NTS Medicare <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Evde Hasta ve Yaşlı Bakım.
            </p>
          </a>
             <a
            href="https://meleknagehansanic.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Ankara Dermatolog"
          >
            <h2 className={inter.className}>
              Melek Nagehan Saniç <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Ankara Dermatolog.
            </p>
          </a>
            <a
            href="https://www.teknoteksogutma.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Endüstriyel Soğutma ve Nemlendirme Sistemleri"
          >
            <h2 className={inter.className}>
              Teknotek <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Endüstriyel Soğutma ve Nemlendirme Sistemleri.
            </p>
          </a>
            <a
            href="https://uzmanseswidex.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            tag="Ankara İşitme Cihazı"
          >
            <h2 className={inter.className}>
              Uzman Ses <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Ankara İşitme Cihazı.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
