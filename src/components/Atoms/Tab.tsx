import React, { Dispatch, SetStateAction, useContext } from "react";
import { EmojiContext } from "../../providers/EmojiProvider";
import { TabText } from "../../types/tabText";
import { Emoji } from "../../types/emoji"
import allEmojiList from "../../emojiList.json";

type Props = {
  text: TabText
  currentTab: TabText
  setCurrentTab: Dispatch<SetStateAction<TabText>>
}

const Tab: React.VFC<Props> = (props) => {
  const { setEmojiList } = useContext(EmojiContext)
  const onClick = () => {
    props.setCurrentTab(props.text);
    switch (props.text) {
      case "All":
        setEmojiList(allEmojiList)
        break;
      case "Favorites":
        const favoritesStr = localStorage.getItem("favorites");
        if (favoritesStr) {
          setEmojiList(allEmojiList.filter((emoji: Emoji) => JSON.parse(favoritesStr).includes(emoji.shortCode)));
        } else {
          setEmojiList([]);
        }
        break;
    }
  }

  return (
    <button onClick={onClick} className={(props.currentTab === props.text ? "bg-gray-800" : "") + " border-r last:border-r-0 border-gray-400 text-gray-300 w-full text-center py-2"}>{props.text}</button>
  )
}

export default Tab;
