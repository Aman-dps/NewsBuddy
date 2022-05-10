import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class News extends Component {
  constructor(){
    super();
    console.log("hello");
    this.state = {
       articles: []
    }
  }
  async componentDidMount(){
    let url= "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b84855a82fd04be6bc1ab9fe80ae14a1";
    let data= await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
  }
  handleprevclick = async ()=>{
    let url= 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b84855a82fd04be6bc1ab9fe80ae14a1&page=${this.state.page - 1}';
    let data= await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({})
    this.setState({
      page: this.state.page +1,
      articles: parseddata.articles
    }

    ) 
     
  }
  handlenextclick = async ()=>{
    let url= 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b84855a82fd04be6bc1ab9fe80ae14a1&page=${this.state.page + 1}';
    let data= await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({})
    this.setState({
      page: this.state.page +1,
      articles: parseddata.articles
    }

    )
  }
  
  render() {
    return (
      <div className='container my-3'>
          <h2>NewsBuddy-Top headlines</h2>
          <div className='row'>
            
            {this.state.articles.map((element)=>(
          <div className="col-md-4" key={element.url}>
         <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url}/>         
          </div>
            ))} 
         
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
          </div>
          
         
      </div>
    )
  }
}

export default News;
  
  