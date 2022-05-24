import './style.css'

function Form (){

    return (
        
            <form className='wrap-form'>
                <textarea className='text-area' name="" id="" cols="25" rows="3"></textarea>
                <div className='buttons'>
                    <button className='buttons-color button-add'>Add</button>
                    <button className='buttons-color button-cancel'>Cancel</button>
                </div>
              
            </form>
       
    )
}

export default Form;