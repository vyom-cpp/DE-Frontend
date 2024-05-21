$(document).ready(function() {
    $('#user-type').on('change', function() {
        var userType = $(this).val();
        if (userType === 'faculty') {
            $('#faculty-login').removeClass('hidden');
            $('#student-login').addClass('hidden');
            $('#login-btn').removeClass('hidden');
            $('#register-link').removeClass('hidden');
        } else if (userType === 'student') {
            $('#student-login').removeClass('hidden');
            $('#faculty-login').addClass('hidden');
            $('#login-btn').removeClass('hidden');
            $('#register-link').removeClass('hidden');
        } else {
            $('#faculty-login, #student-login, #login-btn, #register-link').addClass('hidden');
        }
    });

    $('#login-btn').on('click', function() {
        var userType = $('#user-type').val();
        var validLogin = false;

        if (userType === 'faculty') {
            var username = $('#faculty-username').val();
            var password = $('#faculty-password').val();
            // Add your validation logic here
            if (username === 'faculty' && password === 'password') {
                validLogin = true;
            }
        } else if (userType === 'student') {
            var enrollment = $('#student-enrollment').val();
            var password = $('#student-password').val();
            // Add your validation logic here
            if (enrollment === 'student' && password === 'password') {
                validLogin = true;
            }
        }

        if (validLogin) {
            $('#main-container').addClass('hidden');
            $('#navbar').removeClass('hidden');
            $('#dashboard').removeClass('hidden');

            var navItems = '';

            if (userType === 'faculty') {
                navItems = `
                    <li class="nav-item"><a class="nav-link" href="#">Home Page</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Time Table</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Attendance Track</a></li>
                    <li class="nav-item"><a class="nav-link" href="qr.html">Generate QR</a></li>
                `;
            } else if (userType === 'student') {
                navItems = `
                    <li class="nav-item"><a class="nav-link" href="#">Home Page</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Time Table</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Attendance Track</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Scan QR</a></li>
                `;
            }

            $('#nav-items').html(navItems);
        } else {
            alert('Invalid credentials, please try again.');
        }
    });
    
    // $('#generateButton').on('click', function() {
    //     generateQR();
    // });
});

// document.getElementById("generateButton").addEventListener("click", generateQR);


// function generateQR() {
//     let qrText = document.getElementById("qrText").value;
//     let qrImage = document.getElementById("qrImage");

//     if (qrText.length > 0) {
//         new QRCode(qrImage, {
//             text: qrText,
//             width: 150,
//             height: 150
//         });
//     } else {
//         alert('Please enter text or URL.');
//     }
// }