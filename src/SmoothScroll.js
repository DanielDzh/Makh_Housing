export const smoothScroll = (elem) => {

   let burger = document.querySelector('.header_burger');
   let menuList = document.querySelector('.menu');

   if (burger.classList.contains('active')) {
      burger.classList.remove('active')
      menuList.classList.remove('active')
   }

   let speed_in_px = 100;

   var scrollY = document.getElementById(elem).offsetTop;

   if (scrollY === 0) {
      scrollY = 1;
   }

   let lastFrameTime = Date.now() - 1000;
   let totalSeconds = 0;
   let stop = false;
   let pos, prev_pos = 0;
   function loop() {
      if (stop) {
         window.scrollTo({ top: scrollY });
         return;
      }
      let now = Date.now();
      let deltaSeconds = (now - lastFrameTime) / 1000;
      lastFrameTime = now;
      draw(deltaSeconds);
      requestAnimationFrame(loop);
   }
   function draw(delta) {
      totalSeconds += delta;
      pos = (totalSeconds * speed_in_px % scrollY) % 100;
      if (navigator.userAgent.indexOf("Chrome") !== -1) {


         stop = true;
         return;
      } else {
         if (pos <= 1) {
            if (prev_pos && prev_pos > pos) {
               stop = true;
               return;
            }
         } else {
            if (prev_pos && prev_pos - 10 > pos) {
               stop = true;
               return;
            }
         }
      }

      prev_pos = pos;
      window.scrollTo({ top: Math.round(scrollY * pos / 100) });
   }
   loop();
}