import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTrack } from '../../actions/song';
import { formatArtists } from '../../utils/formatArtists';

const Card = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [track, setTrack] = useState();

    const handleRedirect = () => {
        navigate('/');
    }

    useEffect(() => {
      getTrack(id, setTrack);
    }, [])

    const getTrackDuration = (ms) => {
      const minutes = Math.floor(ms / (60 * 1000)); 
      const seconds = Math.floor((ms % (60 * 1000)) / 1000);
  
      const formattedSeconds = String(seconds).padStart(2, '0');

      return `${minutes}:${formattedSeconds}`;
    }
    
  return (
    <>
    <button className='btn' onClick={handleRedirect}>На главную</button>
        {track && (<div>
          <img src={track.album.images[0].url} />
          <div className="track-name">{track.name}</div>
          <div className="track-artist">{formatArtists(track.artists)}</div>
          <div className="track-album">
            <div className="track-album-name">{track.album.name}</div>
            <div className="track-album-relise">{track.album.release_date}</div>
          </div>
          <div className="track-duration">{getTrackDuration(track.duration_ms)}</div>
        </div>)}
    </>
  )
}

export default Card;
