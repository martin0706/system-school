import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import Article from "../Article/Article";

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: []
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
                    this.setState({ news: array })

                }
            })

    }

    
    render() {
        return (


            <>
                <main>


                    <div>School system</div>
                    <b><div>News</div></b>


                    {
                        this.state.news?.map((item) =>
                            <Article
                                key={item.id}
                                newsId={item.id}
                                title={item.title}
                                description={item.description}
                                postedBy={item.postedBy}
                                date={item.date}
                            ></Article>

                        )}

                </main>

                <style>
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
                   

                   main div {
                       
                        padding: 20px;
                        filter:none;
                        color: black;
                    
                   }

              `}
                </style>
            </>

        );
    }
}
export default Main;