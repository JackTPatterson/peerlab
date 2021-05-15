function dialog() {

    // Declare variables
    var dialogBox = $('.dialog'),
        dialogTrigger = $('.dialog__trigger'),
        dialogClose = $('.dialog__close'),
        dialogTitle = $('.dialog__title'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    // Open the dialog
    dialogTrigger.on('click', function (e) {
        if (!dialogBox.hasClass('dialog--active')) {

            dialogBox.toggleClass('dialog--active');
            $(window).scrollTop(0);
            e.stopPropagation();
        }
    });



    $(document).ready(function () {

        if (!localStorage.getItem("DontShow")) {
            setTimeout(function () {
                if (!dialogBox.hasClass('dialog--active')) {

                    dialogBox.toggleClass('dialog--active');
                }
            }, 1000)
        }

    });

    // Close the dialog - click close button
    dialogClose.on('click', function () {
        dialogBox.removeClass('dialog--active');
    });

    // Close the dialog - press escape key // key#27
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            dialogBox.removeClass('dialog--active');
        }
    });

    // Close the dialog - click outside


}

// Run function
$(dialog);

$('#cbx1').click(function () {
    if ($(this).is(':checked')) {
        localStorage.setItem("DontShow", "true");
    } else {
        localStorage.setItem("DontShow", "false");
    }
});





function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

//* Make specific detail run functions

document.addEventListener('aos:in', ({
    detail
}) => {
    if (detail.id == "trigger") {
        animateValue("num1", 0, 22, 1000);
        animateValue("num2", 0, 17, 1000);
        animateValue("num3", 0, 50, 1000);
    }
});


