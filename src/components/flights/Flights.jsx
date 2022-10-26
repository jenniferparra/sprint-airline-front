import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import { protectedRoute } from '../../utils/session'
// import Header from '../header/Header';
import './flight.scss'

const Flights = () => {

  // const navigate = useNavigate();
  //   const [reload, setReload] = useState(false)

  //   const handleCloseSession = () => {
  //     sessionStorage.clear();
  //     setReload(!reload)
  //   }

  //   useEffect(() => {
  //     protectedRoute(navigate)
  //   }, [reload])

  return (
    <>
      <div className='container-fluid row g-4'>

        {/* contenedor de la parte de equipaje */}
        <div className='col-sm-8'>

          {/* contenedor de título y botón de cambiar vuelo */}
          <div className='title d-flex justify-content-between'>
            <div>
              <h2><strong>Vuelo de Salida</strong></h2>
              <h3 className='mt-4'>Martes 30 Nov 2022</h3>
              <p className='title__country'>Colombia (CO) a Suiza</p>
              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button class="btn btn-change">Cambiar Vuelo</button>
            </div>
          </div>

          {/* contenedor de cuadro blanco */}
          <div className='row rounded g-2 shadow-lg bg-body p-3 d-flex align-items-center'>
            <p className='col hour d-flex flex-column align-items-center'>5:50PM</p>

            <div className='col scale  '>
              <p className='scale__text'>7 horas</p>
              <hr></hr>
              <p className='scale__text'>Sin escala</p>
            </div>

            <p className='col hour d-flex flex-column align-items-center'>6:47 PM</p>

            {/* contenedor de cuadro de maleta  */}
            <div className='col mx-2 rounded bag d-flex flex-column align-items-center'>
              <p className='bag__text'>1 objeto personal</p>
              <p className='bag__price'>$50,000 COP</p>
            </div>
            <div className='col me-2 rounded bag d-flex flex-column align-items-center'>
              <p className='bag__text'>Equipaje de mano</p>
              <p className='bag__price'>$100,000 COP</p>
            </div>
            <div className='col bag d-flex rounded flex-column align-items-center'>
              <p className='bag__text'>Equipaje 25kg</p>
              <p className='bag__price'>$200,000 COP</p>
            </div>
          </div>
        </div>

        <div className='col-sm-8'>

          {/* contenedor de título y botón de cambiar vuelo */}
          <div className='d-flex justify-content-between'>
            <div>
              <h2><strong>Vuelo de Regreso</strong></h2>
              <h3 className='mt-4'>Martes 25 Dic 2022</h3>
              <p className='title__country'>Suiza a Colombia</p>
              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button class="btn btn-change">Cambiar Vuelo</button>
            </div>
          </div>

          {/* contenedor de cuadro blanco */}
          <div className='row rounded g-2 shadow-lg bg-body p-3 d-flex align-items-center'>
            <p className='col hour d-flex flex-column align-items-center'>11 PM</p>

            <div className='col scale  '>
              <p className='scale__text'>7 horas</p>
              <hr></hr>
              <p className='scale__text'>Sin escala</p>
            </div>

            <p className='col hour d-flex flex-column align-items-center'>6 AM</p>

            {/* contenedor de cuadro de maleta  */}
            <div className='col mx-2 rounded bag d-flex flex-column align-items-center'>
              <p className='bag__text'>1 objeto personal</p>
              <p className='bag__price'>$50,000 COP</p>
            </div>
            <div className='col me-2 rounded bag d-flex flex-column align-items-center'>
              <p className='bag__text'>Equipaje de mano</p>
              <p className='bag__price'>$100,000 COP</p>
            </div>
            <div className='col bag d-flex rounded flex-column align-items-center'>
              <p className='bag__text'>Equipaje 25kg</p>
              <p className='bag__price'>$200,000 COP</p>
            </div>
          </div>
        </div>

        {/* conteneder de la información del vuelo */}
        <div className='col-sm-4'>
          <p>LfsdfsadLine 1:17:  'useEffect' is defined but never used    no-unused-vars
            Line 1:28:  'useState' is defined but never used     no-unused-vars
            Line 2:18:  'useNavigate' is defined but never usedfsdfsdfo</p>

        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Flights