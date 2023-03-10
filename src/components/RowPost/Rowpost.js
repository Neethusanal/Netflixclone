import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { imageurl,API_KEY } from '../../constants/Constants'
import YouTube from 'react-youtube'

const Rowpost = (props) => {
const [movies, setMovies] = useState([])
const [urlId,setUrlId]=useState('')
 
  useEffect(() => {
    
  axios.get(props.url).then((response)=>{
    console.log(response.data,"lll")
    setMovies(response.data.results)
  })
  .catch(err=>{
    // alert("network error")
  })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
  console.log(id);
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
    if(response.data.length!==0){
      setUrlId(response.data.results[0])
    }
    else{
      console.log("Array Empty")
    }
  })
  }


 
  
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
          <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'}src={`${imageurl+obj.backdrop_path}`} alt="" />
      )}
   
    </div>
   {urlId && <YouTube videoId={urlId.key} opts={opts}  />}
    </div>
  )
}

export default Rowpost