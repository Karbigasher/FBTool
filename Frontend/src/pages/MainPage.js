import React, { useState } from 'react'
import { useHTTP } from '../hooks/http.hook'
import { useMessage } from '../hooks/msghook'

export const MainPage = () => {

    const message = useMessage()
    const { loading, request } = useHTTP()

    const [form, setForm] = useState({
        title: '', textmsg: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })

    }
    const reportHandler = async () => {
        try {
            const data = await request('api/send/send', 'POST', { ...form })
            message(data.message)
            console.log('Data', data)
        } catch (e) { }
    }



    return (
        <div>
            <h1>Опишите вашу проблему</h1>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s2">
                            <textarea id="textarea1"
                                className="materialize-textarea"
                                type="text"
                                name="title"
                                onChange={changeHandler}
                            ></textarea>
                            <label htmlFor="textarea1">Тема</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                            <textarea id="textarea2"
                                className="materialize-textarea"

                                type="text"
                                name="textmsg"
                                onChange={changeHandler}
                            ></textarea>
                            <label htmlFor="textarea2">Сообщение</label>
                        </div>
                    </div>
                </form>
            </div>
            <button
                className="btn red darken-4"
                style={{ margin: 10 }}
                disabled={loading}
                onClick={reportHandler}

            >
                Отправить
                        </button>
        </div>
    )
}