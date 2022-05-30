import { useState } from 'react';
import './style.css'

function Form ({onCancel,onAdd}){

    const [text,setText] = useState('')


    const handleText = e => {
        const val = e.target.value
        setText(val)
    }

    const handleAdd = e => {
        e.preventDefault()
        onAdd(text)
    }

    const handleCancel = e => {
        e.preventDefault()
        onCancel()
    }

    

    

    return (
        
            <form className='wrap-form'>
                <textarea onChange={handleText} className='text-area' name="" id="" cols="30" rows="3"></textarea>
                <div className='buttons'>
                    <button className='buttons-color button-add' disabled={!text} onClick={handleAdd} >Add</button>
                    <button className='buttons-color button-cancel' onClick={handleCancel} >Cancel</button>
                </div>
              
            </form>
       
    )
}

export default Form;