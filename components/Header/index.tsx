import { type } from "os";
import React from "react";
import ProductsCar from "../ProductsCar";
import { Container } from "./style";

type Props= {
  onClick: () =>void
}


const Header = ({onClick}:Props) => {
  return (
    <Container>
      <div className="ContainerHeader">
        <div className="logo">
          <p>
            <span>MKS</span> sistemas
          </p>
        </div>
        <div onClick={onClick}>
          <ProductsCar />
        </div>
      </div>
    </Container>
  );
};

export default Header;
