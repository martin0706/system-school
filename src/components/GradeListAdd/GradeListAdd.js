import { render } from '@testing-library/react';
import { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import ErrorComponent from "../ErrorComponent/ErrorComponent"

const GradeListAdd = (props) => {
    var [hasError, setHasError] = useState(false);
    var [msgError, setMsgError] = useState("");

    useEffect(() => {


    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(props.id);
        let grade = document.getElementById(props.name).value;
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${props.id}.json`)
            .then(res => res.json())
            .then(data => {

                if (grade) {
                    let newObjdSubscribers = [];
                    data.subscribers.forEach(obj => {
                        if (obj.email == props.email) {
                            newObjdSubscribers.push({ ...obj, "grade": grade })
                        } else {
                            newObjdSubscribers.push(obj)
                        }
                    });


                    let newData = { "createdBy": data.createdBy, "date": data.date, "program": data.program, "startDate": data.startDate, "subscribers": newObjdSubscribers, "title": data.title };

                    console.log(data);
                    fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${props.id}.json`, {
                        method: 'PUT', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newData),
                    }).then(response => { response.json() })

                    props.onChange(props.id, props.email);
                }else{

                    throw new Error('Please fill in grade');
                    
                }

            }).catch((error) => {
                
                setHasError(true);
                setMsgError(error.message);
            });
    }




    return (
        <>
            <tr>
                <td>{props.email}</td>
                <td>
                    <input id={props.name} name="grade" type="number" min="2" max="6"></input>
                    <button onClick={handleClick} className="saveBtn" >Save</button>
                    {msgError ? <ErrorComponent msgText ={msgError}></ErrorComponent> : null}
                </td>
            </tr>

            <style>
                {`

                    table {
                        border-collapse: collapse;
                        width: 100%;
                        color:black;
                    }

                    td{
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }

                    table button {
                        background-color:black;
                        color: white;
                        padding: 5px;
                        
                        border: none;
                        cursor: pointer;
                       
                        margin: auto 10px;
                      }
                   
                      .listBtn{
                        background-color:green;
                      }

                      .unscribeBtn{
                        background-color:orange;
                      }
              `}
            </style>
        </>
    );


};

export default GradeListAdd;