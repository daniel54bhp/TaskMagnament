import React from 'react';
import "./styles/Frame.css";

export default function Frame(props){
    return(
        <>
            <br />
            <div class="comentario-contenedor">
                <div class="comentario-superior">
                    <div class={`especialidad ${props.data.color}`}>
                        <p>{props.data.clase}</p>
                    </div>
                    <img src={props.data.mas} alt="" />
                </div>
                <div class="comentario-centro">
                    <p>{props.data.contenido}</p>
                </div>
                <div class="comentario-base">
                    <div class="reaccionar">
                        <div class="fecha">
                            <img src={props.data.fecha_img} alt="" />
                            <p>{props.data.fecha}</p>
                        </div>
                        <div class="comentario">
                            <img src={props.data.mensaje_img} alt="" />
                            <p>{props.data.mensaje}</p>
                        </div>
                        <div class="archivar">
                            <img src={props.data.adjunto_img} alt="" />
                            <p>{props.data.adjunto}</p>
                        </div>
                    </div>
                    <img class="foto" src={props.data.persona} alt="" />
                </div>
            </div>
        </>
    )
}