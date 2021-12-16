import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const GuestPage = () => {

    return (
        <>
            <div class="container">

                <Header></Header>
                <Main></Main>
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

};

export default GuestPage;