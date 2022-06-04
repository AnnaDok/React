import React, {Component} from "react";

import Picture1 from '../assets/team1.jpg';

function Team1 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Команда №1</h2>
            <img className=""
                 src={Picture1}
                 alt='picture'
                 style={{height:"450px", borderRadius:"5%"}}
            />
            <br/><br/>
            <p>
            Розробник - ключова особа, яка стоїть за всіма програмними програмами. Як правило, розробники добре розбираються принаймні в одній мові програмування та знають у галузі структуризації та розробки програмного коду для програмного забезпечення чи програми. 
            </p>
        </div>
    )

}

export default Team1;