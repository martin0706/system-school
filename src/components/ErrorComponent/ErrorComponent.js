import { NavLink } from "react-router-dom";

const Article = (props) => {

   
    return (
        <>
            <span className = "error">{props.msgText}</span>
            <style>
                {`

                    .error{
                        color:red;
                        font-size: 20px;
                        display:block;
                    }


                   
              `}
            </style>
        </>
    );

};

export default Article;