
import { useState, useRef, useEffect } from "react";
import profile_pic from './../../profile_pic.JPEG'
import home from './home.css'
import Contact from './../contact/contact'
import Discord from './discord';
import Experience from './experience';
import Proj from './proj'
import Cat from '../cat/cat'
import '../cat/cat.css';
import { Link } from 'react-router-dom'

function Home() {
	const [curPage, setCurPage] = useState(0);
	const [endLanding,setLanding] = useState(false);
	const [fadeDiv, setfade] = useState('');
	const [fadein, setfadein] = useState('');
	const ref = useRef();
	useEffect(()=>{
        ref.current.focus();

    },[])
	const forward = () => {
		if (curPage===2){
			setCurPage(0);
		}else{
			setCurPage(curPage+1);
		}
		
	}
	const back = () => {
		if (curPage==0){
			setCurPage(2);
		}else{
			setCurPage(curPage-1);
		}
	}
	const keypress = (e) => {
		
		setfade('animate-fadeout')
		setTimeout(() => {
			setLanding(true);
			setfadein('animate-fadein')
		}, 4900);
        
    }
	
	return (
		<div className='w-full h-screen' onKeyDown={keypress} ref={ref} tabIndex={-1} onClick={keypress}>
			
			{!endLanding ? <Cat className={fadeDiv}></Cat> 
			: 
			<div className={'flex text-white text-3xl w-full mt-44 '+fadein }>
				<div className='ml-60 w-2/6'>
					<p className='text-amber-400 text-xl py-2'>Hello!</p>
					<p className='text-amber-400 text-4xl py-2'>I'm Alex Nguyen</p>
					<p className='text-amber-400 text-xl py-2'>A Software developer</p>

					<div className='flex pt-2'>
						<div className = 'pr-2'>
							<button className="bg-slate-100 hover:bg-gray-400 text-gray-900  font-bold py-2 px-2 rounded inline-flex items-center">
								<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
								<a  href={require("../../Alex_Resume.pdf")} download="Alex_Nguyen_Resume">Resume</a>
							</button>
						</div>
						
						<div className='pl-2'>
							<button className="bg-slate-100	hover:bg-gray-400 text-gray-900 font-bold py-2 px-2 rounded inline-flex items-center">
								<Link to = '/contact'>Let's Talk</Link>
								
							</button>
						</div>
					</div>
				</div>
				
				<div className='flex mr-64 w-80 h-96 ml-24 '>
					<div className='bg-slate-100 w-4 h-full bg-opacity-60 mr-1 rounded-lg h-screen flex hover:bg-opacity-40'>
						<button className='relative' onClick={back} >
							<div className='h-64'>&nbsp;</div>
							<div className="h-0 w-0 absolute border-y-8 border-y-transparent border-r-[8px] border-r-white bottom-[148px] top-44 left-[2px]"></div>
						</button>
					</div>
					<Discord className={curPage!==0 ? 'hidden' :''}></Discord>
					<Experience className={curPage!==1 ? 'hidden' :''}></Experience>
					<Proj className={curPage!==2 ? 'hidden' :''}></Proj>
					<div className='bg-slate-100 w-4 h-full bg-opacity-60 ml-1 rounded-lg h-screen flex hover:bg-opacity-40'>
						<button className='relative' onClick={forward}>
							<div className='h-64'>&nbsp;</div>
							<div className="h-0 w-0 absolute border-y-8 border-y-transparent border-l-[8px] border-l-white bottom-[148px] top-44 left-[2px]"></div>
						</button>
					</div>
				</div>
			</div>
			}
			
			
        </div>
	);
}

export default Home;
