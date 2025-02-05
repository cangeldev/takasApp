import { useTranslation } from 'react-i18next'
const { t } = useTranslation()

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
        navigatePage: "null"
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
        title:  t('notificationSettings'),
        navigatePage: "null"
    },
    {
        id: 6,
        iconName: 'language',
        type: 'MaterialIcons',
        title:  t('applicationLanguage'),
        navigatePage: "null"
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

