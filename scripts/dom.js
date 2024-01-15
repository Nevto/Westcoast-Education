
const createCourseCard = (course) => {
    const div = document.createElement('div');
    div.classList.add('course-image')
    div.appendChild(createCourseImage(course.imageUrl, course.id))
    div.appendChild(createCourseInfo(course))
    return div;
}

const createCourseImage = (imageUrl, id) => {
    // console.log(imageUrl);
    const image = document.createElement('img');
    image.setAttribute('src', `${imageUrl}`);
    image.setAttribute('id', id);

    return image;
};

const createCourseInfo = (course) => {
    const span = document.createElement('span');
    span.innerText = `${course.title} ${course.courseNumber} ${course.description} ${course.accessibility} ${course.date} ${course.months}`;
    return span;
}
// const createCourseList = (courses, element) => {

//     courses.forEach((course) => {
//         const container = createDiv();
//         container.setAttribute('courseid', course.id)
//         container.appendChild(createSpan(course.title))
//         container.appendChild(createSpan(course.courseNumber))
//         container.appendChild(createSpan(course.accessibility))
//         container.appendChild(createSpan(course.courseStart))
//         container.appendChild(createSpan(course.info))
//         element.appendChild(container);
//     })

// }


// const createDiv = () => {
//     return document.createElement('div')
// }

// const createSpan = (text) => {
//     const span = document.createElement('span')
//     span.innerText = text;
//     return span
// }

const addCourseImage = (image) => {
    image.forEach((image) => {
        const src = image.getAttribute('src')
        const courseId = image.getAttribute('id')

        image.addEventListener('click', () => {
            alert(`Kursens id är ${courseId}, kursens bildkälla är: ${src}`);
        });
    })
}


export { createCourseCard, createCourseImage, addCourseImage}