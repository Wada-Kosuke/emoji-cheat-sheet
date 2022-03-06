import React from 'react';
import TabContent from './components/organisms/TabContent'
import { TabProvider } from './providers/TabProvider';

const tabTexts: string[] = ["All", "Favorites"];

const App: React.VFC = () => {
  return (
    <div className="App bg-gray-900 min-h-screen pt-8">
      <TabProvider>
        <TabContent tabTexts={tabTexts} />
      </TabProvider>
    </div>
  );
}

export default App;
