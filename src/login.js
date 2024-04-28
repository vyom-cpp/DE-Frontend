document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing default submission

    var userType = document.getElementById('user-type').value;

    if (!userType) {
        alert('Please select a user type.');
        return;
    }

    if (userType === 'faculty') {
        var facultyUsername = document.getElementById('faculty-username').value;
        var facultyPassword = document.getElementById('faculty-password').value;

        if (facultyUsername === 'faculty' && facultyPassword === 'password') {
            window.location.href = 'facultydashboard.html';
        } else {
            alert('Invalid faculty credentials. Please try again.');
        }
    } else if (userType === 'student') {
        var studentEnrollment = document.getElementById('student-enrollment').value;
        var studentPassword = document.getElementById('student-password').value;

        if (studentEnrollment === 'student' && studentPassword === 'password') { 
            window.location.href = 'studentdashboard.html';

        } else {
            alert('Invalid student credentials. Please try again.');
        }
    }
});

document.getElementById('user-type').addEventListener('change', function() {
    var userType = this.value;
    if (userType === 'faculty') {
        document.getElementById('faculty-login').classList.remove('hidden');
        document.getElementById('student-login').classList.add('hidden');
    } else if (userType === 'student') {
        document.getElementById('student-login').classList.remove('hidden');
        document.getElementById('faculty-login').classList.add('hidden');
    }
});