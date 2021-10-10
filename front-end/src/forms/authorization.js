import React from "react"
import Modal from "./modal";
import './authorization.css';

const styles ={
}

export default function Authorization({active, setActive, openReg}){
    const [error_message, setError_message] = React.useState("");
    let logRef = null;
    let passRef = null;
    function onSubmit(event){
        event.preventDefault()
        if (logRef.value.length < 2 ) {
            setError_message('Alias is not valid!');
            return false;
        }
        if (passRef.value.length < 2 ) {
            setError_message('Password is not valid!');
            return false;
        }
        let data = {alias: logRef.value,
            password: passRef.value};
        try {
            fetch('http://localhost:8080/signin',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.message) {
                        setError_message(data.message);
                        return false;
                    }
                    localStorage.setItem('user_id', data['id']);
                    localStorage.setItem('username', data['alias']);
                    setActive();
                    return false;
                })
        } catch (error) {
            alert('Ошибка:'+ error);
            return true;
        }
    }
    return(
        <Modal active={active} setActive={setActive}>
            <form className="wrapper">
                <div className="title">
            <span>
                Welcome Back
            </span>
                </div>

                <div className="alias_box box">
                    <input type="text" id="alias" placeholder="Alias" ref={ref => logRef = ref}/>
                </div>

                <div className="password_box box">
                    <input type="password" id="password" placeholder="Password" ref={ref => passRef = ref}/>
                </div>
                {error_message ?(
                    <div className="error">
                    <div className="error_icon">
                    <img src="../error_icon.png" alt=""/>
                    </div>

                    <div className="error_msg">

                    <span>{error_message}</span>

                    </div>

                    <button className="err_close_btn" onClick={()=>{setError_message("")}}>
                    <span>&times;</span>
                    </button>


                    </div>
                ):(<br/>)}

                <div className="reg_button box" id="submit">
                    <button type="submit" onClick={onSubmit}>Sign In</button>
                </div>
            </form>
            <div className="trans">
                <a onClick={openReg}>Don't have an account? </a>
            </div>

            <button className="close_btn" onClick={setActive}>
                <span>&times;</span>
            </button>
        </Modal>
    )
}