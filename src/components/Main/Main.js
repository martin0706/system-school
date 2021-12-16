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
            .then(news => {
                this.setState(() => ({ news }))
            })
    }

    render() {
        return (


            <>
                <main>


                    <div>School system</div>
                    <b><div>News</div></b>
                        

                    {
                        Object.keys(this.state.news).map((key) =>
                            <Article
                                key= {key}
                                title={this.state.news[key].title}
                                description={this.state.news[key].description}
                                postedBy={this.state.news[key].postedBy}
                                date={this.state.news[key].date}
                            ></Article>

                        )}

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