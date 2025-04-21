import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import colors from 'assets/colors/colors'
import getStyles from './nameVisibilitySectionComponent.style'

const data = [
    { label: 'Can GEL' },
    { label: 'Can G.' }
]

/*
  NameVisibilitySectionComponent, bu yapı kullanıcının uygulama içinde hangi isimle görüneceğini seçebileceği bir radio-buttons yapısıdır.
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
            deactiveColor={colors.bottomTabIconInactiveColor}
            boxStyle={style.boxStyle}
            data={data}
            selectedBtn={(e: any) => console.log(e)}
        />
    )
}