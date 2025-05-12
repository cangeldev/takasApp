import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import colors from 'assets/colors/colors'
import getStyles from './nameVisibilitySectionComponent.style'
import { userName } from 'utils/helper'

/*
  Bu bileşen, kullanıcının uygulama içerisinde hangi isim formatıyla görüneceğini seçmesini sağlayan bir radyo buton arayüzü sunar.
  Seçenekler sabit bir veri dizisinden alınır ve kullanıcı seçim yaptığında konsola loglanır.
*/
export const NameVisibilitySectionComponent = () => {
    const style = getStyles()

    return (
        <RadioButtonRN
            textStyle={style.textStyle}
            initial={1}
            circleSize={14}
            box={false}
            activeColor={"#02A598"}
            deactiveColor={colors.bottomTabInactive}
            boxStyle={style.boxStyle}
            data={userName}
            selectedBtn={(e: any) => console.log(e)}
        />
    )
}