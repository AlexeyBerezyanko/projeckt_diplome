const swaper = new Swiper('.swiper',{
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    direction: 'vertical',
    
    pagination: {
        el: '.swiper-pagination',
    },
      
    //slidesPerView: 3,
    spaceBetween: 100,
})