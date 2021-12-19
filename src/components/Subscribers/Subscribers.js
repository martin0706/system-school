import { useEfect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import ListSubscribers from "../ListSubscribers/ListSubscribers"

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        let itemId = location.pathname.split("/")[3];
       
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${itemId}.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.subscribers)
                

                setSubscribers(data.subscribers);
            })
    }, [])

    return (
        <>
            <main>

                <div><b>All users discribed for course</b></div>

                {
                    subscribers?.map((item, index) =>
                        <ListSubscribers
                            key={item.email}
                            index={index}
                            email={item.email}
                        ></ListSubscribers>

                    )
                }

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

               main div{
                   color:black;
                   padding:10px;
               }

               main span{
                color:red;
                padding:10px;
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

export default Subscribers;