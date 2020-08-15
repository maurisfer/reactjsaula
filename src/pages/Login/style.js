import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  max-width: 800px;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  border-radius: 4px;
  margin: 80px auto;
  h1{
    font-size: 50px;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  img{
    max-width: 150px;
  }
`;

export const LoginForm = styled.div`
  input[type ="submit"]{
    width: 80px;
    background-color:blue;
  };
  input[type ="submit"]:hover{
    cursor:pointer;
  }


`;
