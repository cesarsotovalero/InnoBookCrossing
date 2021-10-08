import React from "react"
import Modal from "./modal";
import "./reg.css"

const styles ={
}

export default function Registration({active, setActive}){
    const [error_message, setError_message] = React.useState("");
    let logRef = null;
    let passRef = null;
    let cpassRef = null;

    function onClick(event){
        event.preventDefault()
        if (logRef.value.length < 6 ) {
            setError_message('Alias is not valid!');
            return false;
        }
        if (logRef.value[0] !== "@" ) {
            setError_message('Provide telegram alias with \'@\' symbol!');
            return false;
        }
        if (passRef.value.length < 8 ) {
            setError_message('Password should contain more than 8 symbols!');
            return false;
        }
        if (passRef.value !== cpassRef.value){
            setError_message('Passwords did not match!');
            return false;
        }
        let data = {alias: logRef.value,
            password: passRef.value};
        console.log(data);

        try {
            fetch('http://localhost:8080/register',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setActive()
                    return false;
                })
        } catch (error) {
            alert('Ошибка:'+ error);
        }
    }
    return(
        <Modal active={active} setActive={setActive}>
            <form className="wrapper">
                <div className="reg_text">
            <span>
                Sign Up
            </span>
                </div>

                <div className="alias_box box">
                    <input type="text" id="alias" placeholder="Alias" ref={ref => logRef = ref}/>
                </div>

                <div className="password_box box">
                    <input type="password" id="password" placeholder="Password" ref={ref => passRef = ref}/>
                </div>

                <div className="conf_password_box box">
                    <input type="password" id="conf_password" placeholder="Confirm the Password" ref={ref => cpassRef = ref}/>
                </div>
                {error_message ? (
                    <div className={"error"}>
                        {error_message}
                    </div>
                ):(<br/>)}

                <div className="submit">
                    <button type="submit" onClick={onClick}>Create my account</button>
                </div>
            </form>

            <button className="close_btn" onClick={setActive}>
                <span>&times;</span>
            </button>
        </Modal>
    )
}