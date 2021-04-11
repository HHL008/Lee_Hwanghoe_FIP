(() => {
  //stub
  console.log('JS is linked! Hooray!');

let burger = document.querySelector('#burger'),
      burgerContent = document.querySelector('#mainNav'),
      navFiller = document.querySelector('#mobileNavCon'),
      btns = document.querySelectorAll('a');

      btns.forEach(btn => {
        btn.addEventListener('click', function(){
          btns.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        })
      })


      function burgerMenu() {
        burgerContent.classList.toggle("slideToggle");
        navFiller.classList.toggle("blank");
      };

      burger.addEventListener("click", burgerMenu, false);

})();