import "./App.css";
import { Header } from "./components/Header/header";
import { Routes } from "./routes";

export const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
