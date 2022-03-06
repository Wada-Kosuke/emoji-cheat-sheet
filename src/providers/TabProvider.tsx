import React, { createContext, useState } from "react"

export const TabContext = createContext({} as {
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
});

type Props = {
  children: any
}

export const TabProvider: React.VFC<Props> = (props) => {
  const { children } = props;
  const [currentTab, setCurrentTab] = useState("All");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  )
}