import Header from './Header.tsx';
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import Home from './mains/Home.tsx';
import Employment from './mains/Employment.tsx'
import Education from './mains/Education.tsx'
import Projects from './mains/Projects.tsx';
import Achievements from './mains/Achievements.tsx'
import Contact from './mains/Contact.tsx'

import { Routes, Route } from "react-router";

import '../styles/global.css';
import '../styles/layout.css';

export default function Root() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="navigation">
                <Nav />
            </div>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/employment'} element={<Employment />} />
                    <Route path={'/education'} element={<Education />} />
                    <Route path={'/projects'} element={<Projects />} />
                    <Route path={'/achievements'} element={<Achievements />} />
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}