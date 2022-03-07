import React from 'react';
import { TabText } from "./types/tabText"
import TabContent from './components/organisms/TabContent'
import { EmojiProvider } from './providers/EmojiProvider';

const tabTexts: TabText[] = ["All", "Favorites"];

const App: React.VFC = () => {
  return (
    <div className="App bg-gray-900 min-h-screen pt-8">
      <EmojiProvider>
        <TabContent tabTexts={tabTexts} />
      </EmojiProvider>
    </div>
  );
}

export default App;
