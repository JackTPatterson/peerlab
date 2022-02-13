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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
             
              var uid = user.uid;

              $('#nav-ul').append(
                `
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" href="dashboard">Dashboard</a>
                </li> 
                `
              )

            }
          });



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
        animateValue("num1", 0, 70, 1000);
        animateValue("num2", 0, 250, 1000);
        animateValue("num3", 0, 5, 1000);
        animateValue("num4", 0, 5, 1000);
    }
});

$(document).ready(function () {

    $('#error2').hide();


});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    const email = $("#email-inp").val();

    if (validateEmail(email)) {
        $('#error2').hide();

    } else {
        $('#error2').show();
    }
}

$("#email-inp").change(validate);




  function sendStaffEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "peerlabtutoring@gmail.com",
      Password: "yekhlrgnjpweqmhv",
      To: 'peerlabtutoring@gmail.com', 
      From: "peerlabtutoring@gmail.com",
      Subject: "Feedback Submission",
      Body: `Peerlab Feedback. \n Name: ${$('#name-inp').val()} \n Email: ${$('#email-inp').val()} \n Message: ${$('#message-inp').val()}`,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }


  function sendFeedbackEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "peerlabtutoring@gmail.com",
      Password: "yekhlrgnjpweqmhv",
      To: document.getElementById("email-inp").value, 
      From: "peerlabtutoring@gmail.com",
      Subject: "Feedback Submission",
      Body: `Hello ${$('#name-inp').val()}. Your message has been sent to our team. Thank you for your feedback`,
    })
  }

