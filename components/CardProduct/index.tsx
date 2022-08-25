
import {Card} from './styled'
 
type Props={
  name:string,
  description:string,
  price:string,
  photo:string,
  key:number
}


const CardProduct = ({key,name, description, price, photo}:Props) => {

  return (
    <>
       <Card>
          <div className="photo_product">
            <img src={photo} alt="kkajskjd" />
          </div>
          <div className='price_name'>
            <p>{name}</p>
            {/* retirando os O's que a requisição traz, usando parseInt */}
            <span>R${parseInt(price)}</span>
          </div>
          <div className='description'>
            {description}
          </div>
          <button className='buy'>COMPRAR</button>
       </Card>
    </>
  )
}



 
export default CardProduct