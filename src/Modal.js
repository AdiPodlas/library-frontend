import React, { useState } from "react";

const Modal = ({title, children, closeable}) => {

const [open, setOpen] = useState (true)

if (open) {
    return (
        <div style={{
            border: "1px solid yellow",
            padding: "10px",
            margin: "10px",
            maxHeight: "150px",
            overflow: "auto"
        }}>
            <hr/>
            {title}
            <hr/>
            {children}
            {closeable ? <button onClick={() => setOpen (false)}>Close</button> : null}
        
        </div>
    );
}else{
    return(
    <div>
        {title}
        <button onClick={() => setOpen (true)}>Open</button>
    </div>
    )
}
};

export default Modal;