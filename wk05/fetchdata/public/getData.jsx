function App() {
  const { Container } = ReactBootstrap;
  const { useState, useEffect } = React;
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("MIT");
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=MIT");
  const [isLoading, setIsLoading] = React.useState(false);
  
  console.log("Rendering App");
  
  /*** useEffect(): Fetching url and handles the LifeCycle Events
   * 1.Uses "axio" library to get url contents than JS native fetch(). 
   * 2.axio has advantages to fetch() wrt/followings: 
   *  2.1 Format of the data retrieved
   *  2.2 Protocol for requesting data, 
   *  2.3 Backward compatibility. 
   * 3.Refer the two sites of their comparison.
   *  https://blog.logrocket.com/axios-or-fetch-api/
   *  https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/
   * 4.Notice to use "async" qualifier for overall implementation on data fetching and "await" for specifi fucntion call to get url.
   * 5.Also, use try{} catch{} practice to get any implicat error in operation.
   *   If there's error while feting url, "isError" state is set to true.
   * 6."isLoading" state depicts current status of awaiting process.
   * 7.Fetched ata is already set to JSON format and can access with ease. 
   * 8.Only when [url] changes, useEffect hook re-renders. ***/
  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };//fetchData

    fetchData();
  }, [url]);//useEffect

  /***
   * 1.In the form, input field change sets "query" state 
   * 2.And submit button click sets "url" state composed with "query" state added to Hacking New site.
   * 3.If there's error while feting url so "isError" state is set to true, then show msg at web body.
   * 4.If still fetching from url so "isLoading" state is set to ture, then show msg at web body.
   * 5.Fetching completed from url so "isLoading" state is set to false, then show contents of url at web body.
   * <Interesting stuffs>
   * 1.In data.hits.map function, how do we know that the fetched data has properties like objectID, url, and title?
   */
  return (
    <Container>
      <form
        onSubmit={event => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ol>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ol>
      )}
    </Container>
  );//return
}//App
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
