import React, { Component } from 'react'

export class Newsitem extends Component {
  
 
  render() {
      let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
      <img src={imageurl} className="card-img-top" style={{width:"285px",height:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a rel="norferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div></div>
    )
  }
}

export default Newsitem