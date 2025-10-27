import { View, Text } from 'react-native'
import React from 'react'
import { Icon, SearchBar } from 'components/commonComponents'
import getStyles from './headerSection.style'

/**
 * HeaderSection: Ana Ekranın (HomeScreen) en üst kısmında yer alan, uygulamanın markasını, kullanıcının konum bilgisini ve temel navigasyon butonlarını (sepet, bildirimler) içeren sabit başlık ve arama çubuğu bileşenidir.
 *
 * 1. Üst Bölüm (headerContainer): Uygulama adını (Takasla) gösterir. Kullanıcının mevcut adresini ('Düzce,Düzce') bir konum ikonu ve aşağı ok ikonu ile birlikte sunar; bu kısım, konum seçme/değiştirme işlevini tetikler. Ayrıca, kullanıcının sepetine ('shopping-outline') ve bildirimler ('bell') ekranına gitmesini sağlayan butonları içerir.
 * 2. Alt Bölüm: Ürün araması için kullanılan SearchBar bileşenini içerir.
 * Bu bileşen, kullanıcının uygulama içinde gezinmesi ve arama yapması için merkezi bir kontrol noktası sağlar.
 */
export const HeaderSection = () => {
    const styles = getStyles()
   
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.appTitleText}>Takasla</Text>
                <View style={styles.addressContainer}>
                    <Icon name='location' type='Entypo' style={styles.locationIcon} />
                    <Text style={styles.locationText}>
                        Düzce,Düzce
                    </Text>
                    <Icon name='chevron-down' type='FontAwesome5' style={styles.downIcon} />
                </View>
                <Icon name='shopping-outline' type='MaterialCommunityIcons' style={styles.iconButton} />
                <Icon name='bell' type='Fontisto' style={styles.iconButton} />
            </View>
            <SearchBar />
        </View>
    )
}