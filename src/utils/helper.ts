import images from 'assets/index'

export const MemberInfoTexts = [
    { icon: 'check-square', text: 'phoneNnumberVerified' },
    { icon: 'calendar', text: 'youSignedUpMonthAgo' }
]

export const userName = [
    { label: 'Can GEL' },
    { label: 'Can G.' }
]

export const sortOptions = [
    'recommended',
    'lowestPrice',
    'highestPrice',
    'newest',
    'topFavorites',
    'distance',
    'publishedDate',

]

export const ProfileSettingsOptionsList = [
    {
        id: 1,
        iconName: 'user',
        type: 'Feather',
        title: 'personalInformation',
        navigatePage: "ProfileInfoPage"
    },
    {
        id: 2,
        iconName: 'location',
        type: 'Octicons',
        title: 'addressAndLocationInformation',
        navigatePage: "AddressPage"
    },
    {
        id: 3,
        iconName: 'users',
        type: 'Feather',
        title: 'myNetwork',
        navigatePage: "MyNetworksPage"
    },
    {
        id: 4,
        iconName: 'favorite-outline',
        type: 'MaterialIcons',
        title: 'myFavorites',
        navigatePage: "FavoritesPage"
    },
    {
        id: 5,
        iconName: 'bell',
        type: 'Fontisto',
        title: 'notificationSettings',
        navigatePage: "NotificationSettingsPage"
    },
    {
        id: 6,
        iconName: 'language',
        type: 'MaterialIcons',
        title: 'applicationLanguageAndTheme',
        navigatePage: "LanguageThemePage"
    },
    {
        id: 7,
        iconName: 'support',
        type: 'MaterialIcons',
        title: 'helpAndSupport',
        navigatePage: "HelpAndSupportPage"
    },
    {
        id: 8,
        iconName: 'logout',
        type: 'MaterialCommunityIcons',
        title: 'logOut',
        navigatePage: "null"
    }
]

export const ThemeOptionsList =
    [
        { id: 1, image: images.other.sun, title: 'lightMode', theme: "light" },
        { id: 2, image: images.other.moon, title: 'darkMode', theme: "dark" },
        { id: 3, image: images.other.palette, title: 'defaultMode', theme: "default" }
    ]


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
    { key: "pushNotifications", label: 'generalNotifications', icon: "notifications" },
    { key: "emailNotifications", label: 'emailNotifications', icon: "mail" },
    { key: "commentNotifications", label: 'whenCommentisMadeOnProduct', icon: "chatbubble-ellipses" },
    { key: "offerNotifications", label: 'whenOfferMadeProduct', icon: "pricetag" },
    { key: "campaignNotifications", label: 'campaignNotifications', icon: "megaphone" },
    { key: "sentOfferNotifications", label: 'notificationsOffersYouSent', icon: "send" },
    { key: "receivedOfferNotifications", label: 'offersMadeYourProducts', icon: "cart" },
    { key: "favoriteListingsNotifications", label: 'favoriteListings', icon: "heart" },
    { key: "smsNotifications", label: 'receiveSMSNotifications', icon: "chatbox" },
    { key: "campaignCalls", label: 'receiveCallsRelatedCampaigns', icon: "call" }
]

export const Faqs = [
    { q: 'howToTrade', a: 'howToTradeDesc' },
    { q: 'problemSolution', a: 'problemSolutionDesc' },
    { q: 'isSafeTrade', a: 'isSafeTradeDesc' }
]

export const recommenedList = [
    { id: 1, image: images.other.gradient, description: "descriptiondescription descriptiosddn", price: 1881 },
    { id: 2, image: images.other.gradient, description: "description", price: 190 },
    { id: 3, image: images.other.gradient, description: "description description description description description description description", price: 23 },
    { id: 4, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1 }
]

export const followingUsers = [
    { id: '1', name: 'Mücahit ASLANHAN', avatar: images.profile.defaultProfileImage },
    { id: '2', name: 'Nata Vega Ankara', avatar: images.profile.defaultProfileImage },
    { id: '3', name: 'otoplus Kullanıcısı', avatar: images.profile.defaultProfileImage },
    { id: '4', name: 'Nazmi Budak', avatar: images.profile.defaultProfileImage },
    { id: '5', name: 'SEVER_444', avatar: images.profile.defaultProfileImage },
    { id: '6', name: 'Halil.', avatar: images.profile.defaultProfileImage },
    { id: '7', name: 'asd Kullanıcısı', avatar: images.profile.defaultProfileImage }
]

export const followerUsers = [
    { id: '1', name: 'otoplus ASLANHAN', avatar: images.profile.defaultProfileImage },
    { id: '2', name: 'Kullanıcısı Vega Ankara', avatar: images.profile.defaultProfileImage },
    { id: '3', name: 'Kullanıcısı', avatar: images.profile.defaultProfileImage },
    { id: '4', name: 'Halil Budak', avatar: images.profile.defaultProfileImage },
    { id: '5', name: 'SEVER_444', avatar: images.profile.defaultProfileImage },
    { id: '6', name: 'Halil.', avatar: images.profile.defaultProfileImage },
]


export const productList = [
    { id: 1, image: images.other.gradient, description: "descriptiondescription descriptiosddn", price: 1881, oldPrice: 0, likes: 0, swap: true },
    { id: 2, image: images.other.gradient, description: "description", price: 0, oldPrice: 10, likes: 3, swap: true },
    { id: 3, image: images.other.gradient, description: "description description description description description description description", price: 23, oldPrice: 0, likes: 10 },
    { id: 4, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 }
]