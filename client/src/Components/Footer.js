import React, { Component } from 'react';
import '../Styles/Footer.css';

export default class Footer extends Component {
  render(){
    return(
      <footer>
        <div className='authors'>
          <a href='https://github.com/chingu-voyages/bears-project-13'>Code Source</a>
          <span className='sub-title'>Created By:</span>
          <br/>
          <a className='single-author' href='https://github.com/virenb'>
            Viren Bhagat
          </a>
          <a className='single-author' href='https://josuerojasrojas.github.io'>
            Josue Rojas
          </a>
        </div>
      </footer>
    )
  }
}
