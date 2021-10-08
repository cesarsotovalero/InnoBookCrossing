import React from "react"
import "./modal.css"


const styles ={

}

export default function Modal({active, setActive, children}){

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive()}>
            <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}