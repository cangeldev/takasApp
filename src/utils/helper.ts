import { gradient, moon, palette, sun } from 'assets/index'
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
        navigatePage: "FavoritesPage"
    },
    {
        id: 5,
        iconName: 'bell',
        type: 'Fontisto',
        title: t('notificationSettings'),
        navigatePage: "NotificationSettingsPage"
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
        navigatePage: "HelpAndSupportPage"
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

export const notificationSettingsOptions = [
    { key: "pushNotifications", label: t('GeneralNotifications'), icon: "notifications" },
    { key: "emailNotifications", label: t('emailNotifications'), icon: "mail" },
    { key: "commentNotifications", label: t('whenCommentisMadeOnProduct'), icon: "chatbubble-ellipses" },
    { key: "offerNotifications", label: t('whenOfferMadeProduct'), icon: "pricetag" },
    { key: "campaignNotifications", label: t('campaignNotifications'), icon: "megaphone" },
    { key: "sentOfferNotifications", label: t('notificationsOffersYouSent'), icon: "send" },
    { key: "receivedOfferNotifications", label: t('offersMadeYourProducts'), icon: "cart" },
    { key: "favoriteListingsNotifications", label: t('favoriteListings'), icon: "heart" },
    { key: "smsNotifications", label: t('receiveSMSNotifications'), icon: "chatbox" },
    { key: "campaignCalls", label: t('receiveCallsRelatedCampaigns'), icon: "call" }
]

export const faqList = [
    { q: t('howToTrade'), a: t('howToTradeDesc') },
    { q: t('problemSolution'), a: t('problemSolutionDesc') },
    { q: t('isSafeTrade'), a: t('isSafeTradeDesc') }
]

export const recommenedList = [
    { id: 1, image: gradient, description: "descriptiondescription description", price: "1881" },
    { id: 2, image: gradient, description: "description", price: "190" },
    { id: 3, image: gradient, description: "description description description", price: "23" },
    { id: 4, image: gradient, description: "saf dfs sdf sdfsg", price: "1" },
]
