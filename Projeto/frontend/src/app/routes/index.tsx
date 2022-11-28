import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AircraftsTable, Calculo, Login, Menu, AircraftProfile, NewAircraft, CadastroUsuario, UserTable } from "../pages"
import { CalculoUsuario } from "../pages/Calculo/calculoUsuario"
import { EditAircraft } from "../pages/EditAircraft/editAircraft"
import { UserProfile } from "../pages/userProfile/userProfile"

export const Caminhos = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/calc' element={<Calculo/>} />
                <Route path='/calcUsuario' element={<CalculoUsuario/>} />
                <Route path='/aircrafts-table' element={<AircraftsTable />} />
                <Route path='/aircraft-profile/:aircraftId' element={<AircraftProfile />} />
                <Route path='/edit-aircraft/:aircraftId' element={<EditAircraft />} />
                <Route path='/new-aircraft' element={<NewAircraft />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Navigate to={'/login'} />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='*' element={<Navigate to={'/'} />} />
                <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
                <Route path='/usertable' element={<UserTable />} />
                <Route path='/userProfile/:userId' element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

// switch e redirect não funcionam
// switch -> routes
// redirect -> navigate
// em route: component -> element; em element se passa tag </>
// retirar exact