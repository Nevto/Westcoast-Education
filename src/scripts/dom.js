const createCourseCard = (course) => {
    const div = document.createElement('div');
    div.classList.add('course-image')
    div.appendChild(createCourseImage(course.imageUrl, course.id))
    div.appendChild(createCourseInfo(course))
    div.appendChild(createBookCourse(course.title, course.id))
    return div;
  
}

const createCourseImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.setAttribute('src', `${imageUrl}`);
    image.setAttribute('id', id);

    return image;
};

const createCourseInfo = (course) => {
    const span = document.createElement('span');
    span.innerText = `${course.title} ${course.courseNumber} ${course.description} ${course.accessibility} Course start: ${course.date} Duration: ${course.months} months`;
    return span;
}

const createBookCourse = (courseTitle, id, courseNumber) => {
    const button = document.createElement('button');
    button.classList.add('bookButton')
    button.setAttribute('title', `${courseTitle}`)
    button.setAttribute('id', id)
    button.setAttribute('courseNumber', `${courseNumber}`)
    
    button.innerText = 'Book Course'
    button.addEventListener('click', () => {
        alert(`titel är  ${courseTitle} & id är ${id}`);
    })
    return button
}

const createLogInForm = (course) => {
    const formData = document.createElement('div') // kundnamn, Faktureringsadress, e-post, mobilnummer
    console.log(course);
    formData.innerHTML = `
    <section class= "formData">
    <h2>${course}</h2>
    <form>
    <label for="studentName">Student Name:</label>
    <input type="text" id="studentName" name="studentName" placeholder="Enter your name" required>
    
    <label for="address">Address:</label>
    <textarea id="address" name="address" placeholder="Enter address" required></textarea>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter email address" required>
    
    <label for="mobileNumber">Mobile Number:</label>
    <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" required>
    
    <label for="courseTitle">Chosen course:</label>
    <input type="text" id="courseTitle" name="courseTitle" placeholder="" value="${course}"  required>
    
    <button type="submit">Book my course!</button>
    </form>
    </section>
    `
    return formData;
}

const createNewCourse = () => {
    const newCourse = document.createElement('div')

    newCourse.innerHTML = `
    <section class= "newCourseForm" id = "addCourse">
    <h2>"Here you may add new courses!"</h2>
    <form>
    <label for="courseNumber">Course Number</label>
    <input type="text" id="courseNumber" name="courseNumber" placeholder="Enter new Coursenumber" required>

    <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Enter name of new course" required>
    
    <label for="description">Description:</label>
    <input type="text" id="description" name="description" placeholder="Enter a course description" required>
    
    <label for="months">Duration:</label>
    <input type="text" id="months" name="months" placeholder="Enter how many months the course will be" required>
    
    <label for="accessibility">Accessibility</label>
    <input type="text" id="accessibility" name="accessibility" placeholder="Distance or On-site?" required>
   
    <label for="date">Date:</label>
    <input type="text" id="date" name="date" placeholder="Enter course start date" required>

    <label for="courseCost">Price:</label>
    <input type="text" id="courseCost" name="courseCost" placeholder="Price of Course" required>
    
    <button class="bookButton" type="submit">Create new Course</button>
    </form>
    </section>
    `
    return newCourse
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


export { createCourseCard, createCourseImage, addCourseImage, createLogInForm, createBookCourse, createNewCourse}