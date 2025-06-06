import { useEffect, useState } from 'react';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import ThemeSwitcher from './components/ThemeSwitcher';
import GenerateMnemonics from './components/GenerateMnemonics';
import KeyCardContainer from './components/KeyCardContainer';
import ViewAllButton from './components/AllWalletButton';
import img from './assets/bgLessWallet.png';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mnemonic, setMnemonic] = useState('');
  const [clicks, setClicks] = useState(0);
  const [allSolWallet, setSolAllWallet] = useState([]);
  const [allEtherWallet, setEtherAllWallet] = useState([]);
  const [solWalletLength, setSolWalletLength] = useState(0);

  useEffect(() => {
    setClicks(0);
  }, [mnemonic]);

  useEffect(() => {
    setSolWalletLength(allSolWallet.length);
  }, [allSolWallet]);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-200 text-gray-800'
      } min-h-screen transition-colors duration-300`}
    >
      <header className="p-4 flex justify-end">
        <img
          className="w-14 h-14 absolute top-2 left-6"
          src={img}
          alt="App icon"
        />

        <ThemeSwitcher isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      </header>
      <main className="p-8 pt-0 flex flex-col items-center">
        {/* <Grid isDarkMode={isDarkMode} /> */}
        <GenerateMnemonics
          isDarkMode={isDarkMode}
          mnemonic={mnemonic}
          setMnemonic={setMnemonic}
        />
        <KeyCardContainer
          isDarkMode={isDarkMode}
          mnemonic={mnemonic}
          setClicks={setClicks}
          clicks={clicks}
          allEtherWallet={allEtherWallet}
          allSolWallet={allSolWallet}
          setEtherAllWallet={setEtherAllWallet}
          setSolAllWallet={setSolAllWallet}
        />
        <ViewAllButton
          solWalletLength={solWalletLength}
          isDarkMode={isDarkMode}
          allEtherWallet={allEtherWallet}
          allSolWallet={allSolWallet}
        />
      </main>
      <footer className="p-4 text-center text-2xl">
        <span>Made By </span>
        <a
          href="https://github.com/VineetTehlan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isDarkMode ? 'text-[#f2e8cf]' : 'text-blue-600'
          } hover:underline hover:scale-105 transition`}
        >
          Vineet Tehlan
        </a>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
