$(function() {
    $('.list-special').each(function() {
        $('.list-special').click(function() {
            $(this).siblings('.list-son').stop().slideToggle();
            if($(this).children('.span1').hasClass('glyphicon glyphicon-triangle-bottom')){
                $(this).children('.span1').removeClass('glyphicon glyphicon-triangle-bottom').addClass('glyphicon glyphicon-triangle-top')
            }
            else{
                $(this).children('.span1').removeClass('glyphicon glyphicon-triangle-top').addClass('glyphicon glyphicon-triangle-bottom')
            }
        }) 
    })
    $('.list-son').each(function() {
        $('.list-son a').click(function() {
            $(this).siblings('a').children('li').css('color','white')
            $('.list-son a').children('li').css('color','white')
            $(this).children('li').css('color','#6ab5ff')
        })
    })
    $('.login1').click(function(){
        // console.log('dadadadaadad')
        var script=document.createElement('script');
        var head=document.getElementsByTagName('head')[0];
        script.src='static/js/index.js';
        head.appendChild(script);
    })
    $('.select__label').click(function() {
        $('.select__label').removeClass('select__label--active');
        $(this).addClass('select__label--active');
      });
      
      $('#js-usr-rtn').click(function() {
        $('#js-btn, .pointer, #js-field__pass').removeClass('--usr-rst ui-field--hidden');
        $('#js-btn, .pointer').addClass('--usr-rtn');
        $('#js-field__r-pass').addClass('ui-field--hidden');
        $('#js-btn1').show();
        $('#js-btn2').hide();
      });
      $('#js-usr-new').click(function() {
        $('#js-btn, .pointer, #js-field__r-pass, #js-field__pass').removeClass('--usr-rtn ui-field--hidden');
        $('#js-btn,.pointer').addClass('--usr-rst');
        $('#js-btn2').show();
        $('#js-btn1').hide();
      });
})