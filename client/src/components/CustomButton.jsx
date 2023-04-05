import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/helpers';


function hexToRgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const rgbaColor = hexToRgba(snap.color, 0.5);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        backgroundColor: rgbaColor,
        color: getContrastingColor(snap.color)
      }
    }
  }


  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton