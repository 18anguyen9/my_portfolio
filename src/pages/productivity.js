import sendReq from '../sendReq';
import { useState, useRef, useEffect } from "react";
import Task from './todo/task'
import {Score,WeeklyScore} from './todo/score';
import {WeeklyData, Week,AddWeekTask} from './todo/weekly'
function Productivity(){
    const [Tasks,setTasks] = useState(null);
    const [newTitle,setNewTitle] = useState('')
    const [week,setWeek] = useState(false);
    const current = new Date();
    const date = `${current.toLocaleString('default',{month:'long'})} ${current.getDate()}, ${current.getFullYear()}`
    const [score, setScore] = useState(null);
    const [newWeekTitle,SetWeekTitle] = useState('');
    const [weeklyScore, SetWeeklyScore] = useState(0);

    const addTask = (e)=> {
        const tesitngUrl  = 'api/add/';
        const bod = {
            'title':newTitle,
            'monday': false,
            'tuesday': false,
            'wednesday': false,
            'thursday': false,
            'friday': false,
            'saturday': false,
            'sunday': false
          };
        const postOptions = {
            method: 'POST',
            body: bod
        };
        sendReq(tesitngUrl,postOptions)
            //.then((data)=>console.log('Sent!'));
        //window.location.reload();
        setNewTitle('');
    };
    

    useEffect (() =>{
        const tesitngUrl  = 'api/add/';
        const getOptions = {
            method: "GET"
        }
        sendReq(tesitngUrl,getOptions)
        .then((data)=>{
            setScore(Score(data.data))
            const allTasks = data.data.map((task) =>{
                return (<div key={task.id} >
                    <Task 
                    mon={task.monday} 
                    tues = {task.tuesday}
                    wed = {task.wednesday}
                    thurs = {task.thursday}
                    fri = {task.friday}
                    sat = {task.saturday}
                    sun = {task.sunday}
                    title = {task.title}>

                    </Task>
                    </div>)
            })
            setTasks(allTasks)
            WeeklyData()
                .then((data)=>{
                    SetWeeklyScore(WeeklyScore(data.data));
                    const allWeeklyTasks = data.data.map((task) =>{
                        return (
                        <div key={task.title} >
                            <Week title = {task.title} completed={task.completed}></Week>
                        </div>
                        )
                    })
                    setWeek(allWeeklyTasks)
                })
        });
    },[])
    
    
    return (
        <div className='px-32 py-4 text-amber-400'>
            <div className='bg-amber-800 rounded-lg w-48 pl-2 text-xl bg-opacity-40 font-bold mb-4'>
                <p>Today is</p>
                <p className=''>{date}</p>
            </div>

            
            
            <div className=''>
                <div className='flex justify-between '>
                    <p className='w-32 font-bold'>Daily Tasks</p>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </div>
                {Tasks}
                <div className='w-full border-t-2 border-amber-900 border-x-2'></div>
                
                <form className='pt-4 pb-12'>
                    <input placeholder='Add Daily Task Here' className=' pl-2 text-black rounded-lg mr-8' onChange={(e)=>setNewTitle(e.target.value)} value = {newTitle}></input>
                    <button onClick={addTask} className='bg-slate-700 px-4 bg-opacity-60 ml-1 rounded-lg  hover:bg-opacity-40'>Submit</button>
                </form>

            </div>


            <div className='w-full flex'>
                <div className='w-1/3'>
                    <p className='w-32 font-bold'>Weekly Tasks</p>
                    {week}
                    <div className='w-full border-t-2 border-amber-900 border-x-2'></div>
                    
                    <form className='pt-4 pb-8'>
                        <input placeholder='Add Weekly Task Here' className=' pl-2 text-black rounded-lg mr-8' onChange={(e)=>SetWeekTitle(e.target.value)} value = {newWeekTitle}></input>
                        <button onClick={() => {AddWeekTask(newWeekTitle); SetWeekTitle('')}} className='bg-slate-700 px-4 bg-opacity-60 ml-1 rounded-lg  hover:bg-opacity-40'>Submit</button>
                    </form>
                </div>
                
                <div className='w-2/3'>
                    <div className=' pl-24 flex'>
                        <div className='w-1/2'>
                            <div className='font-bold pl-4 underline underline-offset-8'>Today's Score</div>
                            <div className={'flex w-32 h-32 rounded-full mt-4 items-center justify-center ' + (score<60 ? 'bg-red-600':'bg-green-600')}>
                                <p className='text-3xl font-black text-amber-400'>{score}%</p>
                            </div>
                        </div>
                        
                        <div className='w-1/2'>
                            <div className='font-bold underline underline-offset-8'>Weekly Task Score</div>
                            <div className={'flex w-32 h-32 rounded-full  mt-4 items-center justify-center ' + (weeklyScore<60 ? 'bg-red-600':'bg-green-600')}>
                                <p className='text-3xl font-black text-amber-400'>{weeklyScore}%</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='justify-center items-center flex mr-32'>
                        <button onClick={()=>window.location.reload(false)} className='bg-slate-700 bg-opacity-60 p-2 ml-1 rounded-lg  hover:bg-opacity-40'>Refresh Scores</button>
                    </div>
                </div>
                
            </div>


            
            
            
            
            
                
            
            
            
            
            
            
        </div>
    )
}
export default Productivity;