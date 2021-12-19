import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class ListSubscribers extends Component {

    constructor(props) {
        super(props)
    }

     render() {
        return (
            <>

                        <div>
                            <span>{this.props.index + 1 + ". "}</span>
                            {this.props.email}
                        </div>

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

export default ListSubscribers;