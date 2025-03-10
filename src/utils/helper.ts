import { moon, palette, sun } from 'assets/index'
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()

export const MemberInfoTexts = [
    { icon: 'check-square', text: t('phoneNnumberVerified') },
    { icon: 'calendar', text: t('youSignedUpMonthAgo') }
]

export const ProfileSettingsOptionsList = [
    {
        id: 1,
        iconName: 'user',
        type: 'Feather',
        title: t('personalInformation'),
        navigatePage: "PersonInformationPage"
    },
    {
        id: 2,
        iconName: 'location',
        type: 'Octicons',
        title: t('addressAndLocationInformation'),
        navigatePage: "AddressAndLocationPage"
    },
    {
        id: 3,
        iconName: 'users',
        type: 'Feather',
        title: t('myNetwork'),
        navigatePage: "null"
    },
    {
        id: 4,
        iconName: 'favorite-outline',
        type: 'MaterialIcons',
        title: t('myFavorites'),
        navigatePage: "null"
    },
    {
        id: 5,
        iconName: 'bell',
        type: 'Fontisto',
        title: t('notificationSettings'),
        navigatePage: "null"
    },
    {
        id: 6,
        iconName: 'language',
        type: 'MaterialIcons',
        title: t('applicationLanguageAndTheme'),
        navigatePage: "ApplicationLanguageAndThemePage"
    },
    {
        id: 7,
        iconName: 'support',
        type: 'MaterialIcons',
        title: t('helpAndSupport'),
        navigatePage: "null"
    },
    {
        id: 8,
        iconName: 'logout',
        type: 'MaterialCommunityIcons',
        title: t('logOut'),
        navigatePage: "null"
    }
]

export const getThemeOptionsList = () => {
    const { t } = useTranslation()
    return [
        { id: 1, image: sun, title: t('lightMode'), theme: "light" },
        { id: 2, image: moon, title: t('darkMode'), theme: "dark" },
        { id: 3, image: palette, title: t('defaultMode'), theme: "default" }
    ]
}

export const languages = [
    { code: "tr", label: "Turkish", flag: "🇹🇷" },
    { code: "en", label: "English (US)", flag: "🇺🇸" },
    { code: "uk", label: "English (UK)", flag: "🇬🇧" },
    { code: "fr", label: "French", flag: "🇫🇷" },
    { code: "de", label: "German", flag: "🇩🇪" },
    { code: "jp", label: "Japanese", flag: "🇯🇵" },
    { code: "kr", label: "Korean", flag: "🇰🇷" },
    { code: "pt", label: "Portuguese", flag: "🇵🇹" },
    { code: "es", label: "Spanish", flag: "🇪🇸" },
    { code: "ar", label: "Arabic", flag: "🇸🇦" },
    { code: "cn", label: "Chinese", flag: "🇨🇳" },
    { code: "it", label: "Italian", flag: "🇮🇹" }
]
