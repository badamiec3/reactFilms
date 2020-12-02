import React, {useState} from 'react';
import axios from 'axios';

const Exercise = () => {
  const [error, setError] = useState(null);
  const [data,setData]= useState("");
  const [apiKey, setApiKey] = useState("d024f6ef");
  const [filmTitle, setFilmTitle] = useState("");
  const [poster, setPoster] = useState("https://cdn.dribbble.com/users/791530/screenshots/14040547/media/5da24b4c552ddb1421995ca0797c2fba.jpg");

  
  
  const updateApiKey = (e) => {
      e.preventDefault(); 
      setApiKey(e.target.value);
  }
  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }


  const makeRequest =(e) => {
      axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
      .then(response => {
          console.log(response.data);
          setData(response.data);
          setPoster(data.Poster);
          setError(data.error);
      });
  };
  
  console.log(data.Poster);

  return (


    
    <>
        <div>
        <h2>Search for your favourite films</h2>
        <p>API Key</p>
        <input type="text" placeholder="d024f6ef" value={apiKey} onChange={(e)=>updateApiKey(e)} />
        <p>Film Title</p>
        <input type="text" onChange={(e)=>updateTitle(e)} />
        <button onClick={(e) => makeRequest(e)}>Search</button>
        <h4>{data.error}</h4>
        <h4>{data.Title}</h4>
        <h4>{data.Year}</h4>
        <h4>{data.Rated}</h4>
        <h4>{data.Genre}</h4>
        <h4>{data.Plot}</h4>
        <h4>{data.Awards}</h4>
        <img src={poster} alt="The poster"></img>

        </div>

        
  
        
    </> )

  if (error) {
      return 

      <>
      <h4>An error has occured: {error.message} </h4>
      </>
  }
   else if (!error) {

    return (
  
   

  <>
      <div>
      <h4>{data.error}</h4>
      <h4>{data.Title}</h4>
      <h4>{data.Year}</h4>
      <h4>{data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      <h4>{data.Awards}</h4>
      <img src={poster} alt="The poster"></img>
      </div>
      
  </> )

   } 
}


export default Exercise; 
