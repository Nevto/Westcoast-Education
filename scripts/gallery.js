import { addCourseImage, createCourseCard,} from "./dom.js";
import listAllCourses from "./courses.js";
const gallery = document.querySelector('#courseGallery')


function initpage() {
    const courses = listAllCourses();

    courses.forEach((course) => {
        gallery.appendChild(createCourseCard(course));
    })
    const images = document.querySelectorAll('.course-image img')
    addCourseImage(images);
}



document.addEventListener('DOMContentLoaded', initpage)


// courses.forEach((course) => {
//     console.log('image source', courses.imageUrl);
//     gallery.appendChild(createCourseCard(courses.title, courses.id))
// })

// const images = document.querySelectorAll('.imageGallery')
// addCourseImage(images)


// console.log(courses);