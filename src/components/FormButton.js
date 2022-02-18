import { useState } from "react";
import AddArray from "./AddArray";

import styles from "./FormButton.module.css";

import {ReactComponent as EclipseTop} from "../images/eclipsetop.svg"
import {ReactComponent as EclipseBottom} from "../images/eclipse_bottom.svg"



const FormButton = () => {

    const [initialArray, setInitialArray] = useState([])
    const [toDo, setToDo] = useState('')



    const inputValue = (event) => {
        setToDo(event.target.value)
    };

    const fireEvent = () =>{
        setInitialArray(initialArray => [...initialArray, toDo]) //take single value and add to empty array
        setToDo('');   //reset input
    };
 
        const preventSubmit = (event) => {
            event.preventdefault();
            
        }
 
        return (<div className={styles.main_flex}>
            <EclipseTop></EclipseTop>
            <div>
            <form onSubmit={preventSubmit} className={styles.form_styles}>
                <input type="text" value={toDo} onChange={inputValue} className={styles.input_text}></input>
                <button type="button" onClick={fireEvent} className={styles.input_button}>ADD</button>
            </form>
            <AddArray passArray ={initialArray} toChange={setInitialArray} passinput={toDo}></AddArray>
            </div>
            <EclipseBottom className={styles.bottom_image}></EclipseBottom>
        </div>
        );
    };

    export default FormButton;