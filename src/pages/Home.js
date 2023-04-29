import Slider from "../components/Slider"
import './scss/Home.scss'

const Home = () => {
    return(
        <div>
            <Slider />

            <div className="body mt-5">
                <div className="welcome row">
                    <div className="col-md-6 text-center">
                        <img src="./images/store.jpg" alt="ltBeauty"  width={'80%'} />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>Welcome To LT Beauty</h1>
                        <br/>
                        <p>LT Beauty is an upscale and professional beauty salon that is licensed and provides several beauty care services to clients. We also have training programs for cosmetology license.</p>
                    </div>
                </div>

                <div className="service">
                    <h1>- Services -</h1>
                    <br/>
                    <div className="service-slide">
                        <div className="slide-wrapper">
                            <div className="service-item">
                                <div className="service-item-image">
                                    <img src="./images/facial.jpg" />
                                    <div className="item-bg">
                                        <h2>Facial</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-item-image">
                                    <img src="./images/eyelashExtension.jpg" width={'100%'}/>
                                    <div className="item-bg">
                                        <h2>Eyelash Extension</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-item-image">
                                    <img src="./images/microblading.jpg" />
                                    <div className="item-bg">
                                        <h2>Microblading</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-item-image" >
                                    <img src="./images/laserHairRemoval.jpg" />
                                    <div className="item-bg">
                                        <h2>Eyelash Extension</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-item-image" style={{backgroundImage: `url("./images/eyelashExtension.jpg")` }}>
                                    <img src="./images/lash-tint.jpg"/>
                                    <div className="item-bg">
                                        <h2>Eyelash Tint</h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="gallery">

                </div>
            </div>
        </div>
    )
}

export default Home