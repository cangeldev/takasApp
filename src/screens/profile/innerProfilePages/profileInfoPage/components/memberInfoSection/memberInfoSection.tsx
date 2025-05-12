import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { MemberInfoTexts } from 'utils/helper'
import { Icon } from 'components/commonComponents'
import getStyles from './memberInfoSection.style'

/*
  Bu bileşen, üyelik bilgilerini simgelerle birlikte yatay bir satırda listeleyen bir arayüz sunar.
  Veriler `MemberInfoTexts` adlı yardımcı yapıdan alınır; her bilgi bir ikon ve çeviri destekli metinle birlikte görüntülenir.
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
