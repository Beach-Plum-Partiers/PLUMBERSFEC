import React, {useState} from 'react';


const Modal = ({showModal, closeModal, children})=>{

    // const [visible, setVisible] = useState(showModal)

    return (
        <div>
            {showModal ? (
                <div className='Modal-backg'>
                    <div className='Modal-inside'>
                        <button onClick={()=>{closeModal();}}>exit</button>
                    {children}
                </div> 
            </div>): null}
        </div>
      
    );
}

export default Modal;