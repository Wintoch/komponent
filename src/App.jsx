import { useEffect, useState } from 'react'
import './App.css'
import useToggle from '../hooks/useToggle'
//import devices from '../import/devices.js'
//import pl_desc from "../import/pl_desc.json"
import axios, * as others from 'axios';

function App() {

  const Url = "http://localhost:8080/"
  const[click,clickChange] = useToggle("");
  const[kategorie,clickKategorie] = useToggle("");
  const [data,setData] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
      const result = await fetch(Url, {mode:'cors'});
      const parsed = await result.json();
      //console.log(parsed)
      setData(parsed)
      //console.log(data)
    }
    return () =>{
      fetchData();
    }
    },[])

    const test = Object.entries(data)
    //console.log(test)

  function handleEvent(event){
      clickChange(click,event);
    };
    const handleLista = (event) =>{
      clickKategorie(kategorie,event);
      event.stopPropagation();
    }
  return (      
    <>
                  
      {click == true ? (
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
                  <li className='controlPanels'>Centrale sygnalizacji pożarowej</li>
                  <li className='repeaterPanels'>Urządzenia zdalnej obsługi</li>
                  <li className='detectors'>Czujki</li>
                  <li className='callPoints'>Ręczne ostrzegacze</li>
                  <li className='sirens'>Sygnalizatory</li>
                  <li className='accessories'>Akcesoria</li>
                  <li className='communication'>Programy</li>
                </ul>
            }
            </li>
            {/* {test.map((index) => {
              console.log(index)
               return(
                <li key={index}>
                  <img className="icon" src={`https://www.satel.eu/img/products/xl/${index[0]}.jpg`}/>
                  <h1>{index[0]}
                    <p>{index[1].name}</p>
                  </h1>
                </li>
               )
              })
            } */}
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