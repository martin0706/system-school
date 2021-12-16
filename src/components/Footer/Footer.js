const Footer = () => {
    return (
        <>
            <footer>
                <div>All rights reserved &copy;</div>
            </footer>
            <style jsx>
                {`

                   footer{
                        border-style: outset;
                        text-align: center;
                        background-color: black;
                        color: white;
                        min-height: 2vh;
                        float: auto
                        width: auto
                    
                   }

                   footer{
                    font-size: 15px;
                    
                   }
              `}
            </style>

        </>
    );
};
export default Footer;