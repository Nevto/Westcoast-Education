
const createCourseCard = (courses) => {
    const div = document.createElement('div');
    div.appendChild(createCourseImage(courses.image_src, courses.id))
    div.appendChild(createCourseInfo(courses))

}

const createCourseImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.setAttribute('src', `..assets\images/${image_src}`);
    image.setAttribute('id', id);

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
    courses.forEach((course) => {
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
    span.innterText = text;
    return span
}

const addCourseImage = (image) => {
    images.forEach((image) => {
        const src = image.getAttribute('src')
        const courseId = image.getAttribute('id')
    })
}


export { createCourseCard, createCourseImage, createCourseList, addCourseImage }