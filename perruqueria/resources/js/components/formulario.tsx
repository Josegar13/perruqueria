import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { es } from 'date-fns/locale'
import axios from 'axios'
import Swal from 'sweetalert2'

function Formulario() {
    const [nombre, setNombre] = useState("")
    const [nombreAnimal, setNombreAnimal] = useState("")
    const [servicio, setServicio] = useState("")
    const [fecha, setFecha] = useState(null)
    const [hora, setHora] = useState("")



    const filtrarDias = (date) => {
        const day = date.getDay()
        return day !== 0
    }

    const resetFormulario = () => {
        setNombre("")
        setNombreAnimal("")
        setServicio("")
        setFecha(null)
        setHora("")
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            await axios.post("/reservas", {
                nombre,
                nombreAnimal,
                servicio,
                fecha: fecha.toISOString().split("T")[0],
                hora
            });
    
            Swal.fire("Reserva realizada con éxito");
            resetFormulario();
        } catch (error) {
            console.error("Error al enviar la reserva:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo ha ido mal...intentalo de nuevo",
               
              });
        }
    };

    return (



        <div className='bg-white/60 backdrop-blur-sm rounded-md  h-2/3 w-6/7 mt-14'>

            <form onSubmit={handleSubmit} className='flex flex-col p-14 text-white text-pretty text-xl gap-4 '>
                <label htmlFor='nombre'>
                    Nombre:
                    <input type='text' name='nombre' id='nombre' placeholder='Tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} className='border-1 border-black rounded-sm p-1 md:ml-3' />
                </label>
                <label htmlFor='nombreAnimal'>
                    Nombre de la mascota:
                    <input type='text' name='nombreAnimal' id='nombreAnimal' placeholder='Su nombre' value={nombreAnimal} onChange={(e) => setNombreAnimal(e.target.value)} className='border-1 border-black rounded-sm p-1 md:ml-3' />
                </label>
                <select  value={servicio} onChange={(e) => setServicio(e.target.value)} className='border-1 border-black rounded-sm p-1 w-auto'>
                    <option value="" disabled className='bg-black text-sm'>Elija una opción</option>
                    <option value="corte" className='bg-black text-sm'>Corte de pelo</option>
                    <option value="peinado" className='bg-black text-sm'>Peinado</option>
                    <option value="uñas" className='bg-black text-sm'>Corte de uñas</option>
                    <option value="completo" className='bg-black text-sm'>¡Sesion completa!</option>

                </select>
                <label htmlFor='hora'>
                    Selecciona una hora:
                    <input type='time' value={hora} min={"09:00"} max={"18:00"} step={"600"} name='hora' id='hora' onChange={(e) => setHora(e.target.value)} className='border-1 border-black rounded-sm p-1 md:ml-3' />
                </label>


                <label htmlFor="fecha">Elija una fecha:</label>
                <DatePicker
                    selected={fecha}
                    onChange={(date) => setFecha(date)}
                    filterDate={filtrarDias}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                    locale={es}
                    name="fecha"
                    id='fecha'
                    className='border-1 border-black rounded-sm p-1'
                />
                

                <button type='submit' className='border-1 border-black rounded-sm p-1 bg-emerald-400'>Reservar</button>
                <button type="button" onClick={resetFormulario} className='border-1 border-black rounded-sm p-1 bg-red-400'>
                    Borrar
                </button>

            </form>








        </div>

    )
}

export default Formulario