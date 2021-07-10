import React from 'react'
import ReactDOM from 'react-dom'


const ModalRoot= ()=>{
    return ReactDOM.createPortal(<div>
       <p> This is demo for Modal Root which will be rendered in not in normal root.It is
        rendered on modal- root in index.html.</p>
    </div>,document.getElementById("modal-root"))
}


export default ModalRoot