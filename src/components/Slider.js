
import styles from '../../global-styles/slider.module.scss';
import $ from 'jquery'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const Slider = () => {

    var slideshowDuration = 7000;
var slideshow=$('.mainContent .slideshow');

function slideshowSwitch(slideshow,index,auto){
  if(slideshow.data('wait')) return;

  var slides = slideshow.find('.slide');
  var activeSlide = slides.filter('.isActive');
  var activeSlideImage = activeSlide.find('.imageContainer');
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find('.imageContainer');
  var newSlideContent = newSlide.find('.slideContent');
  var newSlideElements=newSlide.find('.caption > *');
  if(newSlide.is(activeSlide))return;

  newSlide.addClass('is-new');
  var timeout=slideshow.data('timeout');
  clearTimeout(timeout);
  slideshow.data('wait',true);
  var transition=slideshow.attr('data-transition');
  if(transition==='fade'){
    newSlide.css({
      display:'block',
      zIndex:2
    });
    newSlideImage.css({
      opacity:0
    });

    window.TweenMax.to(newSlideImage,1,{
      alpha:1,
      onComplete:function(){
        newSlide.addClass('isActive').removeClass('is-new');
        activeSlide.removeClass('isActive');
        newSlide.css({display:'',zIndex:''});
        newSlideImage.css({opacity:''});
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait',false);
        if(auto){
          timeout=setTimeout(function(){
            slideshowNext(slideshow,false,true);
          },slideshowDuration);
          slideshow.data('timeout',timeout);}}});
  } else {
    var newSlideRight='';
      var newSlideLeft=0;
      var newSlideImageRight='auto';
      var newSlideImageLeft=-slideshow.width()/6;
      var newSlideImageToRight='';
      var newSlideImageToLeft=0;
      var newSlideContentLeft=0;
      var newSlideContentRight='auto';
      var activeSlideImageLeft=slideshow.width()/3;
    if(newSlide.index()>activeSlide.index()){
      newSlideRight=0;
      newSlideLeft='auto';
      newSlideImageRight=-slideshow.width()/6;
      newSlideImageLeft='auto';
      newSlideImageToRight=0;
      newSlideImageToLeft='auto';
      newSlideContentLeft='auto';
      newSlideContentRight=0;
      activeSlideImageLeft=-slideshow.width()/3;
    }

    newSlide.css({
      display:'block',
      width:0,
      right:newSlideRight,
      left:newSlideLeft
      ,zIndex:2
    });

    newSlideImage.css({
      width:slideshow.width(),
      right:newSlideImageRight,
      left:newSlideImageLeft
    });

    newSlideContent.css({
      width:slideshow.width(),
      left:newSlideContentLeft,
      right:newSlideContentRight
    });

    activeSlideImage.css({
      left:0
    });

    window.TweenMax.set(newSlideElements,{y:20,force3D:true});
    window.TweenMax.to(activeSlideImage,1,{
      left:activeSlideImageLeft,
      ease:window.Power3.easeInOut
    });

    window.TweenMax.to(newSlide,1,{
      width:slideshow.width(),
      ease:window.Power3.easeInOut
    });

    window.TweenMax.to(newSlideImage,1,{
      right:newSlideImageToRight,
      left:newSlideImageToLeft,
      ease:window.Power3.easeInOut
    });

    window.TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:window.Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
      newSlide.addClass('isActive').removeClass('is-new');
      activeSlide.removeClass('isActive');
      newSlide.css({
        display:'',
        width:'',
        left:'',
        zIndex:''
      });

      newSlideImage.css({
        width:'',
        right:'',
        left:''
      });

      newSlideContent.css({
        width:'',
        left:''
      });

      newSlideElements.css({
        opacity:'',
        transform:''
      });

      activeSlideImage.css({
        left:''
      });

      slideshow.find('.pagination').trigger('check');
      slideshow.data('wait',false);
      if(auto){
        timeout=setTimeout(function(){
          slideshowNext(slideshow,false,true);
        },slideshowDuration);
        slideshow.data('timeout',timeout);
      }
    });
  }
}

function slideshowNext(slideshow,previous,auto){
  var slides=slideshow.find('.slide');
  var activeSlide=slides.filter('.isActive');
  var newSlide=null;
  if(previous){
    newSlide=activeSlide.prev('.slide');
    if(newSlide.length === 0) {
      newSlide=slides.last();
    }
  } else {
    newSlide=activeSlide.next('.slide');
    if(newSlide.length===0)
      newSlide=slides.filter('.slide').first();
  }

  slideshowSwitch(slideshow,newSlide.index(),auto);
}

