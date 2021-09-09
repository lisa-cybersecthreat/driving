import './App.scss';
import DrivingWebsite from './components/DrivingWebsite';
// import { useTranslation, Trans } from 'react-i18next';
import { InitProvider } from './contexts/InitContext';
import { FunctionPrivider } from './contexts/functionContext';
import { DataProvider } from './contexts/dataContext';

function App() {
  // const lngs = {
  //   en: { nativeName: 'English' },
  //   zh: { nativeName: 'Deutsch' }
  // };
  // const { t, i18n } = useTranslation();

  return (
    <div className="App">
          <InitProvider>
            <DataProvider>
            {/* <FunctionPrivider> */}
              <DrivingWebsite />
            {/* </FunctionPrivider> */}              
            </DataProvider>
          </InitProvider>
    </div>
  );
}

export default App;
