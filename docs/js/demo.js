/**
 * Created by Ali Dalal on 2/12/2017.
 */

$(document).ready(function () {
    $('.easy-alert-btn').on('click', function () {
        $.easyAlert('This is a ' + $(this).text() + ' alert!', 'info', $(this).attr('data-easy-alert-position'));
    });
    $('.easy-alert-type-btn').on('click', function () {
        $.easyAlert('This is a ' + $(this).text() + ' alert!', $(this).attr('data-alert-type'), $(this).attr('data-easy-alert-position'));
    });
    $('.easy-alert-animation').on('click', function () {
        var animationName = $('.select-animation').val();
        $.easyAlert({
            message: "Animated alert is shown",
            alertType: 'success',
            position: "t l",
            showAnimation: animationName,
            hideAnimation: animationName,
        });
    });
    $('.custom-alert-btn').on('click', function () {
        $.easyAlert('This is a custom alert', 'custom');
    });
    $('.event-complete').on('click', function () {
        $.easyAlert({
            message: 'Event will be fired after 3 seconds',
            complete: function (e, msg) {
                $.easyAlert('Event <strong>COMPLETE</strong> called', 'info', 't r');
            },
            showDuration: 3000
        });
    });
    $('.event-clicked').on('click', function () {
        $.easyAlert({
            message: 'Event will be fired after alert is clicked',
            clicked: function (e, msg) {
                $.easyAlert('Event <strong>CLICKED</strong> called', 'info', 't r');
            },
        });
    });
    $('.event-hidden').on('click', function () {
        $.easyAlert({
            message: 'Event will be fired after alert is hidden',
            hidden: function (e, msg) {
                console.log(e, msg);
                $.easyAlert('Event <strong>HIDDEN</strong> called', 'info', 't r');
            },
            time: 3000,
            autoHide: true
        });
    });


});
