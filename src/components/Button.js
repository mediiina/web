import React from 'react'
import logo from './logo.png';
import './Button.css';

function Button() {
    return (
      <div className="Button">
        <header className="Button-header">
        <img src={logo} className="Button-logo" alt="logo" />
          <p>
            Na sljedećem linku se može vidjeti vizija projekta i link GitHub profila
          </p>
          <a
            className="Button-link"
            href="https://drive.google.com/file/d/17pME8nB8dJzH5UWoFGFlsYUYOuelXh4c/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vizija
          </a>

          <a
            className="Github-link"
            href="https://github.com/mediiina"
            target="_blank"
            rel="noopener noreferrer"
          >
           GitHub
          </a>
        </header>
      </div>
    );
  }
  
  export default Button;