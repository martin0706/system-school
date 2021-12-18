import {useEfect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const DetailsNews = () => {
    const [item, setItem]  = useState({});
    const location = useLocation();

   useEffect(()=>{
       let itemId = location.pathname.split("/")[3];
       fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/news/${itemId}.json`)
            .then(res=>res.json())
            .then(data =>setItem(data))
   },[])

    return (
        <>
            <main>
                
                <div className="title"><b>Title</b></div>
                <div>{item.title}</div>
                <div className="title"><b>Description</b></div>
                <div>{item.description}</div>
                <div className="title"><b>Date</b></div>
                <div>{item.date}</div>
                <div className="title"><b>Posted by</b></div>
                <div>{item.postedBy}</div>

                
          </main>

            <style>
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

               div{
                   color:black;
               }

               .title{
                   padding:20px;
                   color:red;
               }
             

          `}
            </style>
        </>
    );
}

export default DetailsNews;