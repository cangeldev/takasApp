import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { MemberInfoTexts } from 'utils/helper'
import { Icon } from 'components/commonComponents'
import getStyles from './memberInfoSection.style'

/**
 * MemberInfoSection: Kullanıcının profil sayfasında yer alan, üyelikle ilgili temel istatistikleri (örneğin, takipçi sayısı, ilan sayısı, değerlendirme puanı gibi) ikonlarla birlikte gösteren yatay bir liste bileşenidir.
 *
 * `MemberInfoTexts` yardımcı yapısından alınan her bir bilgi öğesi için bir ikon ve çeviri destekli metin (t(text)) gösterir.
 * Bu bölüm, kullanıcının uygulama içindeki aktivitelerine dair özet bir bakış sunar.
 */
export const MemberInfoSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.memberInfoRow}>
            {MemberInfoTexts.map(({ icon, text }, index) => (
                <Text key={index} style={styles.memberInfoText}>
                    <Icon name={icon} type="Feather" style={styles.memberInfoIcon} /> {t(text)}
                </Text>
            ))}
        </View>
    )
}

export default MemberInfoSection
