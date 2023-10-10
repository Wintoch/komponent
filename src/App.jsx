import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import useToggle from '../hooks/useToggle'
import { devices } from './devices'
import {ElementsContext} from './ElementsContext';
import Sortowanie from './Sortowanie';

function App() {
  
  const[click,clickChange] = useToggle("");
  const[kategorie,clickKategorie] = useToggle("");
  

  const Url = "http://localhost:8080/"
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
    const result = await fetch(Url, {mode:'cors'});
    const parsed = await result.json();
    setData(parsed);
  }
  return () =>{
    fetchData();
  }
  },[])

  const jsonArray = Object.entries(data);
  const devicesArray = Object.entries(devices);

  function liSort(event){
      event.stopPropagation();
      return jsonArray.map((index)=>{
        return(
          devicesArray.map((index2, key)=>{
            if(index[0] == index2[0] && index2[1].category == event.currentTarget.className){
              console.log(event.currentTarget.className)
                return(
                    <li key={key}>
                      <img className="icon" src={`https://www.satel.eu/img/products/xl/${index2[0]}.jpg`}/>
                      <h1>{index2[0]}
                        <p>{index[1].name}</p>                                    
                      </h1>
                    </li>
                )                            
            }
          })
      );
    });
  }


  function handleEvent(event){
      clickChange(click,event);
    };
    const handleLista = (event) =>{
      clickKategorie(kategorie,event);
    }

  return (  

    <>
                  
      {click == false ? (
        <div className="menu">
          <button
          className='exit'
          onClick={handleEvent}
          ><img src='./svg/exit.svg'/></button>
          <input type='text'
          className='search'
          ></input>
          <ul>
            <li>Ostatnie wyszukiwania</li>
            <li>Ulubione</li>
            <li className='Kategorie'
            onClick={handleLista}
            >Kategorie 
            {kategorie == true &&
                <ul className='listarozwijana'>
                  <li  onClick={liSort} className='controlPanels'>Centrale sygnalizacji pożarowej<ul><Sortowanie/></ul></li>
                  <li  className='repeaterPanels'>Urządzenia</li>
                  <li  className='detectors'>Czujki</li>
                  <li  className='callPoints'>Ręczne ostrzegacze</li>
                  <li  className='sirens'>Sygnalizatory</li>
                  <li  className='accessories'>Akcesoria</li>
                  <li  className='communication'>Programy</li>                                     
              </ul>
            }
          </li> 
         </ul>  
        </div>
      ):(
        <button
        className='guzik'
        onClick={handleEvent}
        ><img src='./svg/button.svg'/></button>
      )
      }

    </>

  )
}

export default App;