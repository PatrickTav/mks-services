// Componentes
import { ContainerProducts } from "../styles/home";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import { HeadMeta } from "../components/HeadMeta";
import Sidebar from "../components/Sidebar";

import { useState } from "react";



// Custom Hook Para a requisição dos produtos
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const [sidebar, setSideBar] = useState(false);

  const {value} = useSelector((state:RootState)=>state.counter)

  // Função passada como props para fechar e abrir o sidebar
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

      {/*Para colocar um skeleton  */}
      {loading && <h2>Carregando produtos</h2>}

      <ContainerProducts>
        {products &&
          products.map(({ name, id, price, description, photo }) => (
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
