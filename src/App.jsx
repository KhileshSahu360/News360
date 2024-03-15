import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import Spinner from './components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const apiKey = '5997048b4ba1426ea7992564403fc0f0';
  const pageSize = 6;
  const [category, setCategory] = useState('general');
  const [text, setText] = useState('general');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [news, setNews] = useState([]);

  const url = `https://newsapi.org/v2/everything?q=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
        setLoading(false);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
        setLoading(false);
      }
    };
    getNews();
  }, [url, category]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newNews = data.articles;
    if (newNews && newNews.length > 0) {
      setPage((prevPage) => prevPage + 1);
      setNews([...news, ...newNews]);
    } else {
      setHasMore(false);
    }
  };
  

  return (
    <>
      <Header />
      <Category text={text} setText={setText} category={category} setCategory={setCategory} />
      {hasMore && <News newsData={news} />}
      <InfiniteScroll
        dataLength={news.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
      />
    </>
  );
}

const Category = ({ text, setText, category, setCategory }) => {
  const activeStyle = {
    backgroundColor: '#900',
    color: 'white',
  };
  const unActiveStyle = {
    backgroundColor: 'white',
    color: '#900',
  };
  return (
    <div className="cat_div">
      <div className="title">
        <h6>Category</h6>
      </div>
      <div className="cat_box">
        <span style={text === 'general' ? activeStyle : unActiveStyle} onClick={() => { setText('general'); setCategory('general'); }}>General</span>
        <span style={text === 'business' ? activeStyle : unActiveStyle} onClick={() => { setText('business'); setCategory('business'); }}>Business</span>
        <span style={text === 'entertainment' ? activeStyle : unActiveStyle} onClick={() => { setText('entertainment'); setCategory('entertainment'); }}>Entertainment</span>
        <span style={text === 'health' ? activeStyle : unActiveStyle} onClick={() => { setText('health'); setCategory('health'); }}>Health</span>
        <span style={text === 'sports' ? activeStyle : unActiveStyle} onClick={() => { setText('sports'); setCategory('sports'); }}>Sports</span>
        <span style={text === 'science' ? activeStyle : unActiveStyle} onClick={() => { setText('science'); setCategory('science'); }}>Science</span>
      </div>
    </div>
  );
};

export default App;
