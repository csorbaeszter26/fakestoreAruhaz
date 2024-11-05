//rfce
import React, { useContext } from 'react';
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

function Termekek() {
    const {termekLista}=useContext(ApiContext)

  return (
    <div className="row cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    {
        termekLista.map((termek)=>{
            return <Termek termek={termek} key={termek.id}/>
            })
    }
    </div>
  )
}

export default Termekek