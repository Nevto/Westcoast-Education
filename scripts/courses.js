// Create the courses

const courses = [

    {
        id: 1,
        title: "Blockchain dev course",
        courseNumber: 1,
        accessibility: 'distance',
        courseStart: '3 months',
        info: 'Classroom or distance',
        imageUrl: "assets/images/Blockchain.jpg"
    },
    {
        id: 2,
        title: "Web Development",
        courseNumber: 2,
        accessibility: 'On-site',
        courseStart: '2 months',
        info: 'Classroom',
        imageUrl: 'assets/images/Web Development.jpg'
    },
    {
        id: 3,
        title: "Data Science Fundamentals",
        courseNumber: 3,
        accessibility: 'Distance',
        courseStart: '4 months',
        info: 'Online',
        imageUrl: 'assets/images/Data Science.jpg'
    },
    {
        id: 4,
        title: "Graphic Design Course",
        courseNumber: 4,
        accessibility: 'On-site',
        courseStart: '1 month',
        info: 'Classroom',
        imageUrl: 'assets/images/Graphic Design Course.jpg'
    },
    {
        id: 5,
        title: "Mobile App Development",
        courseNumber: 5,
        accessibility: 'Distance',
        courseStart: '3 months',
        info: 'Online',
        imageUrl: 'assets/images/Mobile App Development.jpg'
    },
    {
        id: 6,
        title: "Photography Basics",
        courseNumber: 6,
        accessibility: 'On-site',
        courseStart: '1.5 months',
        info: 'Classroom',
        imageUrl: 'assets/images/Photography Basics.jpg'
    },
    {
        id: 7,
        title: "Business Management Essentials",
        courseNumber: 7,
        accessibility: 'Distance',
        courseStart: '2.5 months',
        info: 'Online',
        imageUrl: 'assets/images/Business Management Essentials.jpg'
    },
    {
        id: 8,
        title: "Artificial Intelligence in Business",
        courseNumber: 8,
        accessibility: 'On-site',
        courseStart: '3 months',
        info: 'Classroom',
        imageUrl: 'assets/images/Artificial Intelligence in Business (1).jpg'
    },
    {
        id: 9,
        title: "Digital Marketing Strategies",
        courseNumber: 9,
        accessibility: 'Distance',
        courseStart: '2 months',
        info: 'Online',
        imageUrl: 'assets/images/Digital Marketing Strategies.jpg'
    },
    {
        id: 10,
        title: "UX/UI Design Principles",
        courseNumber: 10,
        accessibility: 'On-site',
        courseStart: '2 months',
        info: 'Classroom',
        imageUrl: 'assets/images/UXUI Design Principles.jpg'
    }

]

const listAllCourses = () => courses

export default listAllCourses