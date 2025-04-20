<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validación de los datos
        $request->validate([
            'nombre' => 'required|string|max:255',
            'nombreAnimal' => 'required|string|max:255',
            'servicio' => 'required|string',
            'fecha' => 'required|date',
            'hora' => 'required|date_format:H:i',
        
         
        ]);

        $reserva = new Reserva();
        $reserva->nombre = $request->nombre;
        $reserva->nombreAnimal = $request->nombreAnimal;
        $reserva->servicio = $request->servicio;
        $reserva->fecha = $request->fecha;
        $reserva->hora = $request->hora;
  
        $reserva->save();
        

        return redirect()->route('pidecita')->with('message', 'Reserva realizada con éxito');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reserva $reserva)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reserva $reserva)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reserva $reserva)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reserva $reserva)
    {
        //
    }
}
