const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            
            const aSite = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;

            const res = await axios (aSite);
            
            /*** For debug
            console.log(process.env); 
            console.log(process.env.REACT_APP_NYTIMES_API_KEY); 
            console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`); 
            console.log(aSite);
            ***/
            
            setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <>
            (loading ? ( "Loading...") : 
                (<div className={classes.root} >
                    {articles.map((item) => (
                        <div className='list-group-item'>
                            <li key={item.Object}>
                                <a href={item.web_url}>{item.headline.main}</a>
                            </li>
                        </div>
                  ))}
                </div>)
            )
        </>
    );
};

export default App;
