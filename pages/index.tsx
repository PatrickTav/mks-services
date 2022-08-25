// Componentes
import { ContainerProducts } from "../styles/home";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import { HeadMeta } from "../components/HeadMeta";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

// Custom Hook Para a requisição dos produtos
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [sidebar, setSideBar] = useState(false);

  const handleShowSidebar = () => {
    setSideBar(true);
  };
  // Uso do Custom Hook
  const {
    data: products,
    error,
    loading,
  } = useFetch(
    "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC"
  );

  return (
    <div>
      
      {/* Metadados da aplicação */}
      <HeadMeta />

      {sidebar && <Sidebar active={setSideBar} />}
      <Header onClick={handleShowSidebar} />
      <ContainerProducts>
        {products.map(({ name, id, price, description, photo }) => (
          <CardProduct
            key={id}
            name={name}
            price={price}
            description={description}
            photo={photo}
          />
        ))}
      </ContainerProducts>
    </div>
  );
};

export default Home;
