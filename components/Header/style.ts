import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: #FFF;


  .ContainerHeader {
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: auto;
    padding: 0 10px;
    align-items: center;
    height: 4rem;

    .logo {
      p{
        font-weight: 200;
      }
      span{
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }
`;
