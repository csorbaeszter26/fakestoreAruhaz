import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import KosarContext from '../contexts/KosarContext'

function Termek(props) {

     const {kosarba} = useContext(KosarContext) 


    function katt(){
        kosarba(props.termek)
    }

  return (
    <div className='kartya'>
    <div className="card" >
    <div className="card-body">
    <img className="card-img" src={props.termek.image} alt="Card image cap"/>
      <h5 className="card-title">{props.termek.title}</h5>
      <p className="card-text">{props.termek.description}</p>
      <button className='gomb' onClick={()=>katt()}>Kosárba</button>
      <p className="card-text">{props.termek.price} €</p>
    </div>
    </div>
    </div>
  )
}

export default Termek