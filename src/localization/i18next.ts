import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'intl-pluralrules'
import tr from "localization/locales/tr.json"
import en from "localization/locales/en.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            tr: tr,
        },
        lng: 'tr',
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n