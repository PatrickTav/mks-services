import React from 'react'
import { Aside } from './styled'

type Props={
  active:any
}


const Sidebar = ({active}:Props) => {
  // Para o componente Sidebar ser fechado
  const handleCloseNavbar = ()=>{
    active(false)
  }
  return (
    <Aside>
        <div className='header_nav'>
          <p>Carrinho <br/>de Compras</p>
          <span onClick={handleCloseNavbar}>X</span>
        </div>

        <footer>
          <button> Finalizar Compra</button>
        </footer>
    </Aside>
  )
}

export default Sidebar