import { Link } from 'react-router-dom'


function Nav() {
        return (
            <nav className='text-white'>
                <ul className='flex justify-between px-32 pt-8 text-lg'>
                    <li className=''>
                        <Link to = 'Home' >Home</Link>
                    </li>
                    <li className=''>
                        <Link to = 'Home'>About</Link>
                    </li>
                    <li className=''>
                        <Link to = 'projects'>Projects</Link>
                    </li>
                    <li className=''>
                        <Link to = 'contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        )
}
export default Nav;