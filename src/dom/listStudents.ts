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
        const span: HTMLSpanElement = document.createElement('span');
        span.innerText = `${student.studentName} ${student.address} ${student.email} ${student.mobileNumber} ${student.courseTitle}`
        return span;
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