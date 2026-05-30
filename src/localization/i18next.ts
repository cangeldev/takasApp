import i18n from 'i18next' 
import { initReactI18next } from 'react-i18next' 

//En
import enAddress from './locales/en/address.json' 
import enAuth from './locales/en/auth.json' 
import enCommon from './locales/en/common.json' 
import enCountries from './locales/en/countries.json' 
import enErrors from './locales/en/errors.json' 
import enNotifications from './locales/en/notifications.json' 
import enProduct from './locales/en/product.json' 
import enProfile from './locales/en/profile.json' 
import enSettings from './locales/en/settings.json' 
import enSupport from './locales/en/support.json' 

//Tr
import trAddress from './locales/tr/address.json' 
import trAuth from './locales/tr/auth.json' 
import trCommon from './locales/tr/common.json' 
import trCountries from './locales/tr/countries.json' 
import trErrors from './locales/tr/errors.json' 
import trNotifications from './locales/tr/notifications.json' 
import trProduct from './locales/tr/product.json' 
import trProfile from './locales/tr/profile.json' 
import trSettings from './locales/tr/settings.json' 
import trSupport from './locales/tr/support.json' 



export const resources = {
    en: {
        address: enAddress,
        common: enCommon,
        countries: enCountries,
        auth: enAuth,
        product: enProduct,
        profile: enProfile,
        settings: enSettings,
        notifications: enNotifications,
        errors: enErrors,
        support: enSupport
    },
    tr: {
        address: trAddress,
        common: trCommon,
        countries: trCountries,
        auth: trAuth,
        product: trProduct,
        profile: trProfile,
        settings: trSettings,
        notifications: trNotifications,
        errors: trErrors,
        support: trSupport
    },
} as const

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        ns: ['address','common', 'countries','auth', 'product', 'profile', 'settings', 'notifications', 'errors', 'support'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
