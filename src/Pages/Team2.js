import React, {Component} from "react";

import Picture2 from '../assets/team2.jpg';

function Team2 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Команда №2</h2>
            <img className=""
                 src={Picture2}
                 alt='picture'
                 style={{height:"450px", borderRadius:"5%"}}
            />
            <br/><br/>
            <p>
            A naturalist is a person who loves nature. Someone who thinks highly of nature and everything that it includes. There is no clear definition for it out there. One reason for this is that it isn’t used that frequently. The other reason is that whoever calls themselves naturalists don’t themselves have a definition for it. You can ask them why they’d call themselves one and the answers can differ dramatically from one person to another.
            </p>
        </div>
    )

}

export default Team2;