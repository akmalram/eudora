$(function() {

    //responsive menu
    $('.toggleButton').click(function() {
        $('.toggleButton').toggleClass('toggleButtonClick');
        $('.toggleLines').toggleClass('toggleLinesClick');
        $('.list').toggleClass('showing');
    });

    // responsive tab
    $('.tabs').on('click', 'li', function() {
        var tabsId = $(this).attr('id');
        $(this).addClass('tab_active').siblings().removeClass('tab_active');
        $("#" + tabsId + "-content-box").addClass('tab_active').siblings().removeClass('tab_active');
        
    });

    // Popups...

    var $popus =  $('.popups');
    $popus.slideUp();
    $('.popups-btn').click(function() {
        $(this).next().slideToggle();
    });

    //more info...

    var $info =  $('.more_info');
    $info.slideUp();
    $('.pref_btn').click(function() {
        $(this).next().slideToggle();
    });

    // form validate

    $('#form').submit(function() {
        var $email = $('#email');
        if($email.val().length == 0 || $email.val() == " " ) {
            $('#email-error').text('Invalid e-mail address...');
            return false;
        }else {
            $('#email-error').text(' ');            
            return true;
        }
    });
});

