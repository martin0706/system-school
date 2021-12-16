import { Component } from 'react';
import TableNews from '../TableNews/TableNews';


class News extends Component {


    constructor(props) {
        super(props)
        this.setStateOfParent.bind(this);
        this.state = {
            news: [],
            name: "",
            status: "",
            hasNews: false,
        }



        this.onSubmitHandler = (e) => {
            e.preventDefault();
            const date = new Date();
            const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
            const data = { "title": e.target.title.value, "description": e.target.description.value, "date": `${day}/${month}/${year}`, "postedBy": "Ivan" };

            fetch('https://system-school-7931c-default-rtdb.firebaseio.com/news.json', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(item => {
                    this.setState({ news: [...this.state.news, { ...data, "id": item.name }] });
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
            .then(items => {
                const array = [];
                if (items) {
                    Object.keys(items).forEach((key) => {
                        array.push({ "id": [key][0], ...items[key] });
                    });
                    this.setState({ news: array, hasNews: true })
                }
            })

    }

    setStateOfParent = (id) => {
        console.log(this.state.news)
        this.setState({ news: this.state.news.filter(item => item.id != id) });

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
                        <textarea name="description" placeholder="Enter text here..." required></textarea>

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
                                this.state.news?.map((item) =>
                                    <TableNews
                                        key={item.id}
                                        name={item.id}
                                        title={item.title}
                                        date={item.date}
                                        setStateOfParent={this.setStateOfParent}
                                    ></TableNews>

                                )}
                        </tbody>
                    </table>

                </main>

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