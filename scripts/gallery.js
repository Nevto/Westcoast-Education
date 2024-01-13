import { addCourseImage, createCourseCard, createCourseImage, createCourseList } from "./dom.js";
import { courses } from "./courses.js";
const gallery = document.querySelector('#courseGallery')


courses.forEach((course) => {
    console.log('image source', course.image_src[0].src);
    gallery.appendChild(createCourseCard(course.image_src[0].src, course.id))

})

const images = document.querySelectorAll('.imageGallery')
addCourseImage(images)


// console.log(courses);