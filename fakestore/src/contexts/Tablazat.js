import React, { useContext } from 'react'
import { ApiContext } from "./ApiContext";


function Tablazat() {

    const { termekLista, deleteAdat } = useContext(ApiContext);

    const sv = {...termekLista}

    function adatTorles(id){
       deleteAdat("/products", id)
    }


  return (
    <table className='table'>
        <thead>
            <tr>
                <th scope="col">Kép</th>
                <th scope="col">Név</th>
                <th scope="col">Ár</th>
                <th scope="col">Kategória</th>
                <th scope="col">Leírás</th>
                <th scope="col">Törlés</th>
            </tr>
        </thead>

        <tbody>
           
                {termekLista.map((adat)=>{
                    return <tr> 
                    <td scope="col"><img src={adat.image} class="img-fluid" alt="kép"/></td>  
                    <td scope="col">{adat.title}</td> 
                    <td scope="col">{adat.price} €</td> 
                    <td scope="col">{adat.category}</td>  
                    <td scope="col">{adat.description}</td>  
                    <td scope="col"><button className="btn torles" onClick={()=>adatTorles(adat.id)}>Törlés</button></td> 
                    </tr>
                }
                
                )}
                
          
        </tbody>
    </table>
  )
}

export default Tablazat