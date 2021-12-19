import {
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import News from "./components/News/News";
import DetailsNews from "./components/DetailsNews/DetailsNews";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Grades from "./components/Grades/Grades";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react/cjs/react.development";
import firebase from "./utils/firebase";
import { useState } from "react";

function App(props) {

    const [user, setUser] = useState(null);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        })
        
    }, []);

    const authInfo={
        uid : user?.uid,
        email : user?.email
    }

    localStorage.setItem('user', JSON.stringify(user));

    return (
        <>

            <div className="container">

                <Header user={user}  authInfo = {authInfo} isAuth={Boolean(user)}></Header>

                <Routes>
                    <Route path="/" exact element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" user={user} element={<Register />} />
                    <Route path="/news" exact element={<News user={user}  isAuth={Boolean(user)} />} />
                    <Route path="/news/details/:newsId" element={<DetailsNews />} />
                    <Route path="/courses/create" element={<CreateCourse user={user} isAuth={Boolean(user)} />}  />
                    <Route path="/courses" exact element={<Courses user={authInfo} />} />
                    <Route path="/grades" exact element={<Grades user={authInfo} />} />
                    <Route path="/logout" />
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
