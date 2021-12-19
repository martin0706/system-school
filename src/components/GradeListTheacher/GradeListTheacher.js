import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GradeListAdd from '../GradeListAdd/GradeListAdd';

class GradeListTheacher extends Component {

    constructor(props) {
        super(props)
    }

    
    

    render() {
        return (
            <>

                        <div className="title">{"Course name: " + this.props.title}</div>
                        <table>
                        <thead>
                            <tr>
                                <th>Name student</th>
                                <th>Add Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.subscribers?.map((item) =>
                                    <GradeListAdd
                                        key={this.props.title + item.email}
                                        email = {item.email}
                                        name={item.id}
                                        title={item.title}
                                        date={item.date}
                                        setStateOfParent={this.setStateOfParent}
                                     ></GradeListAdd>

                                )}
                        </tbody>
                    </table>

                <style>
                    {`

                    table {
                        border-collapse: collapse;
                        width: 100%;
                        color:black;
                    }

                    td{
                        border: 1px solid #dddddd;
                        text-align: right;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }

                    table button {
                        background-color:green;
                        color: white;
                        padding: 5px;
                        
                        border: none;
                        cursor: pointer;
                       
                        margin: auto 10px;
                      }
                   
                  .title{
                      color:red;
                  }
                      
              `}
                </style>
            </>
        );
    }

};

export default GradeListTheacher;