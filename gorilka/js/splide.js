// =================================================================================================================================> Slider
let splide = new Splide( '.splide', {

    perPage: 3,
    perMove: 1,

    breakpoints: {

      1660: {
        perPage: 2,
      },

      1130: {
        perPage: 1,
      },

    },

});
  
  splide.mount();
