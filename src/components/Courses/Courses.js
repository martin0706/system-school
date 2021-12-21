import { Component } from 'react';
import TableCourseStudent from '../TableCourseStudent/TableCourseStudent';
import OptionCourses from "../OptionCourses/OptionCourses";

class Courses extends Component {


    constructor({ props, user ,authInfo}) {
        super(props)
        this.setStateOfParentFormUnscribe.bind(this);
        this.setStateOfParentFormSubscribe.bind(this);
        this.state = {
            courses: [],
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
             
                if (items) {
                    Object.keys(items).forEach((key) => {

                        if (!("subscribers" in items[key])) {
                            array.push({ "id": [key][0], ...items[key] });
                        } else {
                            let uidIsFound = false;
                            for (const obj in items[key].subscribers) {
                                
                               if (items[key].subscribers[obj].uid == this.state.userUid){
                                  uidIsFound = true;
                               }
                            }

                             if (!uidIsFound) {
                                    array.push({ "id": [key][0], ...items[key] });
                                }else{
                                    ownCourses.push({ "id": [key][0], ...items[key] })
                                }
                        }
                    });
                    
                }
                this.setState({ courses: array, ownCourses: ownCourses })
            })

    }

    setStateOfParentFormSubscribe = (id) => {
        let course = this.state.courses.filter((obj)=>obj.id == id);
        this.state.ownCourses.push(course[0]);
        console.log(this.state.courses,id);
        this.setState({ courses: this.state.courses.filter(item => item.id != id)});
    }

    setStateOfParentFormUnscribe = (id) => {
         let course = this.state.ownCourses.filter((obj)=>obj.id == id);
         this.state.courses.push(course[0]);
         this.setState({ ownCourses: this.state.ownCourses.filter(item => item.id != id)});
    }

  

    render() {


        return (
            <>
                <main>

                    <div>Subscribe for course</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Start Date</th>
                                <th>Program</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses?.map((item) =>
                                    <OptionCourses
                                        key={item.id}
                                        name={item.id}
                                        title={item.title}
                                        program={item.program}
                                        startDate={item.startDate}
                                        setStateOfParentFormSubscribe={this.setStateOfParentFormSubscribe}
                                        userUid={this.state.userUid}
                                        email={this.state.email}
                                        ownCourses = {this.state.ownCourses}
                                    ></OptionCourses>

                                )}
                        </tbody>
                    </table>


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
                color: red;
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