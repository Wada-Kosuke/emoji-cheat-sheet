import React, { useState, useEffect } from "react";
import { Emoji } from "../../types/emoji";

type Props = {
  emoji: Emoji
}

const EmojiItem: React.VFC<Props> = (props) => {
  const [underText, setUnderText] = useState("");
  const [checked, setChecked] = useState(false);
  const onClickEmoji = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(props.emoji.shortCode);
    setUnderText("copied");
    setTimeout(() => {
      setUnderText("");
    }, 1000);
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    const favoritesStr = localStorage.getItem("favorites");
    let favorites: string[];
    if (e.target.checked) {
      setUnderText("added to Favorites");
      if (favoritesStr) {
        favorites = JSON.parse(favoritesStr);
        favorites.push(props.emoji.shortCode);
      } else {
        favorites = [props.emoji.shortCode];
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      setUnderText("removed");
      if (favoritesStr) {
        favorites = JSON.parse(favoritesStr);
        favorites = favorites.filter(favorite => favorite !== props.emoji.shortCode);
        if (favorites.length) {
          localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
          localStorage.removeItem("favorites");
        }
      } else {
        return;
      }
    }

    setTimeout(() => {
      setUnderText("");
    }, 1000);
  }

  useEffect(() => {
    const favoritesStr = localStorage.getItem("favorites");
    if (favoritesStr) {
      const favorites = JSON.parse(favoritesStr);
      if (favorites.includes(props.emoji.shortCode)) {
        setChecked(true);
      }
    }
  }, [])

  return (
    <div className="my-3">
      <div className="flex justify-center items-center mb-1">
        <input onChange={onChangeInput} type="checkbox" checked={checked} />
        <button onClick={onClickEmoji} className="ml-2 text-3xl">{props.emoji.graph}</button>
      </div>
      <div className="text-center text-gray-300 font-xs h-4">
        {underText}
      </div>
    </div>
  )
}

export default EmojiItem;
