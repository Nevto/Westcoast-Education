import HttpClient from "./http.js"
import { createStudentCard, addCourseImage } from "./dom.js";

const gallery = document.querySelector('#studentContainer')


const initPage = async () => {
    const students = await loadStudentCourses()

    students.forEach((student) => {
        gallery.appendChild(createStudentCard(student))
    })
    
    const images = document.querySelectorAll('.course-image img')
        addCourseImage(images);
  };

  
  const loadStudentCourses = async () => {
      const baseUrl = 'http://localhost:3000';
      const endPoint = 'students';
      
      const url = `${baseUrl}/${endPoint}`
      const http = new HttpClient(url);

      try {
        const students = await http.get()
        return students;
      } catch (error) {
        console.log("couldn't load student with respective courses:", error);
        return []
      }
    }
    
document.addEventListener('DOMContentLoaded', initPage);
