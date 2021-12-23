import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableNews extends Component {

    constructor({props,user}) {
        super(props)
        
        this.state = { editButtonIsClicked:false}
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
    }

  

    

    handleClick = (e) => {
        e.preventDefault();
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/news/${this.props.name}.json`, { method: 'DELETE' })
            .then(res => res.json()) 
            this.props.setStateOfParent(this.props.name);
    }

    handleChange(){
       this.setState({editButtonIsClicked:true});
    }

    handleSave(){
        this.setState({editButtonIsClicked:false});
    }



    render() {


        return (
            <>

                <tr>
                  <td >{this.props.date}</td>
                  {  this.state.editButtonIsClicked ? <td ><input type ="text" defaultValue = {this.props.title} /></td> : <td >{this.props.title}</td> }
                  {  this.state.editButtonIsClicked ?  <td ><input type ="text" defaultValue = {this.props.description} /></td> :<td >{this.props.description}</td>}
                    <td>
                    {  this.state.editButtonIsClicked ? null: <NavLink to={`/news/details/${this.props.name}`}><button className="detailsBtn">Details</button></NavLink> }
                    {  this.state.editButtonIsClicked ? null  : <button className="deleteBtn" onClick={this.handleClick} >Delete</button>}
                    {  this.state.editButtonIsClicked ? null : <button className="editBtn" onClick={this.handleChange}>Edit</button>}
                    {  this.state.editButtonIsClicked ? <button className="saveBtn" onClick={this.handleSave}>Save</button> : null}
                    </td>
                </tr>

                <style>
                    {`

                    td {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
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

                      .editBtn{
                        background-color:green;
                      }

                      .saveBtn{
                        background-color:brown;
                      }
              `}
                </style>
            </>
        );
    }

};

export default TableNews;