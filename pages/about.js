import Banner from '../src/components/Banner'
import styles from '../global-styles/about.module.scss'
import { useTranslation } from "react-i18next";
import Head from 'next/head'

const About = () => {
    const { t } = useTranslation();
    return(
        <section>
            <Head>
                <title>About Us - LT Beauty Great Neck, New York</title>
                <meta name="description" content="" />
                <meta property="og:title" content="About Us - LT Beauty Great Neck, New York" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="https://ltbeautyny.com/about" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Banner title={t("banner.2")} />   

            <div className={styles.aboutBody}>
                <img src="./images/store.jpg" alt="ltBeauty" />
                <br />
                <br />
                <br />
                <h3>{t("about.0")}</h3>
                <br />
                <p className="text-secondary">{t("about.1")}</p>
                <br/>
                <h4>{t("about.2")}</h4>
                <br />
                <p className="text-secondary">{t("about.3")}</p>
                <br/>
                <p className="text-secondary">{t("about.4")}</p>
                <br/>
                <p>{t("about.5")}</p>
                <p>{t("about.6")}</p>
            </div> 
        </section>
    )
}

export default About