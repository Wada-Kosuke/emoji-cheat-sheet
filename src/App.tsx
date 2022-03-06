import React from 'react';
import TabContent from './components/organisms/TabContent'

const tabTexts: string[] = ["All", "Favorites"];

const App: React.VFC = () => {
  return (
    <div className="App bg-gray-900 min-h-screen pt-8">
      <TabContent tabTexts={tabTexts} />
    </div>
  );
}

export default App;
