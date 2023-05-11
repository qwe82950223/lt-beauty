import Banner from '../src/components/Banner'
import '../global-styles/about.module.scss'
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return(
        <section>
             <Banner title="About Us" />   

            <div className="about-body">
                <img src="./images/store.jpg" alt="ltBeauty" />
                <br />
                <br />
                <br />
                <h5>{t("about.0")}</h5>
                <br />
                <p className="text-secondary">{t("about.1")}</p>
                <br/>
                <h5>{t("about.2")}</h5>
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