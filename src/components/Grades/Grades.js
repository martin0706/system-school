import { Component } from 'react';
import TableGrades from "../TableGrades/TableGrades";

class Grades extends Component {


    constructor({ props, user}) {
        super(props)
        this.state = {
            name: "",
            userUid: user?.uid,
            email: user?.email,
            courses: [],
        }

    }


    componentDidMount() {

        fetch("https://system-school-7931c-default-rtdb.firebaseio.com/courses.json")
            .then(res => res.json())
            .then(items => {
                const array = [];
                if (items) {
                    Object.keys(items).forEach((key) => {
                       
                        if (("subscribers" in items[key])) {
                            for(const obj in items[key].subscribers){

                                if(items[key].subscribers[obj].uid == this.state.userUid){
                                    array.push({ "id": [key][0],"createdBy": items[key].createdBy  ,"title" :items[key].title,"grade": items[key].subscribers[obj].grade,"email":items[key].subscribers[obj].email })
                                }
                            }
                        }

                    });
    
                    this.setState({ courses: array })
                }
            })

    }

  

    render() {


        return (
            <>
                <main>

                    <div>All grades from courses</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Theacher name</th>
                                <th>Course Title</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses?.map((item) =>
                                    <TableGrades
                                        key={item.id}
                                        name={item.id}
                                        title={item.title}
                                        grade={item.grade}
                                        email={item.createdBy}
                                    ></TableGrades>

                                )}
                        </tbody>
                    </table>

                </main>

                <style>
                    {`

                    table {
                        border-collapse: collapse;
                        width: 100%;
                        color:black;
                    }

                    td, th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }

               
               main {
                    text-align: center;

                    background-position: center;
                    background-color: #E8E8E8;
                    background-size: cover;
                    color: white;
                    font-size: 20px;
                    min-height: 87vh;
                    
                    
               }

              form button {
                background-color:black;
                color: white;
                padding: 10px;
                margin: 20px 10px;
                border: none;
                cursor: pointer;
                width: 130px;
                display:block;
                margin: 10px auto;
              }

              button:hover {
                opacity: 0.8;
              }


              form {
                margin: auto;
                width: 90%;
                padding: 10px;
              }
               
              input{
                  margin: 10px auto;
                  width: 200px;
                  padding: 10px;
                  background-color: #E8E8E8;
              }

              label{
                  color: Black;
                  display:block;
              }

             main div{
                width: 100%;
                padding: 50px 30px;
                color: Black;
                border: 1px solid black;
              }

              textarea{
 
              
                width: 100%;
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                  padding: 10px;
                  background-color: #E8E8E8;
                  margin: auto;

              }
             
          `}
                </style>
            </>
        );
    }
}

export default Grades;