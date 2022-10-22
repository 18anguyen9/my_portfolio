import city from '../../city.svg'
import catpic from '../../cat.svg'
import catest from '../../catest.svg'
import './cat.css';
function Cat(){
    /*<<div className='w-full overflow-hidden max-h-[1000px] max-w-[500px] absolute'>
                    <div className='bg-no-repeat h-[2500px] w-[2500px] animate-catAnimation' style = {{ backgroundImage: `url(${catest})` }}></div>

                </div>*/
    return (
        <div className='text-white h-screen overflow-hidden'>
            <div className='bg-gradient-to-b from-cyan-800 via-black to-cyan-800 w-full h-64 relative'>
                <div className='w-full absolute bottom-0 '>
                    <div className='bg-repeat  h-64 mx-12 animate-cityAnimation' style = {{ backgroundImage: `url(${city})` }}></div>
                </div>

                <div className='w-full overflow-hidden max-h-[110px] max-w-[190px] absolute bottom-0 left-[150px]'>
                    <div className='bg-no-repeat h-[3000px] w-[3000px] animate-catAnimation' style = {{ backgroundImage: `url(${catpic})` }}></div>

                </div>
                
                
                
        

                
                

            </div>
            
            
            

        </div>
    )
}
export default Cat;