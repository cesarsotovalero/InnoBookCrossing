import React from "react"
import { restApiHost } from './header';
console.log(restApiHost);

const styles ={
    block: {
        position: 'absolute',
        zIndex: '100',
        width:'30%',
        height:'450px',
        backgroundColor:'#fff',
        display: 'block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        textAlign: 'left',
        borderRadius: '25px',
        boxShadow: '0 0 200px 100px #b0b3b2',
        padding: '2%',
        lineHeight: '0'

    },
    input: {
        marginBottom:'5px',
        width: '96%',
    },
    button: {
    },

}

export default function Authorization(props){
    let logRef = null;
    let passRef = null;

    let [restApiHost, setApi] = React.useState({})
    function onClick(){
        let data = { login: logRef.value,
            password: passRef.value};
        setApi(restApiHost=1488);
        console.log(restApiHost);
        console.log(data);

        try {
            fetch('http://localhost:8080/signin',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('Успех:', data);
                })
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    return(
        <div className="block" style={styles.block}>
            {props.style}
            <p>Login</p><input style={styles.input}
                               ref={ref => logRef = ref}/>
            <p>password</p><input type={"password"} style={styles.input}
                                  ref={ref => passRef = ref}/>
            <button style={styles.button} onClick={() => onClick()}>Submit book</button>
        </div>
    )
}