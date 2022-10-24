import { Link } from 'react-router-dom'


function Nav() {
        return (
            <nav className='text-white pb-2'>
                <ul className='flex justify-between px-32 pt-8 text-lg'>
                    <li className=''>
                        <Link to = 'Home' >Home</Link>
                    </li>
                    <li className=''>
                        <Link to = 'Home'>About</Link>
                    </li>
                    <li className='group relative'>
                        
                        <Link className='p-2' to = 'projects'>
                                Projects &nbsp; &nbsp;
                                <div className="h-0 w-0 absolute border-x-8 border-x-transparent border-t-[8px] border-t-white right-[8px] top-3"></div>
                        </Link>

                        <div className='bg-white  flex-wrap w-64 p-2 hidden text-black group-hover:flex absolute rounded-lg -left-6 top-8'>
                            <Link className='w-full' to = 'projects'>Weather App</Link>
                            <Link className='w-full' to = 'projects'>Weather App2</Link>
                            <Link className='w-full' to = 'projects'>Weather App3</Link>
                            <div className="h-0 w-0 absolute border-x-8 border-x-transparent border-b-[8px] border-b-white right-[148px] -top-2"></div>
                        </div>
                        
                    </li>
                    <li className=''>
                        <Link to = 'contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        )
}
export default Nav;