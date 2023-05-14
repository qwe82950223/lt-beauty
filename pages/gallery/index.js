import styles from '../../global-styles/gallery.module.scss'
import Banner from '../../src/components/Banner'
import LargeImage from '../../src/components/LargeImage'
import { useState, useCallback, useEffect } from 'react'

function Gallery(){

    const [gallery, setGallery] = useState([])
    const [size, setSize] = useState(8)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchMessage = async () => {
          const res = await fetch('/api/images');
          const data = await res.json();
        console.log(data.resources)
          setImages(data.resources.map(x=>x.secure_url))
        };
        fetchMessage();
      }, []);

    function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }

    const limitGallery =  images.slice(0, size).map((g,index)=>(
        <div className={styles.galleryItem} key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="hammer-cabinetry-gallery" /></div>
    ))


    const openAndCloseLargeImage = useCallback(
        ()=>{
            setLargeImage(!largeImage)
        },[largeImage]
    )
    
    return(
        <div className={styles.gallery}>
            <Banner title="Gallery" />
            <div className={styles.galleryBody}>
                <div className={styles.galleryGrid}>
                    {
                       limitGallery
                    }
                   
                </div>
                <div className={`${styles.btnStyle} btn btn-lg btn-secondary`}   onClick={()=>setSize(size+8)}>Load More</div>
            </div>
            <LargeImage display={largeImage} openAndCloseLargeImage={openAndCloseLargeImage} image={images[currentIndex]} />
        </div>
    )
}
export default Gallery