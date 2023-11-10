
//Component Created.
import './Item.css'
import React,{useState} from 'react';
function Item(props){
    //const name = props.name; //This is the Props Property which is giving you the dynamic data to show.
    const [name,settitle] = useState(props.name) // This is the functon to render app.js many times you want.
    
    function handlebtn(){
        settitle("Arial"); // This is where we change
    }
    return (
        <div>
            <button className="btn" onClick={handlebtn}>This Is My First Button</button>
            <p className="nirma">{name}</p>
            {props.children}
        </div>
    );
}
// To run the app
export default Item;