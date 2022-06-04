import React, {Component} from "react";

import PicBlog from '../assets/blog3.jpg';

function Blog3 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
             <h2 style={{textAlign:"center", marginTop:"70px"}}>Що таке React?</h2>
            
            <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"470px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
            React — це декларативна, ефективна і гнучка JavaScript-бібліотека,
призначена для створення інтерфейсів користувача. Вона дозволяє компонувати
складні інтерфейси з невеликих окремих частин коду — “компонентів”.
Компоненти — основні будівельні блоки React.
Часто компоненти React порівнюють з пиріжками із начинкою, тільки зі світу
веб-технологій. Вони можуть містити все, чого ви тільки забажаєте, й бути огорнуті
в оболонку, що легко компонується. Компоненти реалізуються на чистому
JavaScript, або ж використовують JSX.
            </p>
        </div>
    )

}

export default Blog3;