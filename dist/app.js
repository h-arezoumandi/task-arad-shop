
let hours;
let minutes;
let seconds;
var set_interval;
let spanHours=document.getElementById('hours');
let spanMinutes=document.getElementById('minutes');
let spanSeconds=document.getElementById('seconds');

function timer() {
    seconds -= 1;
    spanSeconds.innerHTML = seconds;
    spanMinutes.innerHTML = minutes;
   
    if(minutes==0){
        hours-=1;
        spanHours.innerHTML=hours;
        minutes=59;
    }else if (seconds == 0) {
        if (minutes > 0) {
            seconds = 60;
            
            minutes -= 1;
        }
    
    } 
}
function startTimer() {
    hours=23;
    minutes = 59;
    seconds = 60;
   spanSeconds.innerHTML = seconds;
    spanMinutes.innerHTML = minutes; 
    spanHours.innerHTML=hours;
    set_inteval = setInterval( 'timer()', 1000 );
}
startTimer();


//swiper

var swiper = new Swiper('.swiper', {
      // Default parameters
      // loop:true,
        slidesPerView:1.6,
        spaceBetween: 40,
      
      // Responsive breakpoints
      breakpoints: {
       
        307: {
          slidesPerView: 1.7,
          spaceBetween: 40
        },
        443: {
          slidesPerView: 2,
          spaceBetween: 40
        },
       
        500: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        600: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        768: {
            slidesPerView:4,
            spaceBetween: 20
          },
        // 1011: {
        //   slidesPerView: 4,
        //   spaceBetween: 20
        // },
        1200:{
            slidesPerView:5,
            spaceBetween:20
        },
        1500:{
            slidesPerView:5,
            spaceBetween:20
        },
        1700:{
          slidesPerView:6,
          spaceBetween:10
      },
        1800:{
            slidesPerView:6,
            spaceBetween:30
        }
      }
    });

    swiper.on('slideChange', function () {
      console.log('slide changed');
    });

  