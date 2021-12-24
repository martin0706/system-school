import { render } from '@testing-library/react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableNews extends Component {

    constructor({props,user}) {
        super(props)
        
        this.state = { editButtonIsClicked:false, description: null, title:null}
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

    handleSave(e){
        

        let titleValue = document.getElementById(`t-${this.props.name}`).value;
        let descriptionValue = document.getElementById(`d-${this.props.name}`).value;
        this.setState({editButtonIsClicked:false,description: descriptionValue, title: titleValue});

        console.log(titleValue,descriptionValue)

        let data = { "title": titleValue, "description":descriptionValue, "date": this.props.date, "postedBy": this.props.postedBy };
        

        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/news/${this.props.name}.json`, {
          method: 'PUT', // or 'PUT'
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }).then(response => { response.json() })
      
 
    }



    render() {


        return (
            <>

                <tr>
                  <td >{this.props.date}</td>
                  {  this.state.editButtonIsClicked ? <td ><input id={`t-${this.props.name}`} type ="text" defaultValue = {this.state.title ||this.props.title} /></td> : <td >{this.state.title || this.props.title}</td> }
                  {  this.state.editButtonIsClicked ?  <td ><input id={`d-${this.props.name}`} type ="text" defaultValue = {this.state.description ||this.props.description} /></td> :<td >{this.state.description || this.props.description}</td>}
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