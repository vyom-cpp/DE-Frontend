// Function to fetch and display attendance for faculty
function displayFacultyAttendance() {
    // Fetch attendance data for faculty from the backend
    // Replace this with your backend API call
    const facultyAttendanceData = {
        DM: { totalQRGenerated: 10, totalScans: 5 },
        OS: { totalQRGenerated: 10, totalScans: 8 },
        OOPS: { totalQRGenerated: 10, totalScans: 7 },
        PEM: { totalQRGenerated: 10, totalScans: 9 },
        COA: { totalQRGenerated: 10, totalScans: 6 }
    };

    // Display attendance data for faculty
    const facultyAttendanceElement = document.getElementById("attendanceTrackerFaculty");
    facultyAttendanceElement.innerHTML = "<h3>Attendance Track</h3>";
    for (const subject in facultyAttendanceData) {
        const attendancePercentage = (facultyAttendanceData[subject].totalScans / facultyAttendanceData[subject].totalQRGenerated) * 100;
        facultyAttendanceElement.innerHTML += `<p>${subject}: ${attendancePercentage.toFixed(2)}%</p>`;
    }
}

// Initial call to display faculty attendance
displayFacultyAttendance();