import './scss/Gallery.scss'
import Banner from '../components/Banner'
import LargeImage from '../components/LargeImage'
import { useState, useCallback } from 'react'

function Gallery(){
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


    const openAndCloseLargeImage = useCallback(
        ()=>{
            setLargeImage(!largeImage)
        },[largeImage]
    )
    
    return(
        <div className="gallery">
            <Banner title="Gallery" />
            <div className="gallery-body">
                <div className="gallery-grid">
                    {
                       limitGallery
                    }
                   
                </div>
                <div className="btn btn-lg btn-secondary" onClick={()=>setSize(size+8)}>Load More</div>
            </div>
            <LargeImage display={largeImage} openAndCloseLargeImage={openAndCloseLargeImage} image={gallery[currentIndex]} />
        </div>
    )
}
export default Gallery