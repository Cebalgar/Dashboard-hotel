import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  border-radius: 12px;
  width: 75%;
  height: 600px;
  overflow-y: scroll;
  background-color: #fff;
`;
export const ContainerMenu=styled.ul`
display: flex;
flex-direction: row;
width: 40%;
margin-top: 56px;
padding-left:30px;
list-style: none;

`;
export const ContainerDasboard = styled(Container)`
width: 100%;
background:#F8F8F8;

`;


