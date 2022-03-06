import React from "react";
import { useState } from "react"

interface Emoji {
  shortCode: string
  graph: string
}

type Props = {
  emoji: Emoji
}

const EmojiItem: React.VFC<Props> = (props) => {
  const [isClicked, setIsClicked] = useState(false)
  const onClickEmoji = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(props.emoji.shortCode);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false)
    }, 1000)
  }

  const copiedText = isClicked ? "copied!" : "";

  return (
    <div className="my-3">
      <div className="flex justify-center items-center mb-1">
        <input type="checkbox" />
        <button onClick={onClickEmoji} className="ml-2 text-3xl">{props.emoji.graph}</button>
      </div>
      <div className="text-center text-gray-300 font-xs h-4">
        {copiedText}
      </div>
    </div>
  )
}

export default EmojiItem;
