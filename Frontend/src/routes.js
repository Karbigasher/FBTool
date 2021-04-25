import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPAge } from './pages/AuthPage'
import { QuizPage } from './pages/QuizPage'
import { ReportPage } from './pages/ReportPage'
import { MainPage } from './pages/MainPage'
import { QuizselectPage } from './pages/QuizselectPage'
import { AdminPage } from './pages/AdminPage'




export const useRoutes = isAuthenticated => {


   return (

      <Switch>
         <Route path="/auth" exact>
            <AuthPAge />
         </Route>
         <Route path="/quizselect" exact>
            <QuizselectPage />
         </Route>
         <Route path="/quizselect/quiz" >
            <QuizPage />
         </Route>
         <Route path="/admin" >
            <ReportPage />
         </Route>
         {isAuthenticated && <Route path="/admin"><AdminPage /></Route>}
         <Route path="/">
            <MainPage />
         </Route>
         <Redirect to="/" />
      </Switch>

   )


}