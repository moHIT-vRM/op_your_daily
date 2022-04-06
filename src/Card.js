import React ,{Fragment} from 'react'
import './style/Card.css'

const Card = ({content,number, TrueFalse , id}) => {
    console.log('xxx');
  return (
    <>
        <div className='card'>
        <div className='card_title'><h4>{content}</h4></div>
      <div  className={'card_number Cedit'} id={id}><h5>{number}</h5></div>
     { TrueFalse?  <div className='card_btn' >View Details</div> : '' }

        </div>
    </>
  )
}

export  {Card}