import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Api from "./pages/Api/Api";
import Header from "./components/Header";

function ReoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/api" element={<Api/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default ReoutesApp;
