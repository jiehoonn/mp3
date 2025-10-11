import { NavLink } from "react-router";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/education"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/employment"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Employment
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/achievements"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}