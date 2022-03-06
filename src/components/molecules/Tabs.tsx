import React from "react";
import Tab from "../Atoms/Tab"

type Props = {
  tabTexts: string[]
  handleClickTab: (e: React.MouseEvent<HTMLButtonElement>, tabText: string) => void
}


const Tabs: React.VFC<Props> = (props) => {
  return (
    <div className="border-bottom border-gray-400 flex justify-evenly">
      {props.tabTexts.map(tabText => (
        <Tab key={tabText} text={tabText} handleClickTab={props.handleClickTab} />
      ))}
    </div>
  )
}

export default Tabs;
