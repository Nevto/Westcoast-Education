const goToPage = (page) => {
    window.location.href = page;
}

const navigation = () => {
    const homePage = document.getElementById('homePage')
    const adminPage = document.getElementById('adminPage')
    const headerHome = document.getElementById('headerHome')
    
    homePage.addEventListener('click', () => {
        goToPage('index.html')
    })
    
    adminPage.addEventListener('click', () => {
        goToPage('addUser.html')
    })

    
    headerHome.addEventListener('click', () => {
        goToPage('index.html')
    })

}

const adminNav = () => {
    const adminView = document.getElementById('adminStudentView')
    adminView.addEventListener('click', () => {
        goToPage('adminCourses.html')
    })
}
export {navigation, adminNav}