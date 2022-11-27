import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AircraftsTable, Calculo, Menu, AircraftProfile, NewAircraft, Login, CadastroUsuario } from "../pages"

export const Caminhos = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/calc' element={<Calculo/>} />
                <Route path='/aircrafts-table' element={<AircraftsTable />} />
                <Route path='/aircraft-profile/:aircraftId' element={<AircraftProfile />} />
                <Route path='new-aircraft' element={<NewAircraft />} />
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<Navigate to={'/menu'} />} />
                <Route path='/menu' element={<Menu />} />
                
                <Route path='*' element={<Navigate to={'/'} />} />
                <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}

// switch e redirect não funcionam
// switch -> routes
// redirect -> navigate
// em route: component -> element; em element se passa tag </>
// retirar exact