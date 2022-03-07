import React, { createContext, ReactElement, useContext, useState } from "react"
import allEmojiList from "../emojiList.json"
import { Emoji } from "../types/emoji"

export const EmojiContext = createContext({} as {
  emojiList: Emoji[]
  setEmojiList: React.Dispatch<React.SetStateAction<Emoji[]>>
});

type Props = {
  children: ReactElement
}

export const EmojiProvider: React.VFC<Props> = (props) => {
  const { children } = props;

  const favoritesStr = localStorage.getItem("favorites");
  let availableEmojiList: Emoji[];
  if (favoritesStr) {
    availableEmojiList = allEmojiList.filter((emoji: Emoji) => JSON.parse(favoritesStr).includes(emoji.shortCode));
  } else {
    availableEmojiList = allEmojiList
  }
  const [emojiList, setEmojiList] = useState(availableEmojiList);

  return (
    <EmojiContext.Provider value={{ emojiList, setEmojiList }}>
      {children}
    </EmojiContext.Provider>
  )
}