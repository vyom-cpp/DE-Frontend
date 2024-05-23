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
            // Validation logic for faculty
            if (username === 'faculty' && password === 'password') {
                validLogin = true;
            }
        } else if (userType === 'student') {
            var enrollment = $('#student-enrollment').val();
            var password = $('#student-password').val();
            // Validation logic for student
            if (enrollment === 'student' && password === 'password') {
                validLogin = true;
            }
        }
        
        if (validLogin) {
            if (userType === 'faculty') {
                window.location.href = '/public/facultydashboard.html';
            } else if (userType === 'student') {
                window.location.href = '/public/studentdashboard.html';
            }
        } else {
            alert('Invalid credentials, please try again.');
        }        

        
    });
});
