# Context_Hook
React.creatContext as store, store.Provider, store.Consumer

React 的 context 是一個全域變數，能儲存全域的值提供所有解析函式 Resolver 讀取資料的地方。
context 適用於情境如下：

* Auth, 身份驗證

* DB env, 資料庫細節

* Cache, 本地快取

* Resolver 需要解析函數操作的資料
  詳見 Apollo Data Source。
  
# 宣告方式

    React.createContext({})
    
# 使用方式

    React.createContext({}).Provider
    React.createContext({}).Consumer

     


