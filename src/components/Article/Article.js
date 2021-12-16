import { NavLink } from "react-router-dom";

const Article = (props) => {

   
    return (
        <>
            <article className="article">
                <b><NavLink to ={`/news/details/${props.newsId}`}>{props.title}</NavLink></b>
                <label className="date">Publication date:</label><span className="date">{props.date}</span>
                <p>{props.description}</p>
                <label className="label-post">Posted by:</label><span className="label-post">{props.postedBy}</span>
            </article>
            <style jsx>
                {`

                    .date{
                        display:block;
                        color:grey;
                        font-size: 10px;
                    }

                    .label-post{
                        display:block;
                        color:grey;
                        font-size: 10px;
                    }


                    .article{
                        color:black;
                        border: 2px solid grey;
                        font-size: 15px;
                        width: 200px;
                        padding: 10px;
                        margin-left: 10px;
                        display: inline-block;
                        margin:10px;
                    }

                    .article a{
                        text-decoration: none;
                        color: black;
                    }

                    .article a:hover{
                        text-decoration: none;
                        color: grey;
                    }


                    .article p{
                        overflow: hidden;
                        white-space: nowrap; /* Don't forget this one */
                        text-overflow: ellipsis;
                    }

                   
              `}
            </style>
        </>
    );

};

export default Article;