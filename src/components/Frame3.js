import React from 'react';
import "./styles/Frame.css";

export default function Frame(props){
    return(
        <>
            <br />
            <div class="usuarioadd">
                <div class="titulo">
                    <p>Proyect Members</p>
                    <img src="https://i26.servimg.com/u/f26/20/31/61/35/mas10.png" alt="" />
                </div>
                <div class="usuarios">
                    <div class="usuario">
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/user210.png" alt="" />
                        <div class="datos">
                            <p class="nombre">Brooklyn</p>
                            <p class="area">Proyect Owner</p>
                        </div>
                    </div>
                    <div class="usuario">
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/user310.png" alt="" />
                        <div class="datos">
                            <p class="nombre">Arlene McCoy</p>
                            <p class="area">Web Designer</p>
                        </div>
                    </div>
                    <div class="usuario">
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/user110.png" alt="" />
                        <div class="datos">
                            <p class="nombre">Jerome Bell</p>
                            <p class="area">Developer</p>
                        </div>
                    </div>
                    <div class="add">
                        <div class="addimg">
                            <img src="https://i26.servimg.com/u/f26/20/31/61/35/add10.png" alt="" />
                        </div>
                        <p class="nombreAdd">Add member</p>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}