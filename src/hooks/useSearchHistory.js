import { useState } from "react";


function useSearchHistory(){


  const [history,setHistory] = useState(()=>{

    const saved =
      localStorage.getItem("searchHistory");


    return saved
      ? JSON.parse(saved)
      : [];

  });





  const addToHistory = (query)=>{


    if(!query.trim()) return;



    const updated = [

      query,

      ...history.filter(
        item=>item !== query
      )

    ].slice(0,5);




    setHistory(updated);



    localStorage.setItem(

      "searchHistory",

      JSON.stringify(updated)

    );


  };





  const clearHistory = ()=>{


    setHistory([]);


    localStorage.removeItem(
      "searchHistory"
    );


  };




  return {

    history,

    addToHistory,

    clearHistory

  };


}


export default useSearchHistory;