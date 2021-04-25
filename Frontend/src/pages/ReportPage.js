import React, { useState } from 'react'
import { useHTTP } from '../hooks/http.hook'
import { AdminPage } from './AdminPage'


export const ReportPage = () => {
    const { request, loading } = useHTTP()

    const [reports, setReports] = useState(null)






    const recieveHandler = async () => {
        try {
            const data = await request('api/recieve/', 'GET', null)

            setReports(data)
            console.log(data)
            return data
        } catch (e) { }
    }

    console.log('ns meste')
    console.log(reports)




    return (
        <>
            <button
                className="btn red darken-4"
                style={{ margin: 10 }}
                disabled={loading}
                onClick={recieveHandler}

            >
                Обновить данные
                        </button>
            {<AdminPage Data={reports} />}

        </>
    )
}