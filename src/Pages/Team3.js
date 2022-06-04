import React, {Component} from "react";

import Picture3 from '../assets/team3.jpg';

function Team3 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Команда №3</h2>
            <img className=""
                 src={Picture3}
                 alt='picture'
                 style={{height:"450px", borderRadius:"5%"}}
            />
            <br/><br/>
            <p>
            Marketer is an individual who works to identify goods & services desired by a set of customers as well as promoting and marketing those goods and services on behalf of an organization. Marketer helps boost the sale of products and services which in turn boosts the revenue for the organization by creating effective marketing strategies. He has the authority to implement and change these marketing strategies as per the needs of the customers and individual markets.
            </p>
        </div>
    )

}

export default Team3;