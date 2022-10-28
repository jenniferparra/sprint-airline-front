import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import { protectedRoute } from '../../utils/session'
import './flight.scss'
import briefcase from '../../images/icons/briefcase.svg'

const Flights = () => {
  const flight = JSON.parse(sessionStorage.getItem("flight")) || [];


  const navigate = useNavigate();

  const [valor, setValor] = useState(0);
  const getFlight = (element) => {
    console.log(element);
    //setPasaje(element);
  };
  const changeValor = (item) => {
    if (item === "bagA") {
      setValor('$50,000');
    }
    if (item === "bagB") {
      setValor('$100,000');
    }
    if (item === "bagC") {
      setValor('$200,000');
    }
  };

  return (
    <>
      <div className='container-fluid flight-container row g-4'>

        {/* contenedor de la parte de equipaje */}
        <div className='col-sm-8'>

          {/* contenedor de título y botón de cambiar vuelo */}
          <div className='title d-flex justify-content-between'>
            <div>
              <h2><strong>Vuelo de Salida</strong></h2>
              {flight.map ((element, index) => (
                <>
                <h3 className='mt-4'>{element.departure}</h3>
                <p className='title__country'>{element.origin} a {element.destiny}</p>
                </>
              ))}

              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button onClick={() => navigate('/')} class="btn btn-change">Cambiar Vuelo</button>
            </div>
          </div>

          {/* contenedor de cuadro blanco */}
          <div className='row rounded g-2 shadow-lg bg-body p-3 d-flex align-items-center'>
          {flight.map ((element, index) => (
            <>
            <p className='col hour d-flex flex-column align-items-center'>{element.timeDeparture}</p>

            <div className='col scale  '>
              <p className='scale__text'>{element.duration}</p>
              <hr></hr>
              <p className='scale__text'>Sin escala</p>
            </div>

            <p className='col hour d-flex flex-column align-items-center'>{element.timeArrival}</p>

            {/* contenedor de cuadro de maleta  */}
            <div className='col mx-2 rounded bag d-flex flex-column align-items-center'
            onClick={() => {
              changeValor("bagA");
            }}>
              <img src={briefcase} alt='briefcase icon'></img>
              <p className='bag__text'>1 objeto personal</p>
              <p className='bag__price'>$50,000 COP</p>
            </div>
            <div className='col me-2 rounded bag d-flex flex-column align-items-center' 
            onClick={() => {
              changeValor("bagB");
            }}>
              <img src={briefcase} alt='briefcase icon'></img>
              <p className='bag__text'>Equipaje de mano</p>
              <p className='bag__price'>$100,000 COP</p>
            </div>
            <div className='col bag d-flex rounded flex-column align-items-center'
            onClick={() => {
              changeValor("bagC");
            }}>
              <img src={briefcase} alt='briefcase icon'></img>
              <p className='bag__text'>Equipaje 25kg</p>
              <p className='bag__price'>$200,000 COP</p>
            </div>
            </>
          ))}
          
          </div>

            // vuelo de regreso
          {/* contenedor de título y botón de cambiar vuelo */}
          <div className='d-flex justify-content-between mt-5'>
            <div>
              <h2><strong>Vuelo de Regreso</strong></h2>
              <h3 className='mt-4'>Martes 25 Dic 2022</h3>
              {flight.map ((element, index) => (
                <p className='title__country'>{element.destiny} a {element.origin}</p>

              ))}
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
              <img src={briefcase} alt='briefcase icon'></img>
              <p className='bag__text'>1 objeto personal</p>
              <p className='bag__price'>$50,000 COP</p>
            </div>
            <div className='col me-2 rounded bag d-flex flex-column align-items-center'>
              <img src={briefcase} alt='briefcase icon'></img>

              <p className='bag__text'>Equipaje de mano</p>
              <p className='bag__price'>$100,000 COP</p>
            </div>
            <div className='col bag d-flex rounded flex-column align-items-center'>
              <img src={briefcase} alt='briefcase icon'></img>
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
            <div className='d-flex justify-content-between'>
              <p>Tarifa base</p>
              <p>$700,000 COP</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Equipaje</p>
              <p>{valor}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Total</p>
              <p>$650,000</p>
            </div>

          </div>
          <div class="d-flex justify-content-center "><button onClick={() => navigate('seats')} type="submit" class="btn btn-submit mt-5">Seleccionar asientos</button> </div>
          
        </div>


      </div>
      <Outlet />
    </>
  )
}

export default Flights