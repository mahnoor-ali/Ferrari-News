import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [Totalresponses, setTotalresponses] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    //if page=home, set pagesize == total responses

    //update page with news
    const updatePage = async () => {
        setIsLoading(true); //to show spinner only while getting content from news API
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e202682403c9433487cb87952cfd27d1&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setIsLoading(false);
        setTotalresponses(parsedData.totalResults);
        setArticles(parsedData.articles);
        console.log(articles);
    }

    const handleNext = async () => {
        setPage(page + 1);
        updatePage();
    }

    const handlePrevious = async () => {
        setPage(page - 1);
        updatePage();
    }


    // update page with news content when page renders for the first time
    useEffect(() => {
        updatePage();
    })

    return (
        <div className='container'>
            {isLoading && <Spinner />}
            {!isLoading && /* only show news content when its loaded completely */
                <div className='row'>
                    {articles.map((newsElement) => {
                        return <div className='col-md-4' key={newsElement.url}>
                            <NewsItem title={newsElement.title ? newsElement.title : "Breaking News"} description={newsElement.description ? newsElement.description : "Breaking news you must read"} newsUrl={newsElement.url} imageUrl={newsElement.urlToImage} />
                        </div>
                    }
                    )}
                </div>
            }
            {!isLoading && /* only show news content when its loaded completely */
                <div className="d-flex justify-content-between">
                    <button onClick={handlePrevious} type="button" className="btn btn-lg btn-dark" disabled={page <= 1}>&larr; Back</button>
                    <button onClick={handleNext} type="button" className="btn btn-lg btn-dark" disabled={!(Math.ceil(Totalresponses / props.pageSize) > page)} >Next &rarr;</button>
                </div>
            }

        </div>
    )
}
