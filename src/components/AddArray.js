import { useState } from "react";
//import "./AddArray.css";

import { ReactComponent as Tick } from "../images/Tick.svg";
import {ReactComponent as Delete} from "../images/delete.svg"
import {ReactComponent as Submit} from "../images/submit.svg"

import styles from "./AddArray.module.css";

const AddArray = (props) => {

   
    const[editInput, setEditInput]=useState(null)
    const[editText, setEditingText]=useState('')

    const deletion = (i) => {
        const filtered = props.passArray.filter((items, key) => key !== i)
        console.log(filtered)
        props.toChange(initialArray => [...filtered])
        //console.log(i)
    }

 //pass current id for ternary operation to compare
   const editButton = (i) =>{
       setEditInput(i)
   }

   const addText=(event) =>{
    setEditingText(event.target.value)
   // console.log(event.target.value)
   }

const submitEditedText =(i) =>{
    const updatingText = props.passArray.map((initialArray,index) =>{
        if(index===i){
            initialArray =editText;
           // console.log('initial text',initialArray)
          //  console.log('edited input', editText)
        }
        return initialArray
    })
    //console.log(updatingText)
    props.toChange(initialArray=> [...updatingText])
    setEditInput(null)  
}   


//<button type="button" onClick={()=>{editButton(i)}}></button>

    if (props.passArray.length === 0) {
        return <p className={styles.paragraph}>Please add expense</p>
    }

    return <ul className={styles.list_sort}>
        {props.passArray.map((initialArray, i) => (
            <div key={i} className={styles.main_divs}>
                {i===editInput? (<input type="text" onChange={addText} className={styles.input_text_change}></input>):
                (<div ><p className={styles.initial_array}> {initialArray}</p></div>)}
                <div className={styles.second_div}>
                {i===editInput?(<Submit onClick={() =>{submitEditedText(i)}} className={styles.hover_effect}/>):
                (<Tick onClick={()=>{editButton(i)}} className={styles.hover_effect}/>)}
                <Delete onClick={() => { deletion(i) }} className={styles.hover_effect}/>
                </div>

            </div>))}
            
    </ul>

}

export default AddArray;