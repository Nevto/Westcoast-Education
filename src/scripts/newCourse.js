import { addCourseToJson } from "./addUser.js";
import { navigation } from "./changeUrl.js";
import { createNewCourse } from "./dom.js";

async function initpage() {
    const createcourse = createNewCourse()
    container.appendChild(createcourse)

    const newCourse = createcourse.querySelector('#addCourse form')
    newCourse.addEventListener('submit', (e) => {
        e.preventDefault();
        addCourseToJson(newCourse);
    })

}
navigation()

document.addEventListener('DOMContentLoaded', initpage)