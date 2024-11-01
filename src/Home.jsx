
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const Home = () => {
    const navigation=useNavigation();
    const location=useLocation()
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading" ?<p>Loading...</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;