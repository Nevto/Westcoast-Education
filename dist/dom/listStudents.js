var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        const span = document.createElement('span');
        span.innerText = `${student.studentName} ${student.address} ${student.email} ${student.mobileNumber} ${student.courseTitle}`;
        return span;
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
function setupFormEventListener() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
            console.log("i have been pressed");
            e.preventDefault();
            const searchTerm = document.getElementById('courseTitle').value.toLowerCase();
            const students = document.querySelectorAll('.course-image');
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
