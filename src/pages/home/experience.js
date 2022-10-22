import profile_pic from './../../profile_pic.JPEG'
function Experience({ className }){
    const profilePic = require('./../../profile_pic2.JPEG');
    return (
        <div className={'bg-slate-900 rounded-lg relative w-full  ' + className}>
            
            <div className='bg-amber-600 relative rounded-t-lg h-1/4'>
                <p className = 'text-black font-bold text-base absolute bottom-0 right-12'>Work Experience</p>
            </div>
            <div className='absolute left-4 top-12'>
                    <img className='h-24 w-24 rounded-full border-6 border-slate-900 ' src={profilePic} />
                    <div className='bg-green-600 absolute left-16 top-16 w-7 h-7 border-6 border-slate-900 rounded-full'></div>
            </div>
            <div className='bg-black mt-14 mx-4 rounded-lg mb-2'>
                <div className='p-2 text-base'>
                    <p>Data Science Intern</p>
                    <p className='text-xs text-gray-500 pb-2'>AI Camp</p>
                    <ul className='w-full list-disc list-outside px-4 flex flex-wrap'>
                        <li className='w-full text-xs'>Developed Company Dashboard in React</li>
                        <li className='w-full text-xs'>Managed group of Highschool students to develop Computer Vision Project</li>
                    </ul>
                    <hr className='my-2'></hr>
                    <p className=''>Student Research Assistant</p>
                    <p className='text-xs text-gray-500 pb-2'>University of California, San Diego</p>
                    <ul className='w-full list-disc list-outside px-4 flex flex-wrap'>
                        <li className='w-full text-xs'>Prepared image data for CNN classification project</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
export default Experience;