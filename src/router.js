import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './constant/routes'

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((i) => {
                        return (
                            <Route key={i.path} path={i.path} element={<i.element/>}/>
                        )
                    })
                }
                
            </Routes>
        </BrowserRouter>
    )
}
export default RouterConfig;