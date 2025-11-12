// Uygulamanın kullanacağı tema seçenekleri
export type Theme = 'light' | 'dark' | 'default'

// Uygulamanın kullanacağı dil seçenekleri
export type Language = 'tr' | 'en' | 'uk' | 'fr' | 'de' | 'jp' | 'kr' | 'pt' | 'es' | 'ar' | 'cn' | 'it'

// kayıt olan kullanıcıların bilgileri 
export type UserInfo = {
    email: string,
    password: string,
    username: string,
    name: string,
    surname: string,
    phoneNumber: string,
    city: string,
    district: string,
    profileImage: string
}

// userName dizisinin öğe tipi
export type UserNameOption = { label: string }

export type RootStackParamList = {
    // Auth & Giriş Ekranları
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    AccountDetails: undefined;

    // Ana Uygulama Sekmeleri (Tabs)
    AppTabs: undefined;

    // Profil İç Ekranları
    ProfileInfoPage: undefined;
    LanguageThemePage: undefined;
    AddressPage: undefined;
    NotificationSettingsPage: undefined;
    HelpAndSupportPage: undefined;
    FavoritesPage: undefined;
    MyNetworksPage: undefined;

    // Ürün Detay Ekranı
    ProductDetailsCard: undefined;
}

export type RootTabParamList = {
    Home: undefined;
    Search: undefined;
    ProductAdd: undefined;
    MyAds: undefined;
    Profile: undefined;
}

export type iconType =
    | "AntDesign"
    | "Octicons"
    | "Ionicons"
    | "Fontisto"
    | "Feather"
    | "FontAwesome6"
    | "MaterialIcons"
    | "Entypo"
    | "EvilIcons"
    | "FontAwesome"
    | "MaterialCommunityIcons"
    | "FontAwesome5"