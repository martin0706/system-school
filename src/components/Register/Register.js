import firebase from "../../utils/firebase";
import 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const onRegisterSubmitHandler = (e)=>{
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPsw = e.target.confirmPsw.value;

        if(password == confirmPsw){
            firebase.auth().createUserWithEmailAndPassword(username,password)
            .then((user) =>{
                  console.log(user.uid);
                  e.target.reset();
                  navigate('/');
            })

        }else{
            console.log("Invalid credentional");
        }
    }

    return (
        <>
            <main>

                <form onSubmit={onRegisterSubmitHandler}>


                    <label for="type" id="type"><b>Choose profil type-Theacher or Student: </b></label>
                    <select name="type">
                        <option value="Theacher">Theacher</option>
                        <option value="Student">Student</option>
                    </select>

                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <label for="confirmPsw"><b>Confirm password</b></label>
                    <input type="password" placeholder="Confirm Password" name="confirmPsw" required />


                    <button type="submit">Register</button>


                </form>




            </main>

            <style jsx>
                {`
               
               main {
                    text-align: center;

                    background-position: center;
                    background-color: #E8E8E8;
                    background-size: cover;
                    color: white;
                    font-size: 20px;
                    min-height: 87vh;
                    
                    
               }

               button {
                background-color:black;
                color: white;
                padding: 10px;
                margin: 20px 10px;
                border: none;
                cursor: pointer;
                width: 130px;
              }

              button:hover {
                opacity: 0.8;
              }

              form {
                border: 1px solid black;
                margin: auto;
                width: 50%;
                padding: 100px;
              }
               
              input{
                  display: block;
                  margin: 10px auto;
                  width: 50%;
                  padding: 10px;
                  background-color: #E8E8E8;
              }

              label{
                  color: black;
                  display: block;
                  margin: 10px auto;
              }

             #type{
                 display: inline-block;
             }

             select{
                display: inline-block;
                margin: 10px 20px;
                cursor:pointer;
                width: 100px;
                background-color: #E8E8E8;
             }

          `}
            </style>
        </>
    );
}

export default Register;