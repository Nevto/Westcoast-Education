import HttpClient from "../Http/http.js";
import { listStudents } from "../dom/listStudents.js";
import { Student } from "../models/Students.js";
const gallery: HTMLElement | null = document.querySelector('#courseGallery')!;


const initPage = async (): Promise<void> => {
    const students: Student[] = await loadStudentCourses();

    listStudents(students)
};


const loadStudentCourses = async (searchTerm: string = ''): Promise<any[]> => {
  const baseUrl: string = 'http://localhost:3000';
  const endPoint: string = 'students';

  const url: string = `${baseUrl}/${endPoint}?courseTitle_like=${searchTerm}`;
  const http: HttpClient = new HttpClient(url);

  try {
    const students: any[] = await http.get();
    return students;
  } catch (error) {
    console.log("couldn't load student with respective courses:", error);
    return [];
  }
};

export default loadStudentCourses;

document.addEventListener('DOMContentLoaded', initPage)