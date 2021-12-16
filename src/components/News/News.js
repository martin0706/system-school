import { Component } from 'react';
import TableNews from '../TableNews/TableNews';


class News extends Component {


    constructor(props) {
        super(props)

        this.state = {
            news: [],
            name: "",
            status: ""
        }


        this.onSubmitHandler = (e) => {
            e.preventDefault();
            const date = new Date();
            const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
            const data = { "title": e.target.title.value, "description": e.target.description.value, "date": `${day}/${month}/${year}`, "postedBy": "Ivan"};

            fetch('https://system-school-7931c-default-rtdb.firebaseio.com/news.json', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(item => {
                   this.setState(this.state.news[item.name] = data);
                    console.log('Success:', item);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                e.target.reset();       
            }
         
    }


    componentDidMount() {
        fetch("https://system-school-7931c-default-rtdb.firebaseio.com/news.json")
            .then(res => res.json())
            .then(news => {
                this.setState(() => ({ news }))
            })
    }


   


    render() {
        return (
            <>
                <main>

                    <div>Create News</div>

                    <form onSubmit={this.onSubmitHandler} htmlFor="form">

                        <label htmlFor="title"><b>Title: </b></label>
                        <input type="text" placeholder="Enter Title" name="title" required />

                        <label htmlFor="description"><b>Description: </b></label>
                        <textarea name="description" placeholder="Enter text here..."></textarea>

                        <button type="submit" name="button">Post</button>


                    </form>

                    <div>All posted news</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                           Object.keys(this.state.news)?.map((key) =>
                                    <TableNews
                                        key={key}
                                        name = {key}
                                        title={this.state.news[key].title}
                                        date={this.state.news[key].date}
                                    ></TableNews>

                                )}
                        </tbody>
                    </table>

                </main>

                <style jsx>
                    {`
               
               main {
                    text-align: center;

                    background-position: center;
                    background-color: #E8E8E8;
                    background-size: cover;
                    color: white;
                    font-size: 20px;
                    min-height: 87vh;
                    
                    
               }

              form button {
                background-color:black;
                color: white;
                padding: 10px;
                margin: 20px 10px;
                border: none;
                cursor: pointer;
                width: 130px;
                display:block;
                margin: 10px auto;
              }

              button:hover {
                opacity: 0.8;
              }


              form {
                margin: auto;
                width: 90%;
                padding: 10px;
              }
               
              input{
                  margin: 10px auto;
                  width: 200px;
                  padding: 10px;
                  background-color: #E8E8E8;
              }

              label{
                  color: Black;
                  display:block;
              }

             main div{

                padding: 10px;
                color: Black;
              }

              textarea{
 
              
                width: 100%;
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                  padding: 10px;
                  background-color: #E8E8E8;
                  margin: auto;

              }
             
          `}
                </style>
            </>
        );
    }
}

export default News;