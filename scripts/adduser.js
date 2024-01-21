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
};


export { saveStudentHandler }