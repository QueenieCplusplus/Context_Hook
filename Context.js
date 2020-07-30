// 2020, 7/30, Context, a React Hook to be an good alternative to Redux
// Global State Manager
// usage:

/*React.createContext().Provider
React.createContext().Consumer*/

import React from 'react';
// createContext is a hook in React

//export default 

// 建立一個 Context
const contextStore = React.createContext({
    userName: "",
    mailAddr: "",
    grantId: null,
    aproval: (userName, mailAddr, grantId) => {}
  })


// to render store in any Component

function aComponent() {
    return (
      <contextStore.Provider value={{userName: "Kate Chen", mailAddr: "queeniecplusplus@gmail.com"}}>
        <anotherComponent/>
      </contextStore.Provider>
    )
  }

function anotherComponent(){
    return (
        <contextStore.Consumer>
            {value => value.todos.map((todo) => (<div key={todo}>todo</div>))}  
        </contextStore.Consumer>
    )
    //也可寫成 {value => value.todos.map(todo => <div key={todo}>todo</div>)}
}
  