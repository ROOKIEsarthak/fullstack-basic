import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  const [jokes , setJokes] = useState([])
  //const [loading , setLoading] = useState(true)

  const fetchData = async ()=>{

      try {
        const result = await axios.get('http://localhost:3000/api/jokes')
        setJokes(result.data)
        console.log(result.data);

      } catch (error) {
        console.log(error);
        
      }
    }      

  useEffect(()=>{    
    fetchData()
    console.log(jokes);
  })

  return (
    <>
      <h1>Chai and fullstack</h1>
      
          <p>JOKES:{jokes.length}</p>
            {
            jokes.length > 0 && 
            jokes.map((joke,index)=>{

              return(
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
              )
            })
          }
      
    </>
  )
}

export default App
