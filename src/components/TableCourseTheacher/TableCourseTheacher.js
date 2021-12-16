import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableCourseTheacher extends Component {

    constructor(props) {
        super(props)
       
        this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props.news);
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`, { method: 'DELETE' })
            .then(res => res.json()) 
            this.props.setStateOfParent(this.props.name);
    }

    

    render() {
        return (
            <>

                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.program}</td>
                    <td><button className="listBtn">List</button> </td>
                    <td><button className="deleteBtn" onClick={this.handleClick} >Delete</button> </td>
                </tr>

                <style jsx>
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

                      .deleteBtn{
                        background-color:red;
                      }
              `}
                </style>
            </>
        );
    }

};

export default TableCourseTheacher;