import React, { useContext } from "react";
import { TabContext } from "../../providers/TabProvider";

type Props = {
  text: string
}

const Tab: React.VFC<Props> = (props) => {
  const { currentTab, setCurrentTab } = useContext(TabContext)
  const onClick = () => setCurrentTab(props.text)

  return (
    <button onClick={onClick} className={(currentTab === props.text ? "bg-gray-800" : "") + " border-r last:border-r-0 border-gray-400 text-gray-300 w-full text-center py-2"}>{props.text}</button>
  )
}

export default Tab;
