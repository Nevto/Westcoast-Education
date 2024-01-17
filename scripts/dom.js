
const createCourseCard = (course) => {
    const div = document.createElement('div');
    div.classList.add('course-image')
    div.appendChild(createCourseImage(course.imageUrl, course.id))
    div.appendChild(createCourseInfo(course))
    div.appendChild(createBookCourse(course.courseNumber, course.id))
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

const createBookCourse = (courseNumber, id) => {
    const button = document.createElement('button');

    button.classList.add('bookButton')
    button.setAttribute('id', id)
    button.setAttribute('courseNumber', `${courseNumber}`)

    button.innerText = 'Book Course'
    button.addEventListener('click', () => {
        alert(`ID är ${id} kursnummer är ${courseNumber}`);
    })
    return button
}

const createLogInForm = (course) => {
    const formData = document.createElement('div') // kundnamn, Faktureringsadress, e-post, mobilnummer
    formData.innerHTML = `
    <section class= "formData">
        <h2>${course.title}</h2>
        <form>
            <label for="studentName">Student Name:</label>
            <input type="text" id="studentName" name="studentName" placeholder="Enter your name" required>

            <label for="billingAddress">Billing Address:</label>
            <textarea id="billingAddress" name="billingAddress" placeholder="Enter billing address" required></textarea>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email address" required>

            <label for="mobileNumber">Mobile Number:</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" required>

            <button type="submit">Submit</button>
        </form>
    </section>
  `

    document.body.appendChild(formData)
}



const addCourseImage = (image) => {
    image.forEach((image) => {
        const src = image.getAttribute('src')
        const courseId = image.getAttribute('id')

        image.addEventListener('click', () => {
            alert(`Kursens id är ${courseId}, kursens bildkälla är: ${src}`);
        });
    })
}


export { createCourseCard, createCourseImage, addCourseImage, createLogInForm, createBookCourse }