import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
        <header>
            <nav>


                <center className="wellcom"><b>Please login in</b></center>
                <span className="auth">
                    <img src="https://banner2.cleanpng.com/20180613/hgy/kisspng-computer-icons-college-square-academic-cap-school-5b213a5f3a9062.5537646415289042872399.jpg" />
                    <NavLink to ="/news"  >News</NavLink>
                    <NavLink to ="/courses/create">Create course</NavLink>
                    <NavLink to ="/grades/add" >Add Grade</NavLink>

                    <NavLink to ="/courses" >Courses</NavLink>
                    <NavLink to ="/grades"  >Grades</NavLink>
                   
                    <NavLink to ="/"  >Home</NavLink>
                    <NavLink to ="/login" >Login</NavLink>
                    <NavLink to ="/register" >Register</NavLink>
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