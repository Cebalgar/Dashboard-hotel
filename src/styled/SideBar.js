import styled, { css } from "styled-components";


export const SideBar = styled.div`
  ${(props) => {
    return !props.sidebar
      ? css`
          margin-left: -350px;
        `
      : css`
          margin-left: 10px;
        `;
  }}
  background: #FFF;
  width: 20%;
  max-width: 350;
  height: 100%;
  min-height: 100vh;
  float: left;
  transition: margin 2s;
  align-items: start;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 20px;
  & img {
    width: 50px;
    height: 60px;
  }
`;
export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 900;
  span {
    display: block;
    font-size: 12px;
    font-weight: 300;
    color: #5d5449;
  }
`;

export const SideBarNav = styled.ul`
  display: block;
  float: left;
  width: 100%;
  list-style: none;
  padding: 20px;

  li {
    a {
      text-decoration: none;
      font-size: 17px;
      color: #799283;
      float: left;
      width: 100%;
      padding: 20px;
    
    }
  }
  li {
    a:hover {
      color: #e23428;
    }
  }
  li {
    a:focus {
      font-weight: 600;
      border-left: 5px solid #e23428;
      transition: border 0.1s;
      color: #e23428;
    }
    .icon {
      font-size: 25px;
      margin-right: 10px;
      padding: 0;
     
    }
  }
`;

export const UserContainer = styled.div`
 
  margin: 450px auto 48px;
  max-width: 240px;
  text-align: center;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  & span {
    font-size: 12px;
    font-weight: 300;
    color: #b2b2b2;
  }
`;
export const ImgContainer = styled.div`
  margin-bottom:30px;
  width: 100px;
  height: 100px;
  border-radius: 13px;
  & img{
    margin-left:60px;
    width: 125px;
    height: 125px;
  }
 
`;
export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #393939;
`;

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin: 40px 0 70px;
  & span {
    display: block;
    font-size: 13px;
    color: #799283;
    font-weight: 300;
  }
`;
export const H5 = styled.h5`
  font-size: 14px;
  font-weight: 300;
  color: #799283;
  margin-bottom: 40px;
`;
