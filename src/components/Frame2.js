import React from 'react';
import "./styles/Frame.css";

export default function Frame(props){
    return(
        <>
            <br />
            <div class="comentario-contenedor">
                <div class="comentario-superior">
                    <div class={`especialidad ${props.data2.color}`}>
                        <p>{props.data2.clase}</p>
                    </div>
                    <img src={props.data2.mas} alt="" />
                </div>
                <div class={`bien-comentario ${props.data2.modo}`}>
                    <img src={props.data2.bien} alt="" />
                    <p>{props.data2.contenido}</p>
                </div>
                <div class="comentario-base">
                    <div class="reaccionar">
                        <div class="fecha">
                            <img class="foto" src={props.data2.persona} alt="" />
                            <p>{props.data2.tiempo}</p>
                        </div>
                        <div class="comentario">
                            <img src={props.data2.mensaje_img} alt="" />
                            <p>{props.data2.mensaje}</p>
                        </div>
                        <div class="archivar">
                            <img src={props.data2.adjunto_img} alt="" />
                            <p>{props.data2.adjunto}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}