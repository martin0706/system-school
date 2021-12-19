import { Component } from 'react';
import TableCourseStudent from '../TableCourseStudent/TableCourseStudent';
import OptionCourses from "../OptionCourses/OptionCourses";

class Courses extends Component {


    constructor({ props, user ,authInfo}) {
        super(props)
        this.setStateOfParentFormUnscribe.bind(this);
        this.state = {
            name: "",
            userUid: user?.uid,
            email: user?.email,
            ownCourses: [],
            authInfo
        }

    }


    componentDidMount() {

        fetch("https://system-school-7931c-default-rtdb.firebaseio.com/courses.json")
            .then(res => res.json())
            .then(items => {
                const array = [];
                const ownCourses = [];
              //  console.log(this.state.userUid)

                if (items) {
                    Object.keys(items).forEach((key) => {
                        console.log(items[key])
                        if (("subscribers" in items[key])) {
                            //console.log(items[key])
                    
                            for(const obj in items[key].subscribers){
                                if(obj.uid == this.state.userUid){
                                    ownCourses.push({ "id": [key][0], ...items[key] })
                                }
                            }
                        }

                    });

                   // console.log(array);
                    //console.log(ownCourses);
                    this.setState({ ownCourses: ownCourses })
                }
            })

    }


    setStateOfParentFormUnscribe = (id) => {
        //console.log(this.state.courses)
        //this.setState({ courses: this.state.courses.filter(item => item.id != id) });
    }

  

    render() {


        return (
            <>
                <main>

                    <div>All courses suscribed from user</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Start Date</th>
                                <th>Program</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ownCourses?.map((item) =>
                                    <TableCourseStudent
                                        key={item.id}
                                        name={item.id}
                                        title={item.title}
                                        program={item.program}
                                        startDate={item.startDate}
                                        setStateOfParentFormUnscribe={this.setStateOfParentFormUnscribe}
                                    ></TableCourseStudent>

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

export default Courses;