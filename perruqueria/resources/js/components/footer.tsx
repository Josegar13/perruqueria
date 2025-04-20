import React from "react";

function Footer(){

return(

<div className="bg-zinc-400 h-24 z-40 flex">

<div className="flex flex-col mt-2 ml-2 md:ml-15">
<a href="#">Politica de privacidad</a>
<a href="#">Trabaja con nosotros</a>
<a href="#">Contacto</a>
</div>

<div className="flex flex-col justify-around ml-8 md:ml-96  pl-36 md:pl-96 border-l-2 border-zinc-600">
<a href="#"><img src="imagenes/instagram.png" className="h-6"></img></a>
<a href="#"><img src="imagenes/facebook.png" className="h-6"></img></a>
<a href="#"><img src="imagenes/whatsapp.png" className="h-6"></img></a>
</div>



</div>

)

}

export default Footer