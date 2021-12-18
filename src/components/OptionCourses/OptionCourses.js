import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class OptionCourses extends Component {

    constructor(props) {
        super(props)

        this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props.name);
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`)
            .then(res => res.json())
            .then(data => {
                console.log(this.props.userUid)

                if(data.hasOwnProperty('subscribers')){
                    data.subscribers.push(this.props.userUid);
                }else{
                    data = {...data,subscribers:[this.props.userUid]}
                }
                 
                console.log(data);
                fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`, {
                    method: 'PUT', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    //.then(item => {
                     //   this.setState({ news: [...this.state.news, { ...data, "id": item.name }] });
                    //})
                    //.catch((error) => {
                    //    console.error('Error:', error);
                    //});
            })

        //  this.props.setStateOfParent(this.props.name);
    }



    render() {
        return (
            <>

                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.startDate}</td>
                    <td>{this.props.program}</td>

                    <td><button className="subscribeBtn" onClick={this.handleClick} >Subscribe</button> </td>
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

                      .subscribeBtn{
                        background-color:green;
                      }
              `}
                </style>
            </>
        );
    }

};

export default OptionCourses;