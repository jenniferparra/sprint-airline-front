import React from 'react'
import { useNavigate } from 'react-router-dom'
import './seats.scss'
import '../flights/flight.scss'

const Seats = () => {
  const navigate = useNavigate();

  const flight = JSON.parse(sessionStorage.getItem("flight")) || [];

  const row = ['A', 'B', 'C', 'D', 'E', 'F']
  const row1 = ['', '', '', '', '', '']
  const row2 = ['', '', '', '', '', '']
  const row3 = ['', '', '', '', '', '']
  const row4 = ['', '', '', '', '', '']
  const row5 = ['', '', '', '', '', '']
  const row6 = ['', '', '', '', '', '']
  const row7 = ['', '', '', '', '', '']
  const row8 = ['', '', '', '', '', '']
  const row9 = ['', '', '', '', '', '']
  const row10 = ['', '', '', '', '', '']


  const getAsiento = (asiento) => {

    console.log(asiento);

  }
  return (
    <div className='container-fluid flight-container row g-4'>

      
        
        <div className='col-sm-8 pt-4 ps-5'>
        <h1>Vuelo de salida</h1>
        <p>Selecciona tus asientos</p>
        <section className='col'>
            {row.map((item, index) => (
              <button className='btn me-3 border'key={index}> {item} </button>
            ))}
          </section>
          <section className='col'>
            {row1.map((item, index) => (
              <button className='btn me-4 border btn-seat' onClick={() => { getAsiento(item) }} key={index}> {item} </button>
            ))}
          </section>
          <section className='col'>
            {row2.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row3.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row4.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row5.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row6.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row7.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row8.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row9.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>
          <section className='col'>
            {row10.map((item, index) => (
              <button className='btn me-4 border' onClick={() => { getAsiento(item) }} key={index}>{item} </button>
            ))}
          </section>

        </div>

      
      <div className='col-sm-4 column pt-4 pe-5'>
        <h6>Tu reservación</h6>
        {/* contenedor información del vuelo */}
        <div className='reservation rounded'>
          <div className='d-flex justify-content-between'>
            <p>Pasajeros</p>
            <p>1 Adulto</p>
          </div>
          <p>Vuelo de salida</p>
          {flight.map((element, index) => (
            <>
              <div className='row'>
                <h2 className='col'>{element.origin}</h2>
                <h2 className='col'>{element.destiny}</h2>
              </div>
              <div className='row'>
                <p className='col mt-0 title__country'>{element.timeDeparture}</p>
                <p className='col mt-0 title__country'>{element.timeArrival}</p>
              </div>
              <p>{element.departure}</p>
            </>
          ))}
          <p className='mt-5'>Vuelo de regreso</p>
          {flight.map((element, index) => (
            <>
              <div className='row'>
                <h2 className='col'>{element.destiny}</h2>
                <h2 className='col'>{element.origin}</h2>
              </div>
              <div className='row'>
                <p className='col mt-0 title__country'>{element.tdepartureBack}</p>
                <p className='col mt-0 title__country'>{element.tarrivalBack}</p>
              </div>
              <p>{element.arrival}</p>
            </>
          ))}

        </div>
        <h6 className='mt-5'>Costo de vuelo</h6>
        {/* contenedor costo de vuelo */}
        <div className='reservation rounded'>
          {flight.map((element, index) => (
            <>
              <div className='d-flex justify-content-between'>

                <p>Tarifa base</p>
                <p>{element.price}</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Equipaje</p>
                <p></p>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{(`${element.price}`)}</p>
              </div>
            </>
          ))}

        </div>
        <div class="d-flex justify-content-center "><button onClick={() => navigate('payment')} type="submit" class="btn btn-submit mt-5">Pagar con Paypal</button> </div>

      </div>

    </div>
  )
}

export default Seats