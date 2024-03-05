import { Routes, Route, useLocation } from "react-router-dom"
import { HomePage } from "./pages/home.tsx"
import { Cursos } from "./pages/cursos.tsx"
import { Experiencias } from "./pages/experiencias.tsx"
import { useEffect } from 'react';


export function RouteComponent() {

    const location = useLocation();

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);
    
    return (
        <Routes>
            <Route path={'*' || '/home'} element={<HomePage/>}/>
            <Route path={'/cursos'} element={<Cursos/>}/>
            <Route path={'/experiencias'} element={<Experiencias/>}/>
        </Routes>
    )
}