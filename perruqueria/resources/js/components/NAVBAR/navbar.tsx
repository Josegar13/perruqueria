import React from 'react'
import { Link } from '@inertiajs/react';
import { usePage, router } from '@inertiajs/react';



interface Auth {
  user: { 
    id: number;
    name: string;
    email: string;
  } | null;
}

function Navbar() {
  const { auth } = usePage().props;

  const logout = () => {
    router.post(route('logout'));
  };
  return (
    <div>
      <div className='bg-transparet h-24 w-full fixed z-40 flex justify-around backdrop-blur-lg'>


        <img src='/imagenes/logoperru2.png' className='h-18 mt-2'></img>

        <button className='text-white'><a href='/'>Inicio</a></button>
        <button className='text-white'>
        <a href={auth?.user ? '/cita' : '/login'}>Pide cita</a>
      </button>

        {auth.user ? (
          <div className='flex items-center space-x-4'>
            <span className='text-white'>Hola, {auth.user.name}</span>
            <button
              onClick={logout}
              className="rounded-sm border border-red-400 px-4 py-1 text-sm text-white hover:bg-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex flex-col mt-3'>
            <Link
              href={route('login')}
              className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
            >
              Log in
            </Link>
            <Link
              href={route('register')}
              className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
              Register
            </Link>
          </div>
        )}
      </div>







    </div>
  )
}

export default Navbar