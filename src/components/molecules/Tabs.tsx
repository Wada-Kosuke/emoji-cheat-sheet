import React from "react";
import Tab from "../Atoms/Tab"

type Props = {
  tabTexts: string[]
}

const Tabs: React.VFC<Props> = (props) => {
  return (
    <div className="border-b border-gray-400 flex justify-evenly">
      {props.tabTexts.map(tabText => (
        <Tab key={tabText} text={tabText} />
      ))}
    </div>
  )
}

export default Tabs;
