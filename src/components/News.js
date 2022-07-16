import React from 'react'
import NewsItem from './NewsItem'

export default function News() {

    const [articles, setArticles] = React.useState();

    // async function componentDidMount() {
    //     let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf81e96af8f04a0ba2c811d11a1d166ad";
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData.articles);
    // }

    return (
        <div className='container'>
            <div className='row'>
                { articles.map((newsElement) => {
                    return <div className='col-md-4' key={newsElement.url}>
                        <NewsItem title={newsElement.title?newsElement.title:"Breaking News"} description={newsElement.description?newsElement.description: "Breaking news you must read" } newsUrl={newsElement.url} imageUrl={newsElement.urlToImage} />
                    </div>
                }
                )}
            </div>
        </div>
    )
}
