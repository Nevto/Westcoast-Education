import HttpClient from "./http.js"
import { createStudentCard, addCourseImage, createStudentImage } from "./dom.js";
import { adminNav, navigation,} from "./changeUrl.js";

// const gallery = document.querySelector('#courseGallery')


// const initPage = async () => {
//     const students = await loadStudentCourses()

//     students.forEach((student) => {
//         gallery.appendChild(createStudentCard(student))
//     })
    
//     const images = document.querySelectorAll('.course-image img')
//         createStudentImage(images);
//   };

  
  // const loadStudentCourses = async (searchTerm = '') => {
  //     const baseUrl = 'http://localhost:3000';
  //     const endPoint = 'students';
      
  //     const url = `${baseUrl}/${endPoint}?courseTitle_like=${searchTerm}`
  //     const http = new HttpClient(url);

  //     try {
  //       const students = await http.get()
  //       return students;

  //     } catch (error) {

  //       console.log("couldn't load student with respective courses:", error);

  //       return []
  //     }

  //   }
    
    navigation()
    
document.addEventListener('DOMContentLoaded', initPage);

export {loadStudentCourses}
