import HttpClient from "./http.js";

const addStudent = (formData) => {
    //checks if the storage feature is supported by the current webbrowser
    if (typeof Storage !== 'undefined') {
        // looks to see if any students exist in the localstorage, and if it doesn't return an empty array
        try {
            const savedStudent = JSON.parse(localStorage.getItem('students')) || []
            
            savedStudent.push(formData)

            localStorage.setItem('students', JSON.stringify(savedStudent));
            
            alert('Form data saved sucessfully')
        } catch (error) {
            console.log('something went horribly wrong', error);
        }
        
    } else {
        alert('It seems like your browser may not support local storage =)')
    }
}

const addStudentToServer = async (formData) => {
    try {
        const url = 'http://localhost:3000/students';
        const http = new HttpClient(url);
        const result = await http.add(formData);
        alert('Form data saved successfully to server');
        return result.id;
    } catch (error) {
        console.log('Something went wrong when saving to the server', error);
    }
}

//takes my form data and stores it local storage
const saveStudentHandler = (form) => {
    const formData = {
        studentName: form.elements.studentName.value,
        address: form.elements.Address.value,
        email: form.elements.email.value,
        mobileNumber: form.elements.mobileNumber.value,
        courseId: form.elements.courseId.value
    };

    console.log('Form data submitted:', formData);
    addStudent(formData)
    addStudentToServer(formData)
};

const addStudentToJson = async (form) => {
    const data = saveStudentHandler(form);
    const studentId = await addStudentToServer(data);

    console.log('everything is done', data);
}


export { saveStudentHandler, addStudentToJson }