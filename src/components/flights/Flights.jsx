import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import { protectedRoute } from '../../utils/session'
// import Header from '../header/Header';
import './flight.scss'

const Flights = () => {

  const navigate = useNavigate();
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
      <div className='container-fluid flight-container row g-4'>

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
             <button onClick={() => navigate('/')} class="btn btn-change">Cambiar Vuelo</button>
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
      

          {/* contenedor de título y botón de cambiar vuelo */}
          <div className='d-flex justify-content-between mt-5'>
            <div>
              <h2><strong>Vuelo de Regreso</strong></h2>
              <h3 className='mt-4'>Martes 25 Dic 2022</h3>
              <p className='title__country'>Suiza a Colombia</p>
              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button onClick={() => navigate('/')} class="btn btn-change">Cambiar Vuelo</button>
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
        <div className='col-sm-4 column mt-0'>
          <h6>Tu reservación</h6>
          {/* contenedor información del vuelo */}
          <div className='reservation rounded'>
          <div className='d-flex justify-content-between'>
          <p>Pasajeros</p>
          <p>1 Adulto</p>
          </div>
          <p>Vuelo de salida</p>
          <div className='row'>
          <h2 className='col-sm-4'>CO</h2>
          <h2 className='col-sm-4'>CH</h2>
          </div>
          <div className='row'>
          <p className='col-sm-4 mt-0 title__country'>05:45 PM</p>
          <p className='col-sm-4 mt-0 title__country'>06:47 PM</p>
          </div>
          <p>Martes, 30 noviembre, 2022</p>
          </div>
          <h6 className='mt-5'>Costo de vuelo</h6>
          {/* contenedor costo de vuelo */}
          <div className='reservation rounded'>
          <div  className='d-flex justify-content-between'>
          <p>Tarifa base</p>
          <p>$700,000 COP</p>
          </div>
          <div  className='d-flex justify-content-between'>
          <p>Descuento promocional</p>
          <p>$50,000</p>
          </div>
          <div  className='d-flex justify-content-between'>
          <p>Total</p>
          <p>$650,000</p>
          </div>
        
      </div>
        </div>

          
      </div>
      <Outlet />
    </>
  )
}

export default Flights