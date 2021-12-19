import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class OptionCourses extends Component {

    constructor(props) {
        super(props)

        this.handleClickSubscribe.bind(this)
    }

    handleClickSubscribe = (e) => {
        let user =JSON.parse(localStorage.getItem('user'));
        e.preventDefault();
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                console.log(data.hasOwnProperty('subscribers'))
                if(data.hasOwnProperty('subscribers')){
                   
                    data.subscribers.push({"uid": user.uid, "email": user.email});
                }else{
                    console.log(data)

                    for(const obj in data ){
                        console.log(obj);
                    }

                    data = {...data,subscribers:[{"uid":user.uid, "email": user.email}]}
                    console.log(data);
                }
                
                //console.log(data);
                fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/courses/${this.props.name}.json`, {
                    method: 'PUT', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => {response.json()})
            })
         
            this.props.setStateOfParentFormSubscribe(this.props.name);
        
    }



    render() {
        return (
            <>

                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.startDate}</td>
                    <td>{this.props.program}</td>

                    <td><button className="subscribeBtn" onClick={this.handleClickSubscribe} >Subscribe</button> </td>
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