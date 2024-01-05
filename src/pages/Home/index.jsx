import Container from "../../components/Container";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home(){
    return(
        <>
            <Header />
            <Container>
                <Content />
            </Container>
            <Footer />
        </>
    );
}

export default Home;