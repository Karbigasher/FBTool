import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth.context'
import { useHTTP } from '../hooks/http.hook'
import { useMessage } from '../hooks/msghook'

export const AuthPAge = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHTTP()
    const [form,setForm] = useState( {
        email:'', password:''
    })

    useEffect( () => { 
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(()=>{
        window.M.updateTextFields()
    },[])

    const changeHandler = event =>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }

 

    const loginHandler = async ()=>{
        try{
            const data = await request('api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            message(data.message)
            console.log('Data', data)
        }catch(e){}
    }

    return(
        <div className="row">
            <div className="col s5 offset-s3">
                <h1>Вход</h1>
                <div className="card white">
                    <div className="card-content white-text">
                        
            <div>

                    <div className="input-field">
                        <input 
                        placeholder="" 
                        id="email" 
                        type="text"
                        name="email"
                        className="input_highlight"
                        onChange={changeHandler}
                        />
                        <label htmlFor="email">Логин</label>
                     </div>

                     <div className="input-field">
                        <input 
                        placeholder="" 
                        id="password" 
                        type="password"
                        name="password"
                        className="input_highlight"
                        onChange={changeHandler}
                        />
                        <label htmlFor="password">Пароль</label>
                     </div>

            </div>

                 <div className="card-action">
                    <button 
                    className="btn red darken-4" 
                    style={{margin: 10}}
                    disabled={loading}
                    onClick={loginHandler}
                    >
                        Вход
                        </button>
                    
                </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}