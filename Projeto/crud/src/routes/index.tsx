import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Aircrafts, Login, Menu } from "../components";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aircrafts" element= {<Aircrafts />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/menu" element= {<Menu />} />
        
        
        <Route path="*" element= {<Navigate to="/login" />}/>
      </Switch>
    </BrowserRouter>
  );
};