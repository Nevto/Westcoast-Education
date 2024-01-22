import { addCourseToJson } from "./addUser.js";
import { navigation } from "./changeurl.js";
import { createNewCourse } from "./dom.js";

async function initpage()  {
}
const createcourse = createNewCourse()
container.appendChild(createcourse)

const newCourse = createcourse.querySelector('#addCourse form')
console.log(newCourse);
newCourse.addEventListener('submit', (e) => {
    console.log("Hey there");
    e.preventDefault();
    addCourseToJson(newCourse);
})
 
navigation()

document.addEventListener('DOMContentLoaded', initpage)