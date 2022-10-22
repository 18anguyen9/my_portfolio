import profile_pic from './../../profile_pic.JPEG'
import { Link } from 'react-router-dom'
function Proj({ className }){
    const profilePic = require('./../../profile_pic2.JPEG');

    return (
        <div className={'bg-slate-900 rounded-lg relative w-full  ' + className}>
            
            <div className='bg-amber-600 relative rounded-t-lg h-1/4'>
                <p className = 'text-black font-bold text-base absolute bottom-0 left-32'>Projects</p>
            </div>
            <div className='absolute left-4 top-12'>
                    <img className='h-24 w-24 rounded-full border-6 border-slate-900 ' src={profilePic} />
                    <div className='bg-green-600 absolute left-16 top-16 w-7 h-7 border-6 border-slate-900 rounded-full'></div>
            </div>
            <div className='bg-black mt-14 mx-4 rounded-lg mb-2'>
                <div className='p-2 text-base'>
                    <p>Weather App</p>
                    <ul className='w-full list-disc list-outside px-4 flex flex-wrap'>
                        <li className='w-full text-sm'>Deveoped in React using OpenweatherAPI</li>
                        <li className='w-full text-sm'>
                            <Link className='w-full underline underline-offset-4 hover:text-opacity-50 hover:decoration-slate-700' to = '/projects'>
                                View it Here!
                            </Link>
                        </li>
                    </ul>
                    <hr className='my-2'></hr>
                    <div className='p-2 text-base'>
                    <p>Wordle App</p>
                    <ul className='w-full list-disc list-outside px-4 flex flex-wrap'>
                        <li className='w-full text-sm'>Deveoped in React and JS</li>
                        <li className='w-full text-sm'>
                            **In progress
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default Proj;