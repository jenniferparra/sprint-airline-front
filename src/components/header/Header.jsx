import React from 'react'
// import { Form } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="container-fluid">
                <figure>
                    <img className="airplane" src={require("../../../src/images/airplane_wing.jpeg")} alt="Airplane wing"></img>
                </figure>

                <div className="container-mine border shadow-lg bg-body justify-content-start">
                <form className='form-group row g-3 px-3 pb-3 justify-content-start'>
                <h1>Busca un nuevo destino y comienza la aventura</h1>
                <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
                    <div className='row g-2'>
                    <div className="input-group col">
                        <input type="text"
                            class="form-control"
                            id="exampleInputOrigin"
                            placeholder="Origen">
                        </input>
                    </div>
                    <div className="input-group col">
                        <input type="text"
                            class="form-control"
                            id="exampleInputDestiny"
                            placeholder="Seleccione un destino">
                        </input>
                    </div>
                    </div> 
                    <div className='row g-2'>
                    <div className='input-group col'>
                        <input
                            type="date"
                            name='date'
                            className="form-control"
                            aria-label="Salida"
                            aria-describedby="date"
                            placeholder='Salida' />
                        {/* // value={formValue.date}
                        // onChange={handleChange} /> */}
                    </div>
                    <div className='input-group col'>
                        <input
                            type="date"
                            name='date'
                            className="form-control"
                            aria-label="Regreso"
                            aria-describedby="date" />
                        {/* value={formValue.date}
                        onChange={handleChange} /> */}
                    </div>
                    </div>
                    <div className='row g-2'>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Pasajeros</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    </div>
                    <button type="submit" class="btn ">Buscar vuelos</button>
                </form>

            </div>
            </div>
            {/* </div>
            </div> */}
        </>
    )
}

export default Header