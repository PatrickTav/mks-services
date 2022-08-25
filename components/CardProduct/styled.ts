import styled from "styled-components";

export const Card = styled.div`
  background-color: #FFF;
  width: 217.56px;
  border-radius: 8px ;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  transition: .5s;
  
  

  .photo_product{
    text-align: center;
  }
  .photo_product img{
    width: 120.82px;
  }

  .price_name,
  .description{
    padding: 0 10px ;
  }
  .price_name{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .price_name p{
    font-size: 1rem;
    padding-bottom:2px ;
  }
  .price_name span{
    font-weight:700 ;
    font-size: 1rem;
    background-color:${(props)=> props.theme.colors.button} ;
    color: #FFF;
    padding: 4px 7px;
    border-radius: 5px ;
  }
  .description{
    text-align: center;
    font-size: 0.5rem;
  }
  .buy{
    padding:7px 20px ;
    font-weight: 600;
    color: #FFF;
    width: 100%;
    background-color: ${(props=>props.theme.colors.primary)};
    font-size: 1rem;
    text-align: center;
    border-radius: 0px 0px 8px 8px;
    border: none;
    cursor: pointer;
  }
` 