import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import GlobalStyle from '../../styles/global';
import { Container } from './style'
import api from '../../services/api';

function NotFound(){

  return(
    <div className = "NotFound">
      <>
        <GlobalStyle/>
        <Container>
          <h1>Not Found 404</h1>
            <Link to ="/login">Volte a home</Link>
        </Container>

      </>
    </div>
  )
}
export default NotFound;
