import styled from "styled-components";

export const Aside = styled.aside`
  background-color:${(props=> props.theme.colors.primary)} ;
  width:400px ;
  height: 100vh;
  position: absolute;
  right: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition:  2s;
  color: #FFF;
  z-index: 1;

  .header_nav{
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_nav p{
    font-weight: 700;
    font-size: 1.2rem;
  }
  .header_nav span{
    font-weight: 400;
    width: 40px;
    font-size: 1rem;
    background-color: #000;
    padding: .5rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }
` 