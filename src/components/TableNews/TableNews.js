import { render } from '@testing-library/react';
import { Component } from 'react';

class TableNews extends Component {

    constructor(props) {
        super(props)
       
        this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props.news);
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/news/${this.props.name}.json`, { method: 'DELETE' })
            .then(res => res.json()) // or res.json()
            this.props.setStateOfParent(this.props.name);
    }

    render() {
        return (
            <>

                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.date}</td>
                    <td>
                        <button className="detailsBtn" onClick={this.handleClick}>Details</button>
                        <button className="deleteBtn" onClick={this.handleClick} >Delete</button>
                    </td>
                </tr>

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

                    table button {
                        background-color:black;
                        color: white;
                        padding: 5px;
                        
                        border: none;
                        cursor: pointer;
                       
                        margin: auto 10px;
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

export default TableNews;