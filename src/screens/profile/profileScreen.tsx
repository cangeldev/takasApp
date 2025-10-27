import React from 'react'
import { ActivitySummary, AdvertisementBanner, HeaderBar, SettingsOptionList, UserProfileInfo } from './components'

/**
 * ProfileScreen: Uygulama kullanıcısının kişisel bilgilerini, aktivitelerini, istatistiklerini ve tüm hesap ayarları seçeneklerini bir arada sunduğu ana ekran bileşenidir.
 *
 * Bu ekran, kullanıcının profilini yönetmesi, güncel istatistiklerini (ActivitySummary) görmesi, sistemden gelen duyuruları (AdvertisementBanner) izlemesi ve uygulamanın çeşitli ayarlarına (SettingsOptionList) kolayca erişmesi için bir merkez görevi görür.
 *
 * Bileşenlerin sırası:
 * 1. HeaderBar: Profil ekranı başlığını ve navigasyon/ayarlar ikonlarını içerir.
 * 2. UserProfileInfo: Kullanıcının temel profil görselini ve kişisel bilgilerini gösterir.
 * 3. ActivitySummary: Kullanıcının ilan, takipçi, beğeni gibi temel uygulama istatistiklerinin özetini sunar.
 * 4. AdvertisementBanner: Kullanıcıya yönelik bilgilendirme veya reklam banner'ı gösterir.
 * 5. SettingsOptionList: Hesap, gizlilik, bildirimler gibi çeşitli ayarlara yönlendiren liste seçeneklerini sunar.
 */
export const ProfileScreen = () => {

    return (
        <>
            <HeaderBar />
            <UserProfileInfo />
            <ActivitySummary />
            <AdvertisementBanner />
            <SettingsOptionList />
        </>
    )
}