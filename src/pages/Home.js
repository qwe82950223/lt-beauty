import { useEffect, useState } from "react"
import Slider from "../components/Slider"
import './scss/Home.scss'

const gallery = [
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
]
const Home = () => {
    
    const [size, setSize] = useState(8)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);

       function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }
    const limitGallery =  gallery.slice(0, size).map((g,index)=>(
        <div className="gallery-item" key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="hammer-cabinetry-gallery" /></div>
    ))

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


                <section className="areas mt-5">
                <div className="areas-container container">
                    <h1>-Service-</h1>
                    <div className="area mt-3">
                        <div className="area-wrapper area-new-york" data-content="Facial">
                            <div className=""></div>
                        </div>
                        <div className="area-wrapper area-los-angle area-right" data-content="Laser Hair Removal">
                            <div className="" ></div>
                        </div>
                        <div className="area-wrapper area-las-vegas" data-content="Eyelash Extention">
                            <div className=""></div>
                        </div>
                        <div className="area-wrapper area-seattle area-right" data-content="Miroblading">
                            <div className="" ></div>
                        </div>
                    </div>
                    
                </div>
                

            </section>
                {/* <div className="service">
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
                </div> */}



                <div className="gallery mt-5">
                    <h1>- Gallery -</h1>
                    <div className="gallery-body">
                        <div className="gallery-grid">
                            {
                            limitGallery
                            }
                        </div>
                        <a href="/gallery"><div className="btn btn-lg btn-secondary">Load More</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home