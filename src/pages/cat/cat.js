import city from '../../city.svg'
import carl from '../../cat.svg'
import catest from '../../catest.svg'
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import './cat.css';
function Cat({ className }){
    const ref = useRef();
    const navigate = useNavigate();
    const [CarlDesc, setCarlDesc] = useState(true);
    

    
    return (
        <div className={'text-white w-full px-8 py-2 h-screen '+ className}  >
            <div className='bg-gradient-to-b from-amber-900 via-black to-amber-900 w-full h-full relative rounded-lg'>
                <p className='text-center text-amber-600'></p>
                <div className='w-full absolute bottom-[100px] '>
                    <div className='bg-repeat  h-96 mx-12 animate-cityAnimation relative' style = {{ backgroundImage: `url(${city})` }}>
                        <div className='animate-titleFade'>
                            <div className='text-4xl animate-titleFade absolute right-[480px] bottom-[300px] text-amber-700 opacity-50 animate-bounce' >Welcome to Alex's Page</div>
                            <div className='text-4xl animate-titleFade absolute right-[450px] bottom-[260px] text-amber-700 opacity-50 animate-bounce' >Press Any Key to Continue!</div>
                        </div>
                    </div>
                   
                </div>

                <div className='w-full overflow-hidden max-h-[110px] max-w-[190px] absolute bottom-[100px] left-[150px]'>
                    <div className='bg-no-repeat h-[3000px] w-[3000px] animate-catAnimation relative' 
                        onMouseEnter={() => setCarlDesc(false)}
                        onMouseLeave={() => setCarlDesc(true)}
                        style = {{ backgroundImage: `url(${carl})` }}></div>
                </div>
                
                <div className={'bg-gray-900 rounded-lg p-2 w-32 h-32 absolute bottom-[200px] left-[360px] text-amber-900 text-sm ' + (CarlDesc ? ' hidden':' block') } >
                        Hi, My name is Carl and I am Alex's 7 month cat. Press any key to see more of Alex's Website!
                </div>
                <div className={'bg-gray-900 rounded-full rounded-lg w-4 h-4 absolute bottom-[185px] left-[345px] text-amber-900 text-sm ' + (CarlDesc ? ' hidden':' block') }></div>
                <div className={'bg-gray-900 rounded-full rounded-lg w-3 h-3 absolute bottom-[175px] left-[335px] text-amber-900 text-sm ' + (CarlDesc ? ' hidden':' block') }></div>
                <div className={'bg-gray-900 rounded-full rounded-lg w-2 h-2 absolute bottom-[163px] left-[323px] text-amber-900 text-sm ' + (CarlDesc ? ' hidden':' block') }></div>
                
                

            </div>
            
            
            

        </div>
    )
}
export default Cat;