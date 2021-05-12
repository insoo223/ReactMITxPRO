const Pagination = ({ items, pageSize, onPageChange }) => {
    // Part 2 code goes here
    const { Button } = ReactBootstrap;
    if (items.length <= 1) return null;
  
    let num = Math.ceil(items.length / pageSize);
    let pages = range(1, num + 1);
    const list = pages.map(page => {
      return (
        <Button key={page} onClick={onPageChange} className="page-item">
          {page}
        </Button>
      );
    });
    return (
      <nav>
        <ul className="pagination">{list}</ul>
      </nav>
    );
}//Pagination
  
const range = (start, end) => {
    return Array(end - start + 1)
      .fill(0)
      .map((item, i) => start + i);
}//range
  
function paginate(items, pageNumber, pageSize) {
    const start = (pageNumber - 1) * pageSize;
    let page = items.slice(start, start + pageSize);
    return page;
}//paginate
  
const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
  
    useEffect(() => {
      let didCancel = false;
      const fetchData = async () => {
        // Part 1, step 1 code goes here
        dispatch( {type:'FETCH_INIT'});
        try{
          const result = await axios(url);
          if (!didCancel) 
            //dispatch( {type:'FETCH_SUCCESS', payload:result.data} );
            dispatch( {type:'FETCH_SUCCESS', payload:result.data.response.docs} );
        }//try
        catch (error){
          if (!didCancel) 
            dispatch( {type:'FETCH_FAILURE'});
        }//catch
      };//fetchData
  
      fetchData();
  
      return () => {
        didCancel = true;
      };//returen
    }, [url]);
    return [state, setUrl];
}//useDataApi
  
const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }//switch
}//dataFetchReducer
  
const App = () => {
    const { Fragment, useState, useEffect, useReducer } = React;
    const [query, setQuery] = useState('MIT');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    /* 
      'https://hn.algolia.com/api/v1/search?query=', //ok
    */
   const webSite = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=';
   const kwd ='MIT'; //MIT python jinhae
   const apiHeader = '&api-key=';
   const apiKey ='pdvKvddyrX6tWREGUsTqzKdP1W4HGYKA'; //NYT api
   
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      //webSite+kwd+apiHeader+apiKey, //MIT
      //webSite+apiKey,
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=pdvKvddyrX6tWREGUsTqzKdP1W4HGYKA',
      {
        []
      }
    );
    const handlePageChange = (e) => {
      setCurrentPage(Number(e.target.textContent));
    };
    //let page = data.hits;
    let page = data;
    console.log(`data: ${data}`);
    if (page.length >= 1) {
      page = paginate(page, currentPage, pageSize);
      console.log(`currentPage: ${currentPage}`);
    }
    return (
        <Fragment>
        <form
          onSubmit={event => {
            //doFetch("http://hn.algolia.com/api/v1/search?query=${query}");
            doFetch(`${webSite+apiKey}`);
            //doFetch(webSite+'${query}');
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
  
        {isError && <div>Something went wrong ...</div>}
  
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          // Part 1, step 2 code goes here
          <div className='list-group'>
            <ul>
              {page.map((item) => (
                <div className='list-group-item'>
                  <li key={item.ObjectID}>
                    <a href={item.web_url}>{item.headline.main}</a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
        <Pagination
          items={data.hits}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        ></Pagination>
      </Fragment>    
    );
}

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
