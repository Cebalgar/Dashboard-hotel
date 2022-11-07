import styled, { css } from "styled-components";

export const NavbTop = styled.div`
  display: flex;
  background: #ffffff;
  height: 10%;
  max-height: 160px;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 20px -20px;
  transition: margin 1s, width 1s;
`;

export const H6 = styled.h6`
  font-size: 28px;
  font-weight: 600;
  color: #262626;
`;
export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
  list-style: none;

  & .icon {
    color: #135846;
    margin-right: 50px;
    cursor: pointer;
  }
`;

export const IconArrows = styled.button`
  ${(props) => {
    return !props.sidebar
      ? css`
          transform: none;
          transition-duration: 1s;
        `
      : css`
          transform: rotate(-180deg);
          transition-duration: 1s;
        `;
  }}
  margin: 30px;
  border: none;
  font-size: 30px;
  background: transparent;
  cursor: pointer;
`;
