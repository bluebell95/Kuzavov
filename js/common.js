$(document).ready(function() {

$('.owl-carousel-events').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000,
                dots:true, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

	
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('#carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: "",
		smartSpeed:600,
		autoplayTimeout:20, //Время смены слайда
		autoplay: true,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

$(function() {
  
// Dropdown toggle
$('.dropdown-toggle-ru').click(function(){
  $(this).next('.dropdown-ru').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle-ru') && !$(target).parents().is('.dropdown-toggle-ru')) {
    $('.dropdown-ru').hide();
  }
});

});

$(function() {
  
// Dropdown toggle
$('.dropdown-toggle').click(function(){
  $(this).next('.responsive-menu-drop').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.responsive-menu-drop').hide();
  }
});

});



$(function() {
  
// Dropdown toggle
$('.dropdown-news-button').click(function(){
  $(this).next('.dropdown-news').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-news-button') && !$(target).parents().is('.dropdown-news-button')) {
    $('.dropdown-news').hide();
  }
});

});
$(function() {
  
// Dropdown toggle
$('.dropdown-number-button').click(function(){
  $(this).next('.dropdown-number').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-number-button') && !$(target).parents().is('.dropdown-number-button')) {
    $('.dropdown-number').hide();
  }
});

});


$(function() {
  
// Dropdown toggle
$('.dropdown-blog-button').click(function(){
  $(this).next('.dropdown-blog').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-blog-button') && !$(target).parents().is('.dropdown-blog-button')) {
    $('.dropdown-blog').hide();
  }
});

});



});