import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CarContainer } from "./styled";

type Props={
  onClick?: () => void
}

const ProductsCar = (onClick:Props) => {

  const {value} = useSelector((state:RootState)=>state.counter)



  return (
    <div>
      <CarContainer>
        <img src="/Vector.svg" alt="Productscar" />
        <span>{value}</span>
      </CarContainer>
    </div>
  );
};

export default ProductsCar;
