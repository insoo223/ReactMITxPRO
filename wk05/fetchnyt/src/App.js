import React, { useEffect, useState } from 'react';
import Articles from '../src/Articles';
import axios from 'axios';

require('dotenv').config(); //for using .env (insoo added on May 12, 2021)

const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            //const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            
            //const res = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key='+ {process.env.REACT_APP_NYTIMES_API_KEY} );
                        
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=pdvKvddyrX6tWREGUsTqzKdP1W4HGYKA`);setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
    );
};

export default App;