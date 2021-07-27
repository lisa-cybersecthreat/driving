import './App.scss';
import DrivingWebsite from './components/DrivingWebsite';
import { useTranslation, Trans } from 'react-i18next';
import { InitProvider } from './contexts/InitContext';

function App() {
  const lngs = {
    en: { nativeName: 'English' },
    zh: { nativeName: 'Deutsch' }
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
              {/* <div style={{marginTop: "5em", background: "lightBlue", textAlign: "center"}}>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} 
            type="submit" 
            onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
          <h1>{t("he")}</h1>
          <p><Trans i18nKey="description.part1"></Trans></p>
          <h1>{t('description.part2')}</h1>
          </div> */}
          <InitProvider>
            <DrivingWebsite />
          </InitProvider>
    </div>
  );
}

export default App;
