import { Student } from "../models/Students";

export function listStudents (students: Student[]):void {
    const cardBody = document.querySelector<HTMLDivElement>('#courseGallery')!
    
    const createStudentCard = (student: Student): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div');
        div.classList.add('course-image')
        div.dataset.courseTitle = student.courseTitle;
        div.appendChild(createStudentImage(student.img, student.id))
        div.appendChild(createStudentInfo(student))
        return div;
    }
    
    const createStudentInfo = (student: Student): HTMLSpanElement => {
        const div: HTMLDivElement = document.createElement('div')
        const span: HTMLSpanElement = document.createElement('span');
        const h2: HTMLHeadElement = document.createElement('h2')
        div.classList.add('textContainer')
        span.innerHTML = `<h4>Student name</h4><p>${student.studentName}</p></h4> <h4>Adress</h4>${student.address} <h4>Email</h4>${student.email} <h4>Phone</h4>${student.mobileNumber}`
        h2.innerText = `${student.courseTitle}`

        div.appendChild(h2)
        div.appendChild(span)
        return div;
    }
    
    const createStudentImage = (img: string, id: string): HTMLImageElement => {
        const image: HTMLImageElement = document.createElement('img');
        image.setAttribute('src', `${img}`);
        image.setAttribute('id', id);
    
        return image;
    };


    for(let student of students) {
        const studentCard = createStudentCard(student)
        cardBody.appendChild(studentCard);
    }

    setupFormEventListener()
}
function setupFormEventListener(): void {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e: Event) => {
            console.log("i have been pressed");
            e.preventDefault();
    
            const searchTerm: string = (document.getElementById('courseTitle') as HTMLInputElement).value.toLowerCase();
            const students: NodeListOf<HTMLDivElement> = document.querySelectorAll('.course-image');
    
            students.forEach((student) => {
                const courseTitle: string = (student.dataset.courseTitle || '').toLowerCase();
                if (courseTitle.includes(searchTerm) || searchTerm === '') {
                    student.style.display = '';
                } else {
                    student.style.display = 'none';
                }
            });
        });

}
}
