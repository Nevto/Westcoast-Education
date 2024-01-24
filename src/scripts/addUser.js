import { adminNav } from "./changeUrl.js";
import HttpClient from "./http.js";

const addStudentToServer = async (formData) => {
    try {
        const url = 'http://localhost:3000/students';
        const http = new HttpClient(url);
        const result = await http.add(formData);
        alert('Form data saved successfully to server');
        return result
    } catch (error) {
        console.log('Something went wrong when saving to the server', error);
    }
}

const saveCourseToServer = async (formData) => {
    try {
        const url = 'http://localhost:3000/courses';
        const http = new HttpClient(url);
        const result = await http.add(formData);
        alert('Form data saved successfully to server');
        return result
    } catch (error) {
        console.log('Something went wrong when saving to the server', error);
    }
}

//takes my form data and handles it
const saveStudentHandler = (form) => {
    const formData = {
        studentName: form.elements.studentName.value,
        address: form.elements.address.value,
        email: form.elements.email.value,
        mobileNumber: form.elements.mobileNumber.value,
        courseTitle: form.elements.courseTitle.value,
        img: "assets/students/Placeholder.jpg"
    };
    console.log('Form data submitted:', formData);
    addStudentToServer(formData)
};

const saveNewCourseHandler = (form) => {
    const newCourseData = {
        courseNumber: form.elements.courseNumber.value,
        title: form.elements.title.value,
        description: form.elements.description.value,
        months: form.elements.months.value,
        accessibility: form.elements.accessibility.value,
        price: form.elements.courseCost.value,
        imageUrl: "assets/images/Placeholdercourse.jpg",
        date: form.elements.date.value
    }
    console.log('New course submitted', newCourseData);
    saveCourseToServer(newCourseData)
}

const addStudentToJson = async (form) => {
    const data = saveStudentHandler(form);
    console.log('everything is done', data);
}

const addCourseToJson = async (form) => {
    const saveCourse = saveNewCourseHandler(form)
    console.log("it should  work now", saveCourse);
}

export { saveStudentHandler, addStudentToJson, addCourseToJson }