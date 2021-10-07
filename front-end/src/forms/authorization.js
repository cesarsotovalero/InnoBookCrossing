import React from "react"
import Modal from "./modal";
import './authorization.css';

const styles ={
    input: {
        marginBottom:'5px',
        width: '96%',
    },
    block:{
        textAlign: 'left',
        lineHeight: '0'
    },
    button:{
        width: '60%',
        height: '30px',
        marginLeft: '18%',
    }

}

export default function Authorization({active, setActive}){
    let logRef = null;
    let passRef = null;
    function onSubmit(){
        let data = {alias: logRef.value,
            password: passRef.value};
        console.log(data);
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
                    console.log('Успех:' + data);
                    console.log('id:' + data[0]);
                    localStorage.setItem('user_id', data['id']);
                    localStorage.setItem('username', data['alias']);
                    console.log(localStorage.getItem('username'))
                })
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    return(
        <Modal active={active} setActive={setActive}>
            <div className="wrapper">
            {/*<form className="wrapper" >*/}
                <div className="title">
            <span>
                Welcome Back
            </span>
                </div>

                <div className="alias_box box">
                    <input type="text" id="alias" placeholder="Alias" ref={ref => logRef = ref} required/>
                </div>

                <div className="password_box box">
                    <input type="password" id="password" placeholder="Password" ref={ref => passRef = ref} required/>
                </div>


                <div className="reg_button box" id="submit">
                    <button type="submit" onClick={onSubmit}>Sign In</button>
                </div>

                <div className="trans">
                    <a href="">Don't have an account? </a>
                </div>
            {/*</form>*/}

            <button className="close_btn" onClick={setActive}>
                <span>&times;</span>
            </button>
            </div>
        </Modal>
    )
}