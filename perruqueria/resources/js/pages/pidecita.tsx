import Footer from '@/components/footer';
import Formulario from '@/components/formulario';
import Navbar from '@/components/NAVBAR/navbar';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
           <Navbar></Navbar>

            <div className=' relative h-screen   bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center'
                style={{ backgroundImage: "url('/imagenes/data2bw.jpg')" }}

            >

            <Formulario></Formulario>



            

              
            </div>

    
<Footer></Footer>
</>
);
}