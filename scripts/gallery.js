import { addCourseImage, createCourseCard, createCourseImage } from "./dom.js";
import { courses } from "./courses.js";
const gallery = document.querySelector('#courseGallery')

const course = () => {
    course.forEach((course) => {
        gallery.appendChild(createCourseCard(courses))
    })

    const images = document.querySelectorAll('.imageGallery')
    addCourseImage(images)
}

// console.log(courses);