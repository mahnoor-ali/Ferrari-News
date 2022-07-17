import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function News() {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [Totalresponses, setTotalresponses] = useState(0);
    const [pageSize, setPageSize] = useState(18);

//if page=home, set pagesize == total responses

    //update page with news
    const updatePage = async () =>  {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf81e96af8f04a0ba2c811d11a1d166a&pageSize=${pageSize}&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setTotalresponses(parsedData.totalResults);
        setArticles(parsedData.articles);
        console.log(articles);
    }

    const handleNext = async () => {
        setPage(page+1);
        updatePage();
    }

    const handlePrevious = async () => {
        setPage(page-1);
        updatePage();
    }


    // update page with news content when page renders for the first time
  useEffect (  () => {
    updatePage();
  },[] )

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

            <div class="d-flex justify-content-between">
            {/* { page>=1 && <button onClick={handlePrevious} type="button" className="btn btn-lg btn-dark">&larr; Back</button> }
             { Math.ceil(Totalresponses/pageSize)>page && <button onClick={handleNext} type="button" className="btn btn-lg btn-dark">Next &rarr;</button> } */}
            <button onClick={handlePrevious} type="button" className="btn btn-lg btn-dark" disabled={page<=1}>&larr; Back</button>
            <button onClick={handleNext} type="button" className="btn btn-lg btn-dark" disabled={ !(Math.ceil(Totalresponses/pageSize)>page)} >Next &rarr;</button>


            </div>

        </div>
    )
}
