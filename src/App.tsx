import React, { useEffect, useState } from 'react';
import './App.css';
import s from './Counter.module.css'
import { Counter } from './Counter';
import { Table } from './Table';
import { Settings } from './Setting';

function App() {
  let [counter, setCounter] = useState<number>(0)
  let [minCounter, setMinCounter]= useState<number>(0)
  let [maxCounter, setMaxCounter]= useState<number>(5)
  
  
  useEffect(()=>{
    let valueSettings= localStorage.getItem('counterInput')
    let valueMinSettings= localStorage.getItem('counterMinInput')
    let valueMaxSettings= localStorage.getItem('counterMaxInput')
    if(valueSettings && valueMinSettings && valueMaxSettings){
      let newValue= JSON.parse(valueSettings)
      let newMinValue= JSON.parse(valueMinSettings)
      let newMaxValue= JSON.parse(valueMaxSettings)
      setCounter(newValue)
      setMinCounter(newMinValue)
      setMaxCounter(newMaxValue)
    }
  },[])
  
  useEffect( ()=> {
    localStorage.setItem('counterInput', JSON.stringify(counter))
    localStorage.setItem('counterMinInput', JSON.stringify(minCounter))
    localStorage.setItem('counterMaxInput', JSON.stringify(maxCounter))
    
  },[counter,minCounter,maxCounter])

  function addCounter() {
    setCounter(counter + 1)
  }

  function resetCounter() {
    setCounter(minCounter)
  }
  function setSettings(){
   /*  localStorage.setItem('counterInput', JSON.stringify(counter))
    localStorage.setItem('counterMinInput', JSON.stringify(minCounter))
    localStorage.setItem('counterMaxInput', JSON.stringify(maxCounter)) */
    setCounter(minCounter)
  }
 
  return (
    <div className={s.main}>
      <div  className={s.settings} >
      <Settings minCounter={minCounter} maxCounter={maxCounter} setSettings={setSettings} setMinCounter={setMinCounter} setMaxCounter={setMaxCounter}      />
     
    </div>
    <div className={s.count}>
      <Counter
        counter={counter} maxcounter={maxCounter}
      />
      <Table counter={counter} maxcounter={maxCounter} addCounter={addCounter} resetCounter={resetCounter} />
    </div>
    
    </div>

  );

}

export default App;
