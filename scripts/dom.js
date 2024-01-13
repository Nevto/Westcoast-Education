import { courses } from "./courses.js";
const createCourseCard = (courses) => {
    const div = document.createElement('div');
    div.appendChild(createCourseImage(courses.image_src, courses.id))
    div.appendChild(createCourseInfo(courses))
    return div;
}

const createCourseImage = (imageSrc, id) => {
    const image = document.createElement('img');
    console.log(imageSrc);
    image.setAttribute('src', courses.image_src[0].src);
    image.setAttribute('id', courses.image_src[0].alt);

    return image;
};

const createCourseInfo = (courses) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(
        document.createTextNode(`${courses.title} ${courses.courseNumber}`)
    );

    return paragraph;
};

const createCourseList = (courses, element) => {
    courses.forEach((courses) => {
        const container = createDiv();
        container.setAttribute('courseid', courses.id)
        container.appendChild(createSpan(courses.title))
        container.appendChild(createSpan(courses.courseNumber))
        container.appendChild(createSpan(courses.accessibility))
        container.appendChild(createSpan(courses.courseStart))
        container.appendChild(createSpan(courses.info))
        element.appendChild(container);
    })
}


const createDiv = () => {
    return document.createElement('div')
}

const createSpan = (text) => {
    const span = document.createElement('span')
    span.innerText = text;
    return span
}

const addCourseImage = (image) => {
    const imageDetails = [];

    image.forEach((image) => {
        const src = image.getAttribute('src')
        const courseId = image.getAttribute('id')
        console.log('Image source:', src);
        console.log('Course ID:', courseId);
        
        imageDetails.push({ src, courseId})
    })
    return imageDetails
}


export { createCourseCard, createCourseImage, createCourseList, addCourseImage }