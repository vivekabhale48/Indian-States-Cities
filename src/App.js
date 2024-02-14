import { useState } from 'react';
import './App.css';
import {indiaData} from './IndiaData';

function App() {
  const [getState, setState] = useState("State");
  const [getCity, setCity] = useState("City");
  return (
    <div className="App w-[1024px] mx-auto h-[100vh] flex justify-center items-center gap-x-5">

      <div className='w-full flex flex-col justify-center'>
        <p className='text-sm'>Select your state</p>
        {/* States  */}
        <select className='border-black border-[1px] rounded-[15px] px-3 w-full min-h-[60px] shadow-3xl bg-slate-50 transition-all delay-150 cursor-pointer' onChange={(e)=> setState(e.target.value)}>
          {
            Object.keys(indiaData)?.map((value, index)=>{
              return <option value={`${value}`} key={index}>{value}</option>
            })
          }
        </select>
      </div>

      <div className='w-full flex flex-col justify-center'>
        <p className='text-sm'>Select your city</p>
        {/* Cities */}
        <select className='border-black border-[1px] rounded-[15px] px-3 w-full min-h-[60px] shadow-3xl bg-slate-50 transition-all delay-150 cursor-pointer' name='city' id='city' onChange={(e) => setCity(e.target.value)}>
          {
            indiaData[getState]?.map((cities, index)=>{
              // console.log(e)
              return <option key={index} value={`${cities}`}>{cities}</option>
            })
          }
        </select>
      </div>

    </div>
  );
}


export default App;
