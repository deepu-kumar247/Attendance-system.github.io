// यह सुनिश्चित करता है कि जब पूरा HTML डॉक्यूमेंट लोड हो जाए, तभी स्क्रिप्ट चले।
document.addEventListener('DOMContentLoaded', function() {

    // HTML फ़ाइल में 'teacher-btn' और 'student-btn' ID वाले बटनों को ढूँढता है।
    const teacherBtn = document.getElementById('teacher-btn');
    const studentBtn = document.getElementById('student-btn');

    // अगर 'Teacher' बटन मौजूद है, तो उस पर क्लिक करने पर teacher.html पर जाएँ।
    if (teacherBtn) {
        teacherBtn.addEventListener('click', function() {
            window.location.href = 'teacher.html';
        });
    }

    // अगर 'Student' बटन मौजूद है, तो उस पर क्लिक करने पर student.html पर जाएँ।
    if (studentBtn) {
        studentBtn.addEventListener('click', function() {
            window.location.href = 'student.html';
        });
    }
});