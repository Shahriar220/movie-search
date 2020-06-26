import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results'
import axios from 'axios'
import Popup from './components/Popup'
import './App.css';

function App() {
    const [state, setState] = useState({
        s: " ",
        results: [],
        selected: {}
    })
    const apiurl = " http://www.omdbapi.com/?i=tt3896198&apikey=1cbe805b"
    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + '&s=' + state.s).then(({data}) => {
                let results=data.Search;
                setState(prevState=>{
                  return{...prevState,results:results}
                })
            });
        }
    }
    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s: s }
        })
        console.log(state.s);
    }
    const openPopup=id=>{
      axios(apiurl +"&i" +id).then(({data})=>{
        let result=data;
        setState(prevState=>{
          return {...prevState,selected:result}
        })
      })
    }
    const closePopup=()=>{
      setState(prevState=>{
        return{...prevState,selected:{}}
      })
    }

    return ( 
      <div className = "App" >
        <div className = "headr" >
          <h1> Movie Box </h1>  
        </div > 
        <div>
          <Search handleInput = { handleInput }
          search = { search }/>
          <Results results={state.results} openPopup={openPopup} />
          {(typeof state.selected.Title!="undefined")?<Popup selected={state.selected} closePopup={closePopup}/>:false} 
        </div> 
      </div>
    );
}

export default App;