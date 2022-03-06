import React from "react";
import { useState } from "react"
import Tabs from "../molecules/Tabs"

type Props = {
  tabTexts: string[]
}

const TabContent: React.VFC<Props> = (props) => {
  const [currentTabName, setCurrentTabName] = useState("")
  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>, tabText: string) => setCurrentTabName(tabText);

  return (
    <div className="w-11/12 mx-auto border border-gray-400 rounded">
      <Tabs tabTexts={props.tabTexts} handleClickTab={handleClickTab} />
    </div>
  )
}

export default TabContent;
