import React ,{Fragment} from 'react'
import './style/Card.css'

const Card = ({content,number, TrueFalse , cd}) => {
    console.log('xxx');
  return (
    <>
        <div className='card'>
        <div className='c1'><h4>{content}</h4></div>
      <div  className={'c2 Cedit'} id="check">{number}</div>
     { TrueFalse?  <div className='c3' >View Details</div> : '' }

        </div>
    </>
  )
}

export  {Card}