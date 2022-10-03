import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Aircraft, Calculo, Login, Menu } from "../pages"

export const Caminhos = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/calc' element={<Calculo/>} />
                <Route path='/aircraft' element={<Aircraft />} />
                <Route path='/' element={<Login />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    )
}

// switch e redirect não funcionam
// switch -> routes
// redirect -> navigate
// em route: component -> element; em element se passa tag </>
// retirar exact