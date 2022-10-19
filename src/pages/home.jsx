import Footer from "../components/footer";
import Header from "../components/header";
import Recipe from "../components/recipe";
import '../assets/index.css';

const Home = () => {
    return (
        <>
            <Header />
            <div>    
                <Recipe />
            </div>
            <Footer />
        </>
    )
}
export default Home;