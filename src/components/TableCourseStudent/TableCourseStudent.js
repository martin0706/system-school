import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class TableCourseStudent extends Component {

    constructor(props) {
        super(props)
       
        this.handleClickUnscribe.bind(this)
    }

    handleClickUnscribe = (e) => {
        let user =JSON.parse(localStorage.getItem('user'));
        e.preventDefault();
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`)
            .then(res => res.json())
            .then(data => {
                 
                
                 let filteredSubscriber =  data.subscribers.filter(item=>item.uid != user.uid);
                 
                 let newData = {"createdBy": data.createdBy, "date": data.date, "program": data.program, "startDate": data.startDate,"subscribers":filteredSubscriber,"title":data.title};
                
                //console.log(data);
                fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`, {
                    method: 'PUT', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newData),
                })
                    .then(response => {response.json()})
            })
         
            this.props.setStateOfParentFormUnscribe(this.props.name);
    }

    

    render() {
        return (
            <>

                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.startDate}</td>
                    <td>{this.props.program}</td>
                    <td><button className="unscribeBtn" onClick={this.handleClickUnscribe} >Unscribe</button> </td>
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
    }

};

export default TableCourseStudent;