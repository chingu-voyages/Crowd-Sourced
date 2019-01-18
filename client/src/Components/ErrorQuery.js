import React from 'react';
import { Button } from '../Components/Buttons';
import '../Styles/ErrorQuery.css';

// just a simple component for when a listing isn't found
export default function ErrorQuery(props){
  return(
    <div className='error-comp'>
      <div className='image-container'></div>
      <h2 className='title'>Listing Not Found</h2>
      <div className='line'></div>
      <p>Opps, looks like the listing is not available. Please check the URL for spelling or check out our home page.</p>
      <Button onClick={() => window.history.back()} text="Go Back" />
    </div>
  )
}
