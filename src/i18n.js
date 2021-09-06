import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

import en from "./assets/i18n/en.json";
import zh from "./assets/i18n/zh.json";

i18n
// .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: navigator.language.indexOf("en")>=0 ? "en" : "zh",
    fallbackLng: 'en',
    // backend: {
    //   /* translation file path */
    //   // loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    // },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    }
    // resources: {
    //   en: {
    //     translation: {
    //       "he": "HELLO",
    //       description: {
    //         part1: 'English',
    //         part2: 'Learn React'
    //       },
    //       "new_application": "Apply for Driving Test",
    //       "new_application_desc" : "Online registration is simple and fast",
    //       "new_application_link" : "Sign up now",
    //       "coach": "professional coach",
    //       "coach_desc" : "Professional and qualified coaches from all over Taiwan",
    //       "coach_link" : "find my coach",
    //       "test": "test technique",
    //       "test_desc": "Simulated test questions, easily pass",
    //       "test_link": "learn more"
    //     }
    //   },
    //   zh: {
        
    //     translation: {
    //     "he": "哈囉",  
    //       description: {
    //         part1: '德文1',
    //         part2: '德文2'
    //       },
    //       "new_application": "新手報名",
    //       "new_application_desc" : "線上簡單快速報名",
    //       "new_application_link" : "馬上報名",
    //       "coach": "專業教練",
    //       "coach_desc" : "來自全台的專業合格教練",
    //       "coach_link" : "找教練",
    //       "test": "筆試秘笈",
    //       "test_desc": "模擬試題，讓您輕鬆過關",
    //       "test_link": "了解更多"
    //     }
    //   }
    // }
  });

export default i18n;



