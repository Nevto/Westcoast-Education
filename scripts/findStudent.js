import { adminNav, navigation } from "./changeUrl.js";
import { createStudentCard } from "./dom.js";
import HttpClient from "./http.js";
import { loadStudentCourses } from "./loadStudent.js";

const initPage = ()  => {
    adminNav()
}

const form = document.getElementById('searchForm');
form.addEventListener('submit', async (e) => {
    console.log("i haveben");
    e.preventDefault();
    
    const searchTerm = document.getElementById('courseTitle').value.toLowerCase();
    const students = document.querySelectorAll('.course-image')

    students.forEach((student) => {
        const courseTitle = (student.dataset.courseTitle || '').toLowerCase();
        if(courseTitle.includes(searchTerm) || searchTerm === '') {
            student.style.display = ''
        }else {
            student.style.display = 'none';
        }
    })


});

function clearResults() {

    document.innerHTML = '';
}

navigation()

document.addEventListener('DOMContentLoaded', initPage)