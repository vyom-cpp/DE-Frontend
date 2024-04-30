// Function to fetch and display attendance for students
function displayStudentAttendance() {
    // Fetch attendance data for students from the backend
    // Replace this with your backend API call
    const studentAttendanceData = {
        DM: { totalQRGenerated: 10, totalScans: 3 },
        OS: { totalQRGenerated: 10, totalScans: 6 },
        OOPS: { totalQRGenerated: 10, totalScans: 5 },
        PEM: { totalQRGenerated: 10, totalScans: 7 },
        COA: { totalQRGenerated: 10, totalScans: 4 }
    };

    // Display attendance data for students
    const studentAttendanceElement = document.getElementById("studentAttendance");
    studentAttendanceElement.innerHTML = "<h4>Your Attendance</h4>";
    for (const subject in studentAttendanceData) {
        const attendancePercentage = (studentAttendanceData[subject].totalScans / studentAttendanceData[subject].totalQRGenerated) * 100;
        studentAttendanceElement.innerHTML += `<p>${subject}: ${attendancePercentage.toFixed(2)}%</p>`;
    }
}

// Initial call to display student attendance
displayStudentAttendance();