import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {Outlet} from 'react-router-dom';
import Footer from './Footer.js'
import Header from './Header.js'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;