function homeSlideshowParallax(){
  var scrollTop=$(window).scrollTop();
  if(scrollTop>400) return;
  var inner=slideshow.find('.slideshowInner');
  var newHeight=400-(scrollTop/2);
  var newTop=scrollTop*0.8;

  inner.css({
    transform:'translateY('+newTop+'px)',height:newHeight
  });
}

$(document).ready(function() {
 $('.slide').addClass('isLoaded');

 $('.slideshow .arrows .arrow').on('click',function(){
  slideshowNext($(this).closest('.slideshow'),$(this).hasClass('prev'));
});

 $('.slideshow .pagination .item').on('click',function(){
  slideshowSwitch($(this).closest('.slideshow'),$(this).index());
});

 $('.slideshow .pagination').on('check',function(){
  var slideshow=$(this).closest('.slideshow');
  var pages=$(this).find('.item');
  var index=slideshow.find('.slides .isActive').index();
  pages.removeClass('isActive');
  pages.eq(index).addClass('isActive');
});

/* Lazyloading
$('.slideshow').each(function(){
  var slideshow=$(this);
  var images=slideshow.find('.image').not('.is-loaded');
  images.on('loaded',function(){
    var image=$(this);
    var slide=image.closest('.slide');
    slide.addClass('is-loaded');
  });
*/

var timeout=setTimeout(function(){
  slideshowNext(slideshow,false,true);
},slideshowDuration);

slideshow.data('timeout',timeout);
});

if($('.mainContent .slideshow').length > 1) {
  $(window).on('scroll',homeSlideshowParallax);
}
    return(
        <main>
                <section className={styles.slideshow}>
                    <div className={styles.slideshowInner}>
                        <div className={styles.slides}>
                            <div className={`${styles.slide} ${styles.isActive}`}>
                                <div className="slideContent">
                                    <div className={styles.caption}>
                                    <div className={styles.title}>Slide title 1</div>
                                    <div className={styles.text}>
                                        <p>Slide description 1</p>
                                    </div> 
                                    <a href="#" className={styles.btn}>
                                        <span className={styles.btnInner}>Learn More</span>
                                    </a>
                                    </div>
                                </div>
                                <div className={styles.imageContainer}> 
                                    <img src="./images/bg1.jpg" alt="" className={styles.image} />
                                </div>
                            </div>
                            <div className={styles.slide}>
                                <div className="slideContent">
                                    <div className={styles.caption}>
                                        <div className={styles.title}>Slide title 2</div>
                                        <div className={styles.text}>
                                            <p>Slide description 2</p>
                                        </div> 
                                        <a href="#" className={styles.btn}>
                                            <span className={styles.btnInner}>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src="./images/bg2.jpg" alt="" className={styles.image} />
                                </div>
                            </div>
                            <div className={styles.slide}>
                                <div className="slideContent">
                                    <div className={styles.caption}>
                                        <div className={styles.title}>Slide title 3</div>
                                        <div className={styles.text}>
                                            <p>Slide description 3</p>
                                        </div> 
                                        <a href="#" className={styles.btn}>
                                            <span className={styles.btnInner}>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src="./images/bg3.jpg" alt="" className={styles.image} />
                                </div>
                            </div>
                        
                        </div>
                        <div className={styles.pagination}>
                            <div className={styles.item}> 
                            <span className="icon">1</span>
                            </div>
                            <div className={styles.item}>
                            <span className="icon">2</span>
                            </div>
                            <div className={styles.item}>
                            <span className="icon">3</span>
                        </div>
                        </div>
                            <div className={styles.arrows}>
                                <div className={`${styles.arrow} ${styles.prev}`}>
                                <span className={`${styles.svg} svg-arrow-left`}>
                                    <KeyboardArrowLeftIcon fontSize="large"/>
                                    <span className="alt sr-only"></span>
                                </span>
                                </div>
                                <div className={`${styles.arrow} ${styles.next}`}>
                                <span className={`${styles.svg} svg-arrow-right`}>
                                <KeyboardArrowRightIcon fontSize="large"/>
                                  <span className="alt sr-only"></span>
                                </span>
                                </div>
                            </div>
                    </div> 
                </section>
            </main>
    )
}

export default Slider