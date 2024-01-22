import { addCourseImage, createCourseCard, createLogInForm, createBookCourse } from "./dom.js";
import HttpClient from "./http.js";
import { addStudentToJson, saveStudentHandler } from "./addUser.js";
import { navigation } from "./changeUrl.js";


const gallery = document.querySelector('#courseGallery')


async function initpage() {
    const courses = await loadCourses();

    courses.forEach((course) => {
        gallery.appendChild(createCourseCard(course));

    })
    const images = document.querySelectorAll('.course-image img')
    addCourseImage(images);

    const logInButtons = document.querySelectorAll('.bookButton');
    console.log(logInButtons);
    logInButtons.forEach((logInButton) => {
        logInButton.addEventListener('click', () => {
            const courseTitle = logInButton.getAttribute('title');
            // Makes the form appear in the right container
            const container = logInButton.closest('.course-image')
            showLogInForm(courseTitle, container);
        });
    });
}

const loadCourses = async () => {
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    const courses = await http.get();
    return courses;
}


const showLogInForm = async (course, container) => {
   const logInForm = createLogInForm(course)
   container.appendChild(logInForm)

   const form = logInForm.querySelector('form')
   form.addEventListener('submit', (e) => {
    e.preventDefault();
    addStudentToJson(form)
   })
}


navigation()


console.log(showLogInForm);
document.addEventListener('DOMContentLoaded', initpage)


// courses.forEach((course) => {
//     console.log('image source', courses.imageUrl);
//     gallery.appendChild(createCourseCard(courses.title, courses.id))
// })

// const images = document.querySelectorAll('.imageGallery')
// addCourseImage(images)


// console.log(courses);
