import { Component } from 'react';
import TableCourseTheacher from '../TableCourseTheacher/TableCourseTheacher';


class CreateCourse extends Component {


    constructor({ props, isAuth, isTheacher,user }) {
        super(props)
        this.setStateOfParent.bind(this);
        this.state = {
            courses: [],
            name: "",
            status: "",
            email: user?.email,
            isAuth,
            isTheacher
        }



        this.onSubmitHandler = (e) => {
            e.preventDefault();
            const date = new Date();
            const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
            const data = { "title": e.target.title.value, "program": e.target.program.value, "date": `${day}/${month}/${year}`, "createdBy": user?.email };
            console.log(data)
                ; fetch('https://system-school-7931c-default-rtdb.firebaseio.com/courses.json', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(item => {
                        this.setState({ courses: [...this.state.courses, { ...data, "id": item.name }] });
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            e.target.reset();
        }



    }


    componentDidMount() {

        fetch("https://system-school-7931c-default-rtdb.firebaseio.com/courses.json")
            .then(res => res.json())
            .then(items => {
                console.log(items)
                const array = [];
                if (items) {
                    Object.keys(items).forEach((key) => {
                        console.log(this.state.email)
                        if (items[key].createdBy == this.state.email) {
                            array.push({ "id": [key][0], ...items[key] });
                        }
                    });
                    this.setState({ courses: array })
                }
            })
    }

    setStateOfParent = (id) => {
        console.log(this.state.courses)
        this.setState({ courses: this.state.courses.filter(item => item.id != id) });

    }


    render() {
        return (
            <>
                <main>

                    <div>Create Course</div>

                    <form onSubmit={this.onSubmitHandler} htmlFor="form">

                        <label htmlFor="title"><b>Title: </b></label>
                        <input type="text" placeholder="Enter Title" name="title" required />

                        <label htmlFor="program"><b>Program: </b></label>
                        <textarea name="program" placeholder="Enter text here..." required></textarea>

                        <button type="submit" name="button">Create</button>


                    </form>

                    <div>All created course</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Creation Date</th>
                                <th>Program</th>
                                <th>Subscribers</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses?.map((item) =>
                                    <TableCourseTheacher
                                        key={item.id}
                                        name={item.id}
                                        title={item.title}
                                        date={item.date}
                                        program={item.program}
                                        setStateOfParent={this.setStateOfParent}
                                    ></TableCourseTheacher>

                                )}
                        </tbody>
                    </table>

                </main>

                <style jsx>
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

                padding: 10px;
                color: Black;
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

export default CreateCourse;