import {
    faBackward,
    faForward,
     faPlay
     } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Control() { 
  return (
    <div className='control'>
        <button className='control_skip-button'>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className='control_play-button'>
            <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className='control_skip-button'>
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default Control