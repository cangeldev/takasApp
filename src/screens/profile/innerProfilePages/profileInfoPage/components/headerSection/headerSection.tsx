import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Icon } from 'components/commonComponents'
import images from 'assets/index'
import getStyles from './headerSection.style'
import ProfileImageSection from '../profileImageSection/profileImageSection'
import MemberInfoSection from '../memberInfoSection/memberInfoSection'
import { useNavigation } from '@react-navigation/native'

/**
 * HeaderSection: Profil sayfasının en üst bölümünü oluşturan, görsel bir arka plan kullanan ve kullanıcının temel profil bilgilerini sergileyen bileşendir.
 *
 * Arka planda bir görsel (ImageBackground) kullanarak estetik bir görünüm sağlar.
 * Önceki ekrana dönme işlevini sağlayan bir geri butonu (Icon) içerir.
 * Ayrıca, kullanıcının profil fotoğrafını (ProfileImageSection) ve üyelik ad, soyad/kullanıcı adı gibi bilgileri (MemberInfoSection) göstermek için alt bileşenleri organize eder.
 * Bu bölüm, kullanıcının profile ilk bakışta kendisini tanımlamasını amaçlar.
 */
export const HeaderSection = () => {
    const styles = getStyles()
    const navigation = useNavigation()
    
    return (
        <ImageBackground source={images.other.gradient} style={styles.headerBackground}>
            <Icon onPress={() => navigation.goBack()} name="chevron-left" type="Entypo" style={styles.backIcon} />
            <View style={styles.profileSection}>
                <ProfileImageSection />
                <MemberInfoSection />
            </View>
        </ImageBackground>
    )
}
export default HeaderSection
