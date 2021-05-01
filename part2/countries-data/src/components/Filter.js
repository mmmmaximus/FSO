import React from 'react';

const Filter = ({func}) => {
  return (
    <div>
      find countries <input onChange={func}/>
    </div>
  )
}

export default Filter
