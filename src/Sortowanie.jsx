import React, { useContext,useEffect,useState } from 'react'
import { ElementsContext } from './ElementsContext';
import { devices } from './devices';

function Sortowanie() {
  const {liSort} = useContext(ElementsContext);
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

  return(

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

)
}

export default Sortowanie