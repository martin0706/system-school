const Login = () => {
    return (
        <>
            <main>

                <form>

                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                  
                    
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