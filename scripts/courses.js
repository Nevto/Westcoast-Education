// Create the courses

const courses = [
    {
        id: 1,
        courseNumber: 1,
        title: 'Blockchain Dev Course',
        description: 'Learn the fundamentals of blockchain technology and how to develop blockchain-based applications.',
        months: 2,
        accessibility: 'Distance or Onsite',
        imageUrl: 'assets/images/Blockchain.jpg',
        date: '2024-02-20'
    },
    {
        id: 2,
        courseNumber: 2,
        title: 'Web Development',
        description: 'Master the skills to create and design websites using HTML, CSS, and JavaScript.',
        months: 3,
        accessibility: 'On-site',
        imageUrl: 'assets/images/Web Development.jpg',
        date: '2024-03-13'
    },
    {
        id: 3,
        courseNumber: 3,
        title: 'Data Science Fundamentals',
        description: 'Embark on a journey to become a data scientist and gain the ability to analyze and interpret data.',
        months: 2,
        accessibility: 'Distance',
        imageUrl: 'assets/images/Data Science.jpg',
        date: '2024-03-20'
    },
    {
        id: 4,
        courseNumber: 4,
        title: 'Graphic Design Course',
        description: 'Develop your creativity and learn the principles of graphic design.',
        months: 6,
        accessibility: 'On-site',
        imageUrl: 'assets/images/Graphic Design Course.jpg',
        date: '2024-03-27'
    },
    {
        id: 5,
        courseNumber: 5,
        title: 'Mobile App Development',
        description: 'Create your own mobile apps using Android Studio or Xcode.',
        months: 9,
        accessibility: 'Distance',
        imageUrl: 'assets/images/Mobile App Development.jpg',
        date: '2024-04-03'
    },
    {
        id: 6,
        courseNumber: 6,
        title: 'Photography Basics',
        description: 'Capture stunning photos and learn the fundamentals of photography.',
        months: 3,
        accessibility: 'On-site',
        imageUrl: 'assets/images/Photography Basics.jpg',
        date: '2024-04-10'
    },
    {
        id: 7,
        courseNumber: 7,
        title: 'Business Management Essentials',
        description: 'Acquire essential business skills to start, run, and grow your own business.',
        months: 4,
        accessibility: 'Distance',
        imageUrl: 'assets/images/Business Management Essentials.jpg',
        date: '2024-04-17'
    },
    {
        id: 8,
        courseNumber: 8,
        title: 'Artificial Intelligence in Business',
        description: 'Explore the applications of artificial intelligence in various business sectors.',
        months: 6,
        accessibility: 'On-site or Distance',
        imageUrl: 'assets/images/Artificial Intelligence in Business (1).jpg',
        date: '2024-04-24'
    },
    {
        id: 9,
        courseNumber: 9,
        title: 'Digital Marketing Strategies',
        description: 'Learn how to develop and execute effective digital marketing campaigns.',
        months: 12,
        accessibility: 'Distance',
        imageUrl: 'assets/images/Digital Marketing Strategies.jpg',
        date: '2024-05-01'
    },
    {
        id: 10,
        courseNumber: 10,
        title: "UX/UI Design Principles",
        description: 'Understand the principles of user experience (UX) and user interface (UI) design to create user-friendly products.',
        Months: 6,
        accessibility: 'On-site',
        imageUrl: 'assets/images/UXUI Design Principles.jpg',
        date: '2024-09-01'
    }

]

const listAllCourses = () => courses

export default listAllCourses