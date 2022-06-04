import React, {Component} from "react";

import PicBlog from '../assets/blog1.jpg';

function Blog1 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Умовний рендеринг</h2>
            
            <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"470px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
            React дозволяє розподілити логіку на окремі компоненти. Ці компоненти
можна показувати або ховати в залежності від поточного стану додатку.
Умовний рендеринг у React працює так само, як і умовні вирази працюють в
JavaScript. Іноді потрібно пояснити React, як стан впливає на те, які компоненти
треба сховати, а які — відрендерити, та як саме. Для цього
використовують умовний оператор JavaScript, або вирази подібні до  if .
            </p>
        </div>
    )

}

export default Blog1;