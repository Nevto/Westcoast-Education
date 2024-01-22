import HttpClient from "./http.js"
import { createCourseCard, addCourseImage } from "./dom.js";

const gallery = document.querySelector('#studentContainer')


const initPage = async () => {
    const students = await loadStudentCourses()

    students.forEach((student) => {
        gallery.appendChild(createCourseCard(student))
    })
    
    const images = document.querySelectorAll('.course-image img')
        addCourseImage(images);
  };


const loadStudentCourses = async () => {
    const url = 'http://localhost:3000/students';
    const http = new HttpClient(url);
    const students = await http.get();
    return students
}

console.log(loadStudentCourses);

// const loadStudentCourses = (student) => {
//     const entries = newURLSearchParams(student).entries();
//     for (let [key, value] of entries) {
//         if (key !== 'title') {
//             const input = form.elements[key];
//             input.value = value
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', initPage);
