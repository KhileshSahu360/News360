import React from 'react';
import Card from './Card';

const News = (props) => {
    const news =  props.newsData;
    console.log('NewsCom :',news);

    return (
        <div className='container my-3 '>
            <h1 className='text-center mb-4'>News360 - Top HeadLines</h1>
            <div className="row">
            {news && news.map((element,index) => {
                return (
                    <div key={index} className='col-md-4 d-flex mb-5 justify-content-center'>
                        <Card title={element.title} image={element.urlToImage} des={element.description} url={element.url} author={element.author}/>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default News;
