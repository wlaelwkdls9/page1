$(".btns>li").click(function(){
 $(this).addClass("active");
 $(this).siblings().removeClass("active")
/*필터기능*/
let a=$(this).attr('data-filter')
$(".contents").isotope({filter:a})


})


//e.preventDefault();


/*
$('.contents').isotope({
 // options
 itemSelector: '.conbox',
 layoutMode: 'masonry'
}); */

const grid=new Isotope(".contents",{
 itemSelector: '.conbox',
 columWidth: '.conbox',
 transition: '0.2s'

})

setTimeout(function(){$(".contents").Isotope('layout')},100)

$(".fancybox").fancybox();


