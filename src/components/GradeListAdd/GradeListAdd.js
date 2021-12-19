import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class GradeListAdd extends Component {

    constructor(props) {
        super(props)
    }




    render() {
        return (
            <>

                <tr>
                    <td>{this.props.email}</td>
                    <td>
                        <input type="number" min ="2" max="6"></input>
                        <button className="saveBtn" >Save</button>
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
    }

};

export default GradeListAdd;