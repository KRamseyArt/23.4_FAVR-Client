import React from 'react';

import './ValidationError.css';

export default function ValidationError(props) {
  if(props.message){
    return (
      <div className="error">
        {props.message}
      </div>
    );
  } else {
    return (
      <div className="valid">
        {props.children}
      </div>
    );
  }
}
