import { addCourseImage, createCourseCard, createCourseImage, createCourseList } from "./dom.js";
import { courses } from "./courses.js";
const gallery = document.querySelector('#courseGallery')


courses.forEach((course) => {
    console.log('image source', course.imageUrl);
    gallery.appendChild(createCourseCard(courses.title, courses.id))
    gallery.appendChild(createCourseImage(courses))
})

const images = document.querySelectorAll('.imageGallery')
addCourseImage(images)


// console.log(courses);