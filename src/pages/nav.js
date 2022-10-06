import { Link } from 'react-router-dom'


function Nav() {
        return (
            <nav className='py-4 w-36 px-4 bg-slate-300 text-black h-full hidden lg:block'>
                <ul className=''>
                    <li className='h-12'>
                        <Link to = 'Home' >Home</Link>
                    </li>
                    <li className='h-12'>
                        <Link to = 'Home'>About</Link>
                    </li>
                    <li className='h-12'>
                        <Link to = 'projects'>Projects</Link>
                    </li>
                    <li className='h-12'>
                        <Link to = 'contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        )
}
export default Nav;