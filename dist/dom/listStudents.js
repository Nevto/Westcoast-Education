var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Creating my card body 
export function listStudents(students) {
    const cardBody = document.querySelector('#courseGallery');
    const createStudentCard = (student) => {
        const div = document.createElement('div');
        div.classList.add('course-image');
        div.dataset.courseTitle = student.courseTitle;
        div.appendChild(createStudentImage(student.img, student.id));
        div.appendChild(createStudentInfo(student));
        return div;
    };
    const createStudentInfo = (student) => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        const h2 = document.createElement('h2');
        div.classList.add('textContainer');
        span.innerHTML = `<h4>Student name</h4><p>${student.studentName}</p></h4> <h4>Adress</h4>${student.address} <h4>Email</h4>${student.email} <h4>Phone</h4>${student.mobileNumber}`;
        h2.innerText = `${student.courseTitle}`;
        div.appendChild(h2);
        div.appendChild(span);
        return div;
    };
    const createStudentImage = (img, id) => {
        const image = document.createElement('img');
        image.setAttribute('src', `${img}`);
        image.setAttribute('id', id);
        return image;
    };
    for (let student of students) {
        const studentCard = createStudentCard(student);
        cardBody.appendChild(studentCard);
    }
    setupFormEventListener();
}
// Finds my form and adds an eventlistener
function setupFormEventListener() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const searchTerm = document.getElementById('courseTitle').value.toLowerCase();
            const students = document.querySelectorAll('.course-image');
            // checks every student and see if they have the correct course title/letters in their dataset according to what you typed in the form
            // if they do display them, and hide the rest of the students
            students.forEach((student) => {
                const courseTitle = (student.dataset.courseTitle || '').toLowerCase();
                if (courseTitle.includes(searchTerm) || searchTerm === '') {
                    student.style.display = '';
                }
                else {
                    student.style.display = 'none';
                }
            });
        }));
    }
}
