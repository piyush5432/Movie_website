import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchResult() {
  const {movie} = useParams();
  const url =`https://imdb-api.com/en/API/Search/k_5u2bun1l/${movie}`


const [data, setData] = useState()
useEffect(() => {
  async function fun1() {
    const response =await axios.get(url);
    
    setData(response.data.results);
  }
fun1();
}, [url])



  return (
    <div className='movieCards'>
        {
          data?.map((card)=>(
            <div className='movieCard'>
            <Link className='movieCardLink' to={`/movie/${card.id}`}>
                <img src={card.image} alt='movie img' className='movieCardImg' />
                <h1 className='movieCardTitle'>{card.title}</h1>
                
            </Link>
        </div>
            ))
        }
        
    </div>
  )
}

export default SearchResult



