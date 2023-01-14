$(document).ready(function(){

    new WOW().init();

    var button =  $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });

    $('#brief-form').validate({
        rules:{
            name: "required",
            phone: "required",
            email: {required: true, email: true},
        },
        messages: {
            name: "Uveďte Vaše jméno",
            phone: "Uveďte Vaše telefonní číslo", 
            email: "Zadejte platnou e-mailovou adresu",
        }
    });

    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]
    });
});