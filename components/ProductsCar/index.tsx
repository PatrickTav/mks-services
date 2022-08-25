import React, { useState } from "react";
import { CarContainer } from "./styled";

type Props={
  onClick?: () => void
}


const ProductsCar = (onClick:Props) => {




  return (
    <div>
      <CarContainer>
        <img src="/Vector.svg" alt="Productscar" />
        <span>0</span>
      </CarContainer>
    </div>
  );
};

export default ProductsCar;
