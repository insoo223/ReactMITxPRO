import React,  { Fragment, useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
    // const keywds='The Tragedy of War in the Twentieth Century'
    const keywds='Mary Beard'
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState(keywds);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            
            //const aSite = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${query}")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;
            
            const aSite = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="${query}"&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;
            
            // const aSite = `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;
            

            const res = await axios (aSite);
            
            /*** For debug
            console.log(process.env); 
            console.log(process.env.REACT_APP_NYTIMES_API_KEY); 
            console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`); 
            console.log(aSite);
            ***/
            
            setArticles(res.data.response.docs);
            // setArticles(res.data.response.lists.list_name);

            setLoading(false);
        };
        getArticles();

    }, [query]);

    return (
        <Fragment>
            <form
                onSubmit={event => {
                //doFetch("http://hn.algolia.com/api/v1/search?query=${query}");
                //doFetch(webSite+'${query}');
                //doFetch(aSite);
                setQuery(event.target.value);
                event.preventDefault();
                }}
            >
                <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
    
            {
                loading ? (
                    "Loading..."
                ) : (
                    <ol>
                        {articles.map((item) => (
                            <div className='list-group-item'>
                                <li key={item._id}>
                                    <a href={item.web_url}>{item.headline.main}</a>
                                </li>
                            </div>
                        ))}
                    </ol>
                )
            }
        </Fragment>
    );//return    
};

export default App;

