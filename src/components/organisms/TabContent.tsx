import React, { useContext } from "react";
import Tabs from "../molecules/Tabs"
import EmojiItem from "../molecules/EmojiItem"
import { TabText } from "../../types/tabText"
import { EmojiContext } from "../../providers/EmojiProvider";


type Props = {
  tabTexts: TabText[]
}

const TabContent: React.VFC<Props> = (props) => {
  const { emojiList } = useContext(EmojiContext)

  const tabContent = emojiList.length ? emojiList.map(emoji => (
    <EmojiItem emoji={emoji} key={emoji.shortCode} />
  )) : <div className="text-gray-300">no items</div>;

  return (
    <div className="w-9/12 mx-auto border border-gray-400 rounded">
      <Tabs tabTexts={props.tabTexts} />
      <div className="px-4 py-8 grid grid-cols-5">
        {tabContent}
      </div>
    </div>
  )
}

export default TabContent;
