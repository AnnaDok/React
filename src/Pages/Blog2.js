import React, {Component} from "react";

import PicBlog from '../assets/blog2.jpg';

function Blog2 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Рендеринг елементів.</h2>
            
            <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"470px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
            Компоненти — основні будівельні блоки React. 
React-компоненти дозволяють розділити інтерфейс користувача на
незалежні частини, які можна використовувати повторно та працювати з кожною
окремо. Компоненти у React можуть бути визначені за допомогою підкласу
React.Component або React.PureComponent.
Можна сплутати елементи з більш загальновідомою концепцією
«компонентів». Елементи — це те, з чого «зроблені» компоненти.
Елементи — це найменші будівельні блоки React-додатку.
Елемент описує те, що ви хочете бачити на екрані.
Рендеринг елемента в DOM. На відміну від DOM-елементів, елементи
React — звичайні об’єкти, що легко створються. React DOM відповідає за
оновлення DOM для його відповідності React-елементам.

            </p>
        </div>
    )

}

export default Blog2;