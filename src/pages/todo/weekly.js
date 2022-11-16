import sendReq from '../../sendReq';
import { useState, useRef, useEffect } from "react";
function WeeklyData(){
    const weeklyUrl = 'api/weekly/';
    //const [bod,setBod] = useState(null);
    const getOptions = {
        method: "GET"
    }
    
    return sendReq(weeklyUrl,getOptions)


};
function AddWeekTask( title ){
    const weekUrl  = 'api/weekly/'
    const postOptions = {
        method: 'POST',
        body: {
            title :title,
            completed :false
        }
    };
    console.log(postOptions);
    sendReq(weekUrl,postOptions)

}

function Week({ title, completed }){
    const [comp, setComp] = useState(completed);
    
    const updateTask = (e)=> {
        const tesitngUrl  = 'api/weekly/';
        const bod = {
            'title':title,
            'completed':!comp
          };
        const postOptions = {
            method: 'POST',
            body: bod
        };
        sendReq(tesitngUrl,postOptions)
    };
    return (
        <div>
            <div className='flex justify-between border-t-2 border-amber-900 border-x-2'>
                <p className='w-24 whitespace-nowrap p-2'>{title}</p>
                <input className='mr-8' type="checkbox" checked={comp} onClick={(e) => {setComp(!comp);updateTask();}} name='complete'></input>
                
            </div>
        </div>
    )
}
export {WeeklyData, Week,AddWeekTask};