import React from 'react'
import logo from '../images/logo.png'

export const QuizselectPage = () => {
    return (
        <div className="containerquiz">
            
            <div className="row" style={{maxWidth:"50%"}}>
                <div className="col s8 s4">
                    <div className="card">
                        <div className="card-image">
                            <img src={logo} alt="logo" />

                        </div>
                        <div className="card-content">
                            <p>Опрос 1</p>
                        </div>
                        <div className="card-action">
                            <a href="/quizselect/quiz">Пройти опрос</a>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="row" style={{maxWidth: "50%"}}>
                <div className="col s8 s4">
                    <div className="card">
                        <div className="card-image">
                            <img src={logo} alt="logo" />

                        </div>
                        <div className="card-content">
                            <p>Опрос 2

                            </p>
                        </div>
                        <div className="card-action">
                            <a href="/quizselect/quiz">Пройти опрос</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{maxWidth: "50%"}}>
                <div className="col s8 s4">
                    <div className="card">
                        <div className="card-image">
                            <img src={logo} alt="logo" />

                        </div>
                        <div className="card-content">
                            <p>Опрос 3

                            </p>
                        </div>
                        <div className="card-action">
                            <a href="/quizselect/quiz">Пройти опрос</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}