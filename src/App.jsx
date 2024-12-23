import React from 'react'
import { useState } from 'react'

import "/src/assets/fonts.css"
import "./App.css"

import Tab from './Components/Tab/Tab'
import TabSelector from './Components/TabSelector/TabSelector'
import TabActive from './Components/Tabs/TabActive/TabActive'
import TabAll from './Components/Tabs/TabAll/TabAll'
import TabCompleted from './Components/Tabs/TabComplete/TabCompleted'

function App() {
  const [activeTab, setActiveTab] = useState("All");
  const HandleTabChange = (e) => {
    console.log(e.target.getAttribute("tab"));
    let Pchilds = e.target.parentNode.children;
    for (let index = 0; index < Pchilds.length; index++) {
      const element = Pchilds[index];
      if(element.classList.contains("active")){
        element.classList.remove("active")
      }
    }
    e.target.classList.add("active");
    setActiveTab(e.target.getAttribute("tab"));
  }
  const TabRender = (tabName) =>{
    switch(tabName){
      case 'All':
        return <TabAll/>;
      case 'Active':
        return <TabActive/>
      case 'Complete':
        return <TabCompleted/>
      default:
        return <h2>Content not found.</h2>;
    }
  }
  return (<>
    <h1 className='poppins'>TO DO APP</h1>
    <TabSelector 
      Tab1 = {HandleTabChange}
      Tab2 = {HandleTabChange}
      Tab3 = {HandleTabChange}
    />
    <Tab>
      {TabRender(activeTab)}
    </Tab>

  </>
  )
}

export default App