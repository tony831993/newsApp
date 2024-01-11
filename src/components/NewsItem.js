import React, { Component } from 'react'

export class News extends Component {

    render() {
        let { title, description, imageUrl, newUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%'}}>
                        {source}
                    </span>
                    <img src={(imageUrl) ? imageUrl : 'https://www.jclex.com/images/newsbg.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><strong>By</strong> {author ? author : 'Unknown'} | <strong>on</strong> {new Date(publishedAt).toGMTString()}</p>
                        <a href={newUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News