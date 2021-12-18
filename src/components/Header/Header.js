import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Header = ({ user, isAuth, authInfo }) => {
    const [typeUser, setTypeUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });


    }

    
   /* useEffect(async () => {
        const response = await fetch("https://system-school-7931c-default-rtdb.firebaseio.com/users.json")
        const items = await response.json();
        
          console.log(items);
          Object.keys(items).forEach((key) => {
            console.log(items[key].id == authInfo.uid);

            if (items[key].id == authInfo.uid) {

                setTypeUser(items[key].typeUser);
               
            }

        });

        console.log(typeUser);
      }, []);*/

    const theacherUIDs = ["56etcyNrh6QytJHR2Z9NjeO1Epm2","9s0spYnCSRZJTLglzhPeCddI4rr1","vhdR8yIFSXb9KIehNk5JUQzdpN73" ]
    
    
   


    return (
        <>
            <header>
                <nav>


                    {isAuth ? (<center className="wellcom"><b>Wellcom {user.email}</b></center>) : (<center className="wellcom"><b>Please login in</b></center>)}
                    <span className="auth">
                        <img src="https://banner2.cleanpng.com/20180613/hgy/kisspng-computer-icons-college-square-academic-cap-school-5b213a5f3a9062.5537646415289042872399.jpg" />
                        <NavLink to="/" >Home</NavLink>
                        {isAuth && theacherUIDs.includes(authInfo.uid) ? <NavLink to="/news"  >News</NavLink> : null}
                        {isAuth  && theacherUIDs.includes(authInfo.uid) ? <NavLink to="/courses/create">Create course</NavLink> : null}
                        {isAuth  && theacherUIDs.includes(authInfo.uid) ? <NavLink to="/grades/add" >Add Grade</NavLink> : null}

                        {isAuth && !theacherUIDs.includes(authInfo.uid) ? <NavLink to="/courses" >Courses</NavLink> : null}
                        {isAuth  && !theacherUIDs.includes(authInfo.uid) ? <NavLink to="/grades"  >Grades</NavLink> : null}

                        {isAuth ? null : <NavLink to="/login" >Login</NavLink>}
                        {isAuth ? null : <NavLink to="/register" >Register</NavLink>}
                        {isAuth ? <NavLink to="/logout" onClick={handleLogout}>Logout</NavLink> : null}
                    </span>
                </nav>
            </header>
            <style jsx>
                {`

                    header {
                        text-align: right;
                        font-size: 20px;
                        background-color: white;
                        color: white;
                        min-height: 5vh;
                        border-style: inset;
                   }
                   
                    img{
                    
                        width: 25px;
                    }


                    .auth{

                        text-align: right;

                    }
                   

                    a{
                        padding: 10px;
                        font-size: 15px;
                        color: black;
                        text-decoration: none;
                    }

                   a{
                        padding: 10px;
                        font-size: 15px;
                        color: grey;
                        text-decoration: none;
                    }

                  .wellcom{
                    margin-right:auto;
                    font-size: 15px;
                    color: black;
                  }

                
              `}
            </style>

        </>
    );
};

export default Header;