import {memo, useLayoutEffect, useState}  from 'react'
import '../../global-styles/largeImage.module.scss';
import CloseIcon from '@mui/icons-material/Close';

function LargeImage({image, display, openAndCloseLargeImage}){
    const [height, setHeight] = useState("100%");
    const [width, setWidth] = useState("auto");
    const [bigger, setBigger] = useState(false);


    //set resize
    const handleWindowSizeChange = () => {
        if(window.innerHeight<window.innerWidth){
            setHeight("100%");
            setWidth("auto");
        }else{
            setHeight("auto");
            setWidth("100%");
        }
    }


    useLayoutEffect(()=>{
        
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
        
    },[])

    function handleClose(){
        openAndCloseLargeImage();
        setBigger(false);
    }

    
    return(
        <div className="largeImage" style={{display:display ? 'block' : 'none'}}  >
            <span className="largeImage-header" onClick={handleClose}><CloseIcon /></span>
            <div className="image">
                <img src={image} alt="largeImage" onClick={()=>setBigger(!bigger)} style={{height: height, width:width, transform: `scale(${bigger ? "1.5" : "1"})`}}/>
            </div>
        </div>
    )

}

export default memo(LargeImage);