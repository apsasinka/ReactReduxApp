import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTrack } from '../../actions/song';

const Card = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [track, setTrack] = useState();

    const handleRedirect = () => {
        navigate('/');
    }

    useEffect(() => {
      getTrack(id, setTrack)
    }, [])
    
    console.log(track);
    
  return (
    <>
    <button className='btn' onClick={handleRedirect}>На главную</button>
        <div>Card</div>
    </>
  )
}

export default Card;
