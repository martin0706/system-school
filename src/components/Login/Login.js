import firebase from "../../utils/firebase";
import 'firebase/auth';

const Login = () => {
   
    const onLoginSubmitHandler =(e)=>{
        e.preventDefault();


        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username,password);

        firebase.auth().signInWithEmailAndPassword(username,password)
        .then((userCredential) =>{
            //  console.log(userCredential);
              e.target.reset();
        })

        
    };

    return (
        <>
            <main>

                <form onSubmit={onLoginSubmitHandler}>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <button type="submit" value="Login">Login</button>
                  
                    
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
                  color: Black;
              }
             

          `}
            </style>
        </>
    );
}

export default Login;