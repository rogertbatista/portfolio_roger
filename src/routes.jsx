import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Projetos from "./pages/Projetos";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;