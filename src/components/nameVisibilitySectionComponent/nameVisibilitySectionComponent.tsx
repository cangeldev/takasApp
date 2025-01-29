import React from 'react'
import style from './style'
import RadioButtonRN from 'radio-buttons-react-native'
import colors from 'assets/colors/colors'

const data = [
    { label: 'Can GEL' },
    { label: 'Can G.' }
]

export const NameVisibilitySectionComponent = () => {
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