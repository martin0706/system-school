import { useEfect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import GradeListTheacher from "../GradeListTheacher/GradeListTheacher"

const AddGrade = (props, authInfo) => {
    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const array = [];
                if (data) {
                    Object.keys(data).forEach((key) => {
                        console.log(data[key].createdBy == user.email)
                        
                         let filterSubscribe = data[key].subscribers.filter(x=>!Object.hasOwn(x, 'grade'));
                         let newData = { "createdBy": data[key].createdBy, "date": data[key].date, "program": data[key].program, "startDate": data[key].startDate, "subscribers": filterSubscribe, "title": data[key].title };

                        console.log(filterSubscribe);
                        if (data[key].createdBy == user.email) {
                            array.push({ "id": [key][0], ...newData });
                        }
                    });

                }

                setAllCourses(array);
            })
    }, [])


    function handleChange(id, email) {

        console.log(id, email);

        
        allCourses.forEach((course) => {
                course.subscribers.forEach((obj, index) => {
                    if (obj.email == email && course.id==id) {
                        course.subscribers.splice(index, 1);
                    }
                });
            
        });

        let filteredSubscribers = allCourses;
        setAllCourses([...filteredSubscribers]);
    }

    return (

        <>
            <main>

                <div><b>All users without grade</b></div>

                {
                    allCourses?.map((item) =>
                        <GradeListTheacher
                            key={item.id}
                            name={item.id}
                            title={item.title}
                            date={item.date}
                            createdBy={item.createdBy}
                            subscribers={item.subscribers}
                            onChange={handleChange}
                        ></GradeListTheacher>


                    )}

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

export default AddGrade;