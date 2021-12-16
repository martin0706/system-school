import {
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import Register from "./Register/Register";
import News from "./components/News/News";
import DetailsNews from "./components/DetailsNews/DetailsNews";

function App() {
    return (
        <>

            <div className="container">

                <Header></Header>


                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/news" exact element={<News/>} />
                    <Route path="/news/details/:newsId" element={<DetailsNews/>} />
                 </Routes>

                <Footer></Footer>

            </div>

            <style jsx>
                {`

              .container{
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                    font-family: cursive;
                 
               }
               
          `}
            </style>
        </>
    );
}

export default App;
