
import '../../global-styles/slider.module.scss';
import $ from 'jquery'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const Slider = () => {

    var slideshowDuration = 7000;
var slideshow=$('.main-content .slideshow');

function slideshowSwitch(slideshow,index,auto){
  if(slideshow.data('wait')) return;

  var slides = slideshow.find('.slide');
  var activeSlide = slides.filter('.is-active');
  var activeSlideImage = activeSlide.find('.image-container');
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find('.image-container');
  var newSlideContent = newSlide.find('.slide-content');
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
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
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
      newSlide.addClass('is-active').removeClass('is-new');
      activeSlide.removeClass('is-active');
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
  var activeSlide=slides.filter('.is-active');
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
  var inner=slideshow.find('.slideshow-inner');
  var newHeight=400-(scrollTop/2);
  var newTop=scrollTop*0.8;

  inner.css({
    transform:'translateY('+newTop+'px)',height:newHeight
  });
}

$(document).ready(function() {
 $('.slide').addClass('is-loaded');

 $('.slideshow .arrows .arrow').on('click',function(){
  slideshowNext($(this).closest('.slideshow'),$(this).hasClass('prev'));
});

 $('.slideshow .pagination .item').on('click',function(){
  slideshowSwitch($(this).closest('.slideshow'),$(this).index());
});

 $('.slideshow .pagination').on('check',function(){
  var slideshow=$(this).closest('.slideshow');
  var pages=$(this).find('.item');
  var index=slideshow.find('.slides .is-active').index();
  pages.removeClass('is-active');
  pages.eq(index).addClass('is-active');
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

if($('.main-content .slideshow').length > 1) {
  $(window).on('scroll',homeSlideshowParallax);
}
    return(
        <main className="main-content">
                <section className="slideshow">
                    <div className="slideshow-inner">
                        <div className="slides">
                            <div className="slide is-active ">
                                <div className="slide-content">
                                    <div className="caption">
                                    <div className="title">Slide title 1</div>
                                    <div className="text">
                                        <p>Slide description 1</p>
                                    </div> 
                                    <a href="#" className="btn">
                                        <span className="btn-inner">Learn More</span>
                                    </a>
                                    </div>
                                </div>
                                <div className="image-container"> 
                                    <img src="./images/bg1.jpg" alt="" className="image" />
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slide-content">
                                    <div className="caption">
                                        <div className="title">Slide title 2</div>
                                        <div className="text">
                                            <p>Slide description 2</p>
                                        </div> 
                                        <a href="#" className="btn">
                                            <span className="btn-inner">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img src="./images/bg2.jpg" alt="" className="image" />
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slide-content">
                                    <div className="caption">
                                        <div className="title">Slide title 3</div>
                                        <div className="text">
                                            <p>Slide description 3</p>
                                        </div> 
                                        <a href="#" className="btn">
                                            <span className="btn-inner">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img src="./images/bg3.jpg" alt="" className="image" />
                                </div>
                            </div>
                        
                        </div>
                        <div className="pagination">
                            <div className="item is-active"> 
                            <span className="icon">1</span>
                            </div>
                            <div className="item">
                            <span className="icon">2</span>
                            </div>
                            <div className="item">
                            <span className="icon">3</span>
                        </div>
                        </div>
                            <div className="arrows">
                                <div className="arrow prev">
                                <span className="svg svg-arrow-left">
                                    <KeyboardArrowLeftIcon fontSize="large"/>
                                    <span className="alt sr-only"></span>
                                </span>
                                </div>
                                <div className="arrow next">
                                <span className="svg svg-arrow-right">
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