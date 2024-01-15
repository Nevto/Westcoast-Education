import { addCourseImage, createCourseCard,} from "./dom.js";
import listAllCourses from "./courses.js";
import HttpClient from "./http.js";

const gallery = document.querySelector('#courseGallery')


async function initpage() {
    const courses = await loadCourses();

    courses.forEach((course) => {
        gallery.appendChild(createCourseCard(course));
    })
    const images = document.querySelectorAll('.course-image img')
    addCourseImage(images);
}

const loadCourses = async () => {
    const url = 'http://localhost:3000/courses';
    const http = new HttpClient(url);
    const courses = await http.get();
    return courses;
}


document.addEventListener('DOMContentLoaded', initpage)


// courses.forEach((course) => {
//     console.log('image source', courses.imageUrl);
//     gallery.appendChild(createCourseCard(courses.title, courses.id))
// })

// const images = document.querySelectorAll('.imageGallery')
// addCourseImage(images)


// console.log(courses);
