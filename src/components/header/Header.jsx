import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './header.scss'
import useForm from '../../hooks/useForm';
import { getFlight } from '../../services/flights';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import plane from '../../images/icons/plane.svg'

const Header = () => {

    const navigate = useNavigate();
    const [dataForm, handleChangeInput] = useForm({
        origin: "",
        destiny: "",
        departure: "",
        arrival: ""
    });

    const filteredFlight = async (dataForm) => {
        const response = await getFlight(dataForm);
        console.log(response);

        if (response.length) {
            sessionStorage.setItem('flight', JSON.stringify(response));
            navigate('flights');
        } else {
            Swal.fire('No hay vuelos disponibles, por favor intente más tarde');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dataForm);

        if (dataForm.origin !== '' && dataForm.destiny !== '' && dataForm.departure !== '' && dataForm.arrival !== '' && dataForm.passenger !== '') {
            await filteredFlight(dataForm)

        } else {
            Swal.fire('Faltan datos',
                'Llene todos los campos por favor');
        }
    }


    return (
        <>
            <div className="container-fluid">
                <figure>
                    <img className="airplane" src={require("../../../src/images/airplane_wing.jpeg")} alt="Airplane wing"></img>
                </figure>

                <div className="container-mine border shadow-lg bg-body justify-content-start">
                    <form onSubmit={handleSubmit} className='form-group row g-3 px-3 pb-3 justify-content-start'>
                        <h1>Busca un nuevo destino y comienza la aventura</h1>
                        <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
                        <div className='col-sm-auto activado rounded g-2 column'>
                            <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" required></input>
                            <label className="btn btn-trip" for="option1">Viaje redondo</label>

                            <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" required></input>
                            <label className="btn btn-trip" for="option2">Viaje sencillo</label>
                        </div>

                        <div className='row g-2 column'>
                            <div className="form-group col">
                                <label for="exampleFormControlSelect1">Origen</label>
                                <select class="form-control" name='origin'
                                    onChange={handleChangeInput}

                                    >
                                    <option>-----</option>
                                    <option>Colombia</option>
                                    <option>Ciudad de México</option>
                                    <option>Argentina</option>
                                    <option>Chile</option>
                                    <option>Perú</option>
                                    <option>Medellín</option>
                                </select>
                            </div>
                            <div className="form-group col column">
                                <label for="exampleFormControlSelect1">Seleccione un destino</label>
                                <select class="form-control" name='destiny'
                                    onChange={handleChangeInput}

                                    >
                                    <option>-----</option>
                                    <option>Nueva York</option>
                                    <option>Brasil</option>
                                    <option>Canadá</option>
                                    <option>Suiza</option>
                                    <option>Francia</option>
                                </select>
                            </div>
                        </div>
                        <div className='row g-2 column'>
                            <div className='input-group col'>
                                <input
                                    type="date"
                                    name='departure'
                                    className="form-control"
                                    aria-label="Salida"
                                    aria-describedby="date"
                                    placeholder='Salida'
                                    onChange={handleChangeInput}
                                     />

                            </div>
                            <div className='input-group col'>
                                <input
                                    type="date"
                                    name='arrival'
                                    className="form-control"
                                    aria-label="Regreso"
                                    aria-describedby="date"
                                    onChange={handleChangeInput}
                                     />

                            </div>
                        </div>
                        <div className='row g-2 column'>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Pasajeros</label>
                                <select class="form-control" id="exampleFormControlSelect1"
                                    name='passenger'>
                                    <option>-----</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-submit"><img className='me-2'src={plane} alt='plane icon'></img>Buscar vuelos</button>
                    </form>

                </div>
            </div>
            {/* </div>
            </div> */}
        </>
    )
}

export default Header