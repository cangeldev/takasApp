import React from 'react'
import { ActivitySummary, AdvertisementBanner, HeaderBar, SettingsOptionList, UserProfileInfo } from './components'

/*
  ProfileScreen, kullanıcı profilinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini ve istatistiklerini gösterirken, aynı zamanda profil aktiviteleri 
  ve kullanıcı ayarları gibi özellikleri de sunmaktadır. 
  kullanıcıların profilini güncelleyebilmesi, istatistiklerini takip edebilmesi ve hesap ayarlarını düzenleyebilmesi için gerekli tüm özellikleri içerir.
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