import React from "react";

type Props = {
  text: string
  handleClickTab: (e: React.MouseEvent<HTMLButtonElement>, tabText: string) => void
}

const Tab: React.VFC<Props> = (props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => props.handleClickTab(e, props.text)

  return (
    <button onClick={onClick} className="border-r last:border-r-0 border-gray-400 text-gray-300 w-full text-center py-2">{props.text}</button>
  )
}

export default Tab;
