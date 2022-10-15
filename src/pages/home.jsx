import Footer from "../components/footer";
import Header from "../components/header"
import Recipe from "../components/recipe"
import '../assets/index.css'

const Home = () => {
    return (
        <>
            <div class="h-screen">
                <Header />
                <div>    
                    <Recipe />
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Home;