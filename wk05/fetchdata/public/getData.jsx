/** App(): Main or parent component
 * Get search keyword from input field.
 * List up search result.
 ***/
function App() {
  const { Fragment, useState } = React;
  const [query, setQuery] = useState("MIT");
  
  /*** useDataApi(initialUrl, initialData): handling states and URL to fetcch from web
   * 1.Input parameters  
   *   1.1 initialUrl - Default URL 
   *   1.2 initialData - Default fetched data
   * 2.Output parameters  
   *   2.1 { data, isLoading, isError } - State variables depicting fetching condition
   *   2.2 doFetch - Function parameter for setUrl manipulator defined in useDataApi Kook
   ***/
  const defaultURL = "https://hn.algolia.com/api/v1/search?query=MIT";
  const defaultFetchedData = { hits: [] };
  
  /********************************************************************* 
   * Define kind of states you want to use for fetching data from URL.
   * i.e. { data, isLoading, isError }
   * And get ft. pointer or state manipulator to update URL, the ft. is defined in the user-defined Hook useDataApi.
   * i.e. doFetch
   *********************************************************************/
  const [{ data, isLoading, isError }, doFetch] = useDataApi(defaultURL, defaultFetchedData);
  //NOT working when using variable instead of direct entry for output of useDataApi, why?
  //const fetchStates = { data, isLoading, isError }; 
  //const [fetchStates, doFetch] = useDataApi(defaultURL, defaultFetchedData);
  
  /*** return of App
   * 1.In the form, input field change sets "query" state 
   * 2.And submit button click call doFetch() to set "url" state composed with "query" state added to Hacking New site. doFetch() is a returned function from useDataApi custom Hook.
   * 3.If there's error while feting url so "isError" state is set to true, then show msg at web body.
   * 4.If still fetching from url so "isLoading" state is set to ture, then show msg at web body.
   * 5.Fetching completed from url so "isLoading" state is set to false, then show contents of url at web body.
   * 6.React Fragment groups a list of children without adding extra nodes to the DOM.
   *  https://reactjs.org/docs/fragments.html
   * <Interesting stuffs>
   * 1.data, isLoading, isError are state variables assigned by custom Hook useDataApi()
   * 2.In data.hits.map function, how do we know that the fetched data has properties like objectID, url, and title?
   ***/
   return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}>
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );//return
}//App

/*** useDataApi(): Fetching web contents through useReducer and useEffect
 * 1.Input parameters  
 *   1.1 initialUrl - Default URL 
 *   1.2 initialData - Default fetched data
 * 2.Output parameters  
 *   2.1 state - State variable(s) defined in App compnent when calling useReducer: { data, isLoading, isError }
 *   2.2 setUrl - function parameter for setUrl manipulator defined in useDataApi Kook doFetch
 * 1.Manage the lifecycle events of fetching url. 
 * 2.To isoloate fetching lifecycle, we use useReducer() hook and declare state variables of "isLoading", "isError" and "data".  
 * 2.Fetch url, 
 ***/
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  /*** useReducer
   * const [state, dispatch] = useReducer(reducer, initialArg, init);
   * 1.Input parameters
   *  1.1 dataFetchReducer - reducer function
   *  1.2 {isLoading: false, isError: false, data: initialData} - initialArg
   * 2.In & Output parameters
   *  2.1 state - State variables are determined by dispatch action
   *  2.2 dispatch - Action to get relevant state(s)
   * 3.useReducer Hook defines "dataFetchReducer" 
   *    as a reducer of type (state, action) => newState, 
   *    and returns the current state paired with a dispatch method. 
   * 4.useReducer is usually preferable to useState 
   *    when you have complex state logic that involves multiple sub-values 
   *    or when the next state depends on the previous one. 
   * 5.useReducer also lets you optimize performance for components 
   *    that trigger deep updates because you can pass dispatch down instead of callbacks.
   *    https://reactjs.org/docs/hooks-reference.html#usereducer 
   ***/
  const [state, dispatch] = useReducer(dataFetchReducer, //reducer function
                {isLoading: false, isError: false, data: initialData} ); //initialArg

  /*** useEffect(): Fetching url, updating the lifecycle events of fetching
   * 0.Update fetching states by calling dispach.
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
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);//useEffect
  
  return [state, setUrl];
};//useDataApi

/*** dataFetchReducer: Reducer
 * 1.Input parameters
 *  1.1 state object - One or more states
 *  1.2 action - Modes of action which are declared and processed in this reducer
 * 2.Output parameters
 *  state object - Spreading the input state object and append additional ones according to modes of action
 ***/
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, isError: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }//switch (action.type)
};//dataFetchReducer

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
