import React from 'react'

export const QuizPage = () => {
    return (
        <div className="row">
            <div className="col s12" style={{ paddingTop: "2rem" }}>

                <div className="row">
                    <div className="col s10 offset-s1">
                        <div className="card white darken-1">
                            <div className="card-content black-text">
                                <span className="card-title" >Опрос</span>
                                <p className="question" style={{ fontSize: "20px" }}>Вопрос 1</p>
                                <p style={{ fontSize: "16px", marginTop: " 10px", marginBottom: " 10px" }}>При посещении образовательной организации обращались ли Вы к информации о ее деятельности
                                    , размещенной на информационных стендах в помещениях организации?</p>

                                <form action="#">
                                    <p>
                                        <label>
                                            <input name="Question1" type="radio" className="withgap"

                                            />
                                            <span>Да</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="Question1" type="radio"


                                            />
                                            <span>Нет</span>
                                        </label>
                                    </p>
                                </form>

                                <p className="question" style={{ fontSize: "20px" }}>Вопрос 2</p>
                                <p style={{ fontSize: "16px", marginTop: " 10px", marginBottom: " 10px" }}>Пользовались ли Вы официальным сайтом образовательной организации,
                                 чтобы получить информацию о ее деятельности?</p>

                                <form action="#">
                                    <p>
                                        <label>
                                            <input name="Question1" type="radio" className="withgap"

                                            />
                                            <span>Да</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="Question1" type="radio"


                                            />
                                            <span>Нет</span>
                                        </label>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}