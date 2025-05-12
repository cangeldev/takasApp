import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Icon } from 'components/commonComponents'
import images from 'assets/index'
import getStyles from './headerSection.style'
import ProfileImageSection from '../profileImageSection/profileImageSection'
import MemberInfoSection from '../memberInfoSection/memberInfoSection'
import { useNavigation } from '@react-navigation/native'

/*
  Bu bileşen, profil sayfasının üst kısmında yer alan başlık bölümünü oluşturur.
  Arka plan olarak bir görsel kullanır, geri dönüş simgesi içerir ve kullanıcıya ait profil fotoğrafı ile üyelik bilgilerini göstermek için ilgili alt bileşenleri (`ProfileImageSection`, `MemberInfoSection`) barındırır.
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
