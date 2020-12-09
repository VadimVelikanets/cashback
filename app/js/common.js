$(function() {
    $('.btn-close').click(
        function (e){
            e.preventDefault();
            $('.cashback').hide()
        }
    )
    //Выбор способа оплаты
    $('.way__item').click(
        function (){
            $('.way__item').removeClass('active')
            $(this).addClass('active')
        }
    )
    //Селект выбора карты
    $('.select-title').click(
        function (){
            $('.options').toggleClass('active')
        }
    )
    $('.card').click(
        function (){
            let number = $(this).find('.card__end').html();
            console.log(number)
            $('.select-name').html('•••• •••• •••• ' + number)
            $('.options').removeClass('active')
        }
    )
    //Просмотр оплаты
    $('.payment__item').click(
        function (){
            $(this).toggleClass('active')
        }
    )

    $('.btn-more').click(
        function (e){
            e.preventDefault();
            $('.hidden-payment').addClass('active')
            $(this).hide()
        }
    )

    //Sidebar
    $('.btn-sidebar').click(
        function (e){
            e.preventDefault();
            $('.sidebar').addClass('active')
            $(this).hide()
        }
    )
    $('.sidebar-close').click(
        function (e){
            e.preventDefault();
            $('.sidebar').removeClass('active')
            $('.btn-sidebar').show()
        }
    )
    //Mobile menu
    $('.hamburger').click(
        function (e){
            e.preventDefault();
            $('.header__wrapper, .header__bottom').slideToggle()
        }
    )
})