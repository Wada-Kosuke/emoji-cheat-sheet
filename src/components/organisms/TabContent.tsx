import React from "react";
import { useState } from "react"
import Tabs from "../molecules/Tabs"
import EmojiItem from "../molecules/EmojiItem"
import emojiArray from "../../emoji.json"

type Props = {
  tabTexts: string[]
}

const TabContent: React.VFC<Props> = (props) => {
  const [currentTabName, setCurrentTabName] = useState("")
  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>, tabText: string) => setCurrentTabName(tabText);

  return (
    <div className="w-11/12 mx-auto border border-gray-400 rounded">
      <Tabs tabTexts={props.tabTexts} handleClickTab={handleClickTab} />
      <div className="px-4 py-8 grid grid-cols-5">
        {emojiArray.map(emoji => (
          <EmojiItem emoji={emoji} key={emoji.shortCode} />
        ))}
      </div>
    </div>
  )
}

export default TabContent;