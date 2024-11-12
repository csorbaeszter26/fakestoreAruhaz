import React from 'react'
import Tablazat from '../contexts/Tablazat'
import Urlap from '../contexts/Urlap'

function Admin() {
  return (

    <main className='row'>
              <article className='col-lg-12'>
                <h3>Admin</h3>
                <Tablazat />
                <Urlap />
              </article>
            </main>
  )
}

export default Admin