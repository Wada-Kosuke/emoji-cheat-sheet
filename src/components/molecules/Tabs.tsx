import React, { useState } from "react";
import Tab from "../Atoms/Tab"
import { TabText } from "../../types/tabText"

type Props = {
  tabTexts: TabText[]
}

const Tabs: React.VFC<Props> = (props) => {
  const favoritesStr = localStorage.getItem("favorites");
  const firstTab: TabText = favoritesStr ? "Favorites" : "All";
  const [currentTab, setCurrentTab] = useState(firstTab);

  return (
    <div className="border-b border-gray-400 flex justify-evenly">
      {props.tabTexts.map(tabText => (
        <Tab key={tabText} text={tabText} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      ))}
    </div>
  )
}

export default Tabs;
