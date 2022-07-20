import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="my-3">
            <div className="card text-bg-light mb-3">
            <span className="position-absolute top-0 start-100 translate-middle badge" style={{zIndex:'1'}}>
                <span className="badge text-bg-success">{props.source}</span>
             </span>
                <img src={props.imageUrl ? props.imageUrl : "https://newsforce247.com/09-05-2022-08-54-03-am-2213759.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">{(new Date(props.date)).toGMTString()}</small></p>
                    <p className="card-text"><small className="text-muted"> <strong> By {props.source} </strong></small></p>
                    <a href="{props.newsUrl}" target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}