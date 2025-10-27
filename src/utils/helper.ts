import images from 'assets/index'

/**
 * MemberInfoTexts: Üye profilinde (örneğin, UserProfileInfo bileşeninde) kullanıcının doğrulama durumu ve üyelik süresi gibi temel bilgileri listelemek için kullanılan sabit metin ve ikon listesidir.
 * Her bir nesne, bir ikon adı (icon) ve bu bilgiyi temsil eden bir çeviri anahtarı (text) içerir.
 */
export const MemberInfoTexts = [
    { icon: 'check-square', text: 'phoneNnumberVerified' },
    { icon: 'calendar', text: 'youSignedUpMonthAgo' }
]

/**
 * userName: Uygulama içinde kullanıcı adının farklı gösterimlerini (tam ad, kısaltılmış ad vb.) temsil eden basit etiket listesidir.
 * Şu an için örnek kullanıcı adlarını içerir.
 */
export const userName = [
    { label: 'Can GEL' },
    { label: 'Can G.' }
]

/**
 * sortOptions: Ürün listeleme ekranlarında (örneğin, FavoriteProductsSection) kullanıcıya sunulan tüm sıralama seçeneklerinin çeviri anahtarlarını içeren dizedir.
 * Bu seçenekler, ürünlerin görüntülenme sırasını (fiyat, tarih, popülarite, mesafe) değiştirmek için kullanılır.
 */
export const sortOptions = [
    'recommended',
    'lowestPrice',
    'highestPrice',
    'newest',
    'topFavorites',
    'distance',
    'publishedDate',

]

/**
 * socials: Giriş/Kayıt ekranlarında sosyal medya ile hızlı giriş yapmak için kullanılan platformların ikon kaynaklarını ve benzersiz kimliklerini (id) içeren dizidir.
 * Şu an için Facebook, Google ve Apple seçeneklerini içerir.
 */
export const socials = [
    { id: "facebook", icon: images.login.facebook },
    { id: "google", icon: images.login.google },
    { id: "apple", icon: images.login.apple },
]

/**
 * ProfileSettingsOptionsList: Profil Ekranında (ProfileScreen), kullanıcıya sunulan tüm hesap ayarı seçeneklerini tanımlayan, ikon, başlık ve navigasyon rotası (navigatePage) bilgilerini içeren sabit listedir.
 * Bu veri, SettingsOptionList bileşeni tarafından render edilir ve kullanıcıyı ilgili ayar sayfalarına yönlendirir.
 */
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
        navigatePage: "Welcome"
    }
] as const;

/**
 * ThemeOptionsList: Uygulamanın tema (görünüm modu) ayarları sayfasında kullanıcılara sunulan tema seçeneklerini (Açık, Koyu, Varsayılan) tanımlayan listedir.
 * Her bir tema için bir görsel (image), çeviri anahtarı (title) ve tema kodu (theme) içerir.
 */
export const ThemeOptionsList =
    [
        { id: 1, image: images.other.sun, title: 'lightMode', theme: "light" },
        { id: 2, image: images.other.moon, title: 'darkMode', theme: "dark" },
        { id: 3, image: images.other.palette, title: 'defaultMode', theme: "default" }
    ]

/**
 * languages: Uygulamanın dil ayarları ekranında kullanıcıya sunulan tüm dil seçeneklerini (kodu, etiketi ve bayrak emojisi ile birlikte) içeren sabit listedir.
 * Bu veri, i18n sisteminin dil değiştirme işlevselliği için kullanılır.
 */
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

/**
 * notificationSettingsOptions: Bildirim Ayarları sayfasında (NotificationSettingsPage) listelenen, her bir bildirim türünün (e-posta, push, yorum, teklif vb.) ayarlarını yönetmek için kullanılan sabit seçenek listesidir.
 * Her bir seçenek, benzersiz anahtar (key), çeviri anahtarı (label) ve ilgili ikonu (icon) içerir.
 */
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

/**
 * Faqs: Sıkça Sorulan Sorular (SSS) bölümünde (FaqSection) gösterilecek olan soru-cevap çiftlerini içeren listedir.
 * Her bir nesne, sorunun çeviri anahtarını (q) ve cevabın çeviri anahtarını (a) içerir.
 */
export const Faqs = [
    { q: 'howToTrade', a: 'howToTradeDesc' },
    { q: 'problemSolution', a: 'problemSolutionDesc' },
    { q: 'isSafeTrade', a: 'isSafeTradeDesc' }
]

/**
 * recommenedList: Uygulama içinde kullanıcılara önerilen ürünleri veya favori listesi boşken gösterilen ürünleri temsil eden statik veri setidir.
 * Her bir ürün için temel görsel, açıklama ve fiyat bilgisi (price) içerir.
 */
export const recommenedList = [
    { id: 1, image: images.other.gradient, description: "descriptiondescription descriptiosddn", price: 1881 },
    { id: 2, image: images.other.gradient, description: "description", price: 190 },
    { id: 3, image: images.other.gradient, description: "description description description description description description description", price: 23 },
    { id: 4, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1 }
]

/**
 * followingUsers: Kullanıcının takip ettiği kişileri temsil eden statik kullanıcı listesidir.
 * Her bir öğe, kullanıcı kimliği (id), adı (name) ve avatar görseli (avatar) içerir. MyNetworkPage gibi alanlarda kullanılır.
 */
export const followingUsers = [
    { id: '1', name: 'Mücahit ASLANHAN', avatar: images.profile.defaultProfileImage },
    { id: '2', name: 'Nata Vega Ankara', avatar: images.profile.defaultProfileImage },
    { id: '3', name: 'otoplus Kullanıcısı', avatar: images.profile.defaultProfileImage },
    { id: '4', name: 'Nazmi Budak', avatar: images.profile.defaultProfileImage },
    { id: '5', name: 'SEVER_444', avatar: images.profile.defaultProfileImage },
    { id: '6', name: 'Halil.', avatar: images.profile.defaultProfileImage },
    { id: '7', name: 'asd Kullanıcısı', avatar: images.profile.defaultProfileImage }
]

/**
 * followerUsers: Kullanıcının takipçilerini temsil eden statik kullanıcı listesidir.
 * Her bir öğe, kullanıcı kimliği (id), adı (name) ve avatar görseli (avatar) içerir. MyNetworkPage gibi alanlarda kullanılır.
 */
export const followerUsers = [
    { id: '1', name: 'otoplus ASLANHAN', avatar: images.profile.defaultProfileImage },
    { id: '2', name: 'Kullanıcısı Vega Ankara', avatar: images.profile.defaultProfileImage },
    { id: '3', name: 'Kullanıcısı', avatar: images.profile.defaultProfileImage },
    { id: '4', name: 'Halil Budak', avatar: images.profile.defaultProfileImage },
    { id: '5', name: 'SEVER_444', avatar: images.profile.defaultProfileImage },
    { id: '6', name: 'Halil.', avatar: images.profile.defaultProfileImage },
]

/**
 * productList: Uygulamanın ana sayfasında (HomeScreen) veya kategori listelemelerinde gösterilen genişletilmiş ürün listesi için kullanılan statik veri setidir.
 * Her bir ürün için görsel, açıklama, güncel fiyat (price), varsa eski fiyat (oldPrice), beğeni sayısı (likes) ve takas edilebilir olup olmadığı (swap) gibi detaylı bilgileri içerir.
 */
export const productList = [
    { id: 1, image: images.other.gradient, description: "descriptiondescription descriptiosddn", price: 1881, oldPrice: 0, likes: 0, swap: true },
    { id: 2, image: images.other.gradient, description: "description", price: 0, oldPrice: 10, likes: 3, swap: true },
    { id: 3, image: images.other.gradient, description: "description description description description description description description", price: 23, oldPrice: 0, likes: 10 },
    { id: 4, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 5, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 6, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 7, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 8, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 9, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 },
    { id: 10, image: images.other.gradient, description: "saf dfs sdf sdfsg", price: 1, oldPrice: 100, likes: 200 }
]