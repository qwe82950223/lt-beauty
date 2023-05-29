import { useState, useEffect } from 'react'
import { useRouter  } from 'next/router';
import styles from '../../global-styles/upload.module.scss'


function ImageUpload(){
    const router = useRouter()
    
    useEffect(()=>{
        router.push("https://console.cloudinary.com/console/c-b340585b314a0ef21d5bf649e1ea94/media_library/folders/c42d6d5aca8947299735ce68981565f127")
    })
    // const [password, setPassword] = useState("");
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     if(password === "hjgjhfgfgjkkkl457DSDF64658"){
    //         const fetchMessage = async () => {
    //             const res = await fetch('/api/images');
    //             const data = await res.json();
    //             setImages(data.resources.map(x=>x))
    //             console.log(data.resources)
    //           };
    //           fetchMessage();
              
    //     }
    // }, [password]);


    // const handleChange = event => {
    //     setPassword(event.target.value);
    // }

    // const handleSubmit = () =>{
    //     console.log(password)
    //     if(password!=="8888"){
    //         setPassword("")
    //     }else{
    //         setPassword("hjgjhfgfgjkkkl457DSDF64658")
    //     }
    // }

    // const handleImageRemove = async(id) => {
    //     const res = await fetch('/api/remove', {method: 'DELETE'});
    //     console.log(res)
    
    // }

    // const limitGallery =  images.length>0? images.map((g,index)=>(
    //     <li className={styles.imageItem} key={index}>
    //         <div className={styles.imageContainer} onClick={()=>handleImageRemove(g.asset_id)}>
    //             <img className={styles.image} src={g.url} alt="lt-beauty-image" />
    //         </div>
    //     </li>
    // )) : <div></div>


    // return(
    
        // password !== "hjgjhfgfgjkkkl457DSDF64658"? 
        // <div className={`${styles.login} container p-2`}>
        //     <form>
        //         <div className="form-group">
        //             <input type="password" name="password" value={password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        //         </div>
        //         <br />
        //         <button className={`${styles.btn} btn btn-secondary`} onClick={handleSubmit}>login</button>
        //     </form>

        // </div>          
        // :
        // <div className={styles.uploadBody}>
        //     <div className={styles.uploadHeader}>
        //         {/* <h2>Images</h2> */}
        //         <div className="btn btn-lg btn-secondary"><a target="_blank" href= "https://console.cloudinary.com/console/c-b340585b314a0ef21d5bf649e1ea94/media_library/search?q=" >Upload</a></div>
        //     </div>
        //     {/* <hr /> */}
        //     <br />
        //     <ul className={styles.imageList}>
        //         {limitGallery}
        //     </ul>
            
        // </div>
    // )
}

export default ImageUpload