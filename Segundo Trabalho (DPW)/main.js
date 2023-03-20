var currentTime = new Date().getHours();
if (0 <= currentTime && currentTime < 6) {

    document.body.style.backgroundColor = "#F2C288";

}else if (6 <= currentTime && currentTime < 12) {

    document.body.style.backgroundColor = "#F2E8B3";

}else if(12 <= currentTime && currentTime < 18) {

    document.body.style.backgroundColor = "#8C683B";

}else {

    document.body.style.backgroundColor = "#BFA249";
}


    const countdown_timer = () => {
        const countDate = new Date('September 10, 2022 00:00:00');
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;


        };
setInterval(countdown_timer, 1000);


var index = 0;

show_slide = (i) => {
  index += i;

  var images = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
  if (index > images.length - 1) 
    index = 0 ;
  
  if (index < 0)
    index = images.length - 1;

  images[index].style.display = "block";
  dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));


    
















