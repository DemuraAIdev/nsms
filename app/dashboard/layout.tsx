export default function Layout({ params, students, teachers, superadmins }) {

    return isLoggedIn ? dashboard : login;
}