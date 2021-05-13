const Pagination = ({ items, pageSize, onPageChange }) => {
  // Part 2 code goes here
  const { Button } = ReactBootstrap;
  if (items.length <=1) return null;
  const numTotalPg = Math.ceil(items.length / pageSize);
  let pages = range(1, numTotalPg+1);
  const list = pages.map( pg => 
    {
      return(
        <Button className="page-item" key={pg}onClick={onPageChange}>
        {pg}
        </Button>
      )
    }
  );//pages.map 

  return(
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
}//Pagination

const range = (start, end) => {
  return Array(end - start + 1)
    .fill(0)
    .map((item, i) => start + i);
};

function paginate(items, pageNumber, pageSize) {
  const start = (pageNumber - 1) * pageSize;
  let page = items.slice(start, start + pageSize);
  return page;
}

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
      dispatch({type:'FETCH_INIT'});
      try{
        const result = await axios(url);
        if (!didCancel) 
          dispatch({type:'FETCH_SUCCESS', payload:result.data});
      }//try
      catch (error){
        if (!didCancel) 
          dispatch({type:'FETCH_FAILURE'});
      }//catch
    };//fetchData

    fetchData();

    return () => {
      didCancel = true;
    };//returen
  }, [url]);
  return [state, setUrl];
};

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
  }
};

// App that gets data from Hacker News url
function App() {
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState('MIT');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=MIT',
    {
      hits: [],
    }
  );

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  let page = data.hits;

  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage:${currentPage}`);  
  };
  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch("http://hn.algolia.com/api/v1/search?query=${query}");
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
        <div className="list-group">
          <ul>
            {page.map((item) => (
              <div className="list-group-item">
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
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
