import { addCourseImage, createCourseCard, createLogInForm} from "./dom.js";
import HttpClient from "./http.js";
import { addStudentToJson } from "./addUser.js";
import { navigation } from "./changeUrl.js";
import { cancelLogInForm} from "./updateUi.js";


const gallery = document.querySelector('#courseGallery')
let isFormOpen = false


async function initpage() {
    const courses = await loadCourses();

    courses.forEach((course) => {
        gallery.appendChild(createCourseCard(course));

    })
    const images = document.querySelectorAll('.course-image img')
    addCourseImage(images);

    
    const logInButtons = document.querySelectorAll('.bookButton');
    logInButtons.forEach((logInButton) => {
        logInButton.addEventListener('click', () => {
            const container = logInButton.closest('.course-image')
            const courseTitle = logInButton.getAttribute('title');
            
            if (!isFormOpen) {
                showLogInForm(courseTitle, container);
                isFormOpen = true;
            }
    
        });
    });
}

const loadCourses = async () => {
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    const courses = await http.get();
    return courses;
}

function hideForm() {
    const form = document.querySelector('.formData');
    if (form) {
        form.style.display = "none";
        isFormOpen = false;
    }
}


const showLogInForm = async (course, container) => {
    hideForm()

    const logInForm = createLogInForm(course)
    container.appendChild(logInForm)
    const form = logInForm.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addStudentToJson(form)
    })

    

    const cancelButton = logInForm.querySelector('.cancel');
    if (cancelButton) {
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            cancelLogInForm(logInForm);
            isFormOpen = false
            
        });

    }
}




navigation()

document.addEventListener('DOMContentLoaded', initpage)

