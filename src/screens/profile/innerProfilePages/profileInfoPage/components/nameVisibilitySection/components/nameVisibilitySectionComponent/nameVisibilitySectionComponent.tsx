import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import { colors } from 'assets/colors/colors'
import getStyles from './nameVisibilitySectionComponent.style'
import { userName } from 'utils/helper'
import { UserNameOption } from 'utils/types'

/**
 * NameVisibilitySectionComponent: Kullanıcının, profilinde veya ilanlarında gösterilecek isim formatını (örneğin, "Ad Soyad" veya "Kullanıcı Adı") seçmesini sağlayan özel bir radyo buton grubudur.
 *
 * 'radio-buttons-react-native' kütüphanesini kullanarak kullanıcıya seçenekleri (userName dizisi) sunar.
 * Kullanıcı seçim yaptığında (selectedBtn), ilgili bilgiyi konsola loglar (gerçek uygulamada bu, Redux'a kaydedilmelidir).
 * Bu bileşen, isim görünürlüğü gizlilik ayarının ana etkileşim noktasını oluşturur.
 */

export const NameVisibilitySectionComponent = () => {
    const style = getStyles()

    const handleSelection = (selectedOption: UserNameOption) => {
        console.log(selectedOption)
    }

    return (
        <RadioButtonRN
            textStyle={style.textStyle}
            initial={1}
            circleSize={14}
            box={false}
            activeColor={"#02A598"}
            deactiveColor={colors.tab.inactive}
            boxStyle={style.boxStyle}
            data={userName}
            selectedBtn={handleSelection}
        />
    )
}