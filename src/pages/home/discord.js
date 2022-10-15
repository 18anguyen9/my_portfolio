import profile_pic from './../../profile_pic.JPEG'
function Discord(){
    const profilePic = require('./../../profile_pic2.JPEG');
    //<img className='w-6/12 h-1/12 rounded-lg' src={profilePic} />
    return (
        <div className='mt-36 mr-64 w-80 h-96 ml-24 bg-slate-900 rounded-lg relative '>
                <div className='bg-amber-600 rounded-t-lg h-1/4'>

                </div>
                <div className='absolute left-4 top-12'>
                    <img className='h-24 w-24 rounded-full border-6 border-slate-900 ' src={profilePic} />
                    <div className='bg-green-600 absolute left-16 top-16 w-7 h-7 border-6 border-slate-900 rounded-full'></div>
                </div>
                <div className='bg-black mt-14 mx-4 rounded-lg'>
                    <div className='p-2 text-base'>
                        <p>Alex Nguyen</p>
                        <p className='text-xs text-gray-500 pb-2'>18anguyen9@gmail.com</p>
                        <hr></hr>
                        <p className='pt-2'>Skills</p>
                        <ul className='w-full list-disc list-outside px-4 flex flex-wrap'>
                            <li className='w-1/3'>React</li>
                            <li className='w-1/3'>HTML</li>
                            <li className='w-1/3'>Javascript</li>
                            <li className='w-1/3'>CSS</li>
                            <li className='w-1/3'>Python</li>
                            <li className='w-1/3'>Pytorch</li>
                        </ul>
                        <p className='pt-2'>About Me</p>
                        <p className='text-xs text-gray-500'>Hi, I am a software developer with a 
                        background in Data Science! I enjoy frontend development,
                         and creating websites. Check out my projects!</p>

                    </div>
                </div>
                
		</div>
    )
}
export default Discord;