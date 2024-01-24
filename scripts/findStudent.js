import { navigation } from "./changeUrl.js";


const initPage = ()  => {
    navigation()
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