import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'
import { RadioButton } from 'react-native-paper'
import getStyles from './favoritesFilterSortHeader.style'
import { sortOptions } from 'utils/helper'

type Props = {
    selectedOption: string | null
    onOptionSelect: (option: string) => void
}

// Bu bileşen, favoriler sayfasındaki sıralama ve filtreleme başlıkları için kullanılan menü bileşenidir.
//   Kullanıcı, ürünlerini sıralamak ve filtrelemek için menü seçeneklerine tıklayabilir.
export const FavoritesFilterSortHeader = ({ selectedOption, onOptionSelect }: Props) => {
    const styles = getStyles()
    const { t } = useTranslation()
    const { SlideInMenu } = renderers

    const renderSortOptions = () =>
        sortOptions.map((option, index) => (
            <MenuOption key={index} onSelect={() => onOptionSelect(option)}>
                <View style={styles.themeItem}>
                    <RadioButton
                        value={option}
                        status={selectedOption === option ? 'checked' : 'unchecked'}
                        color={selectedOption === option ? 'red' : '#858585'}
                    />
                    <Text style={styles.sortOptionText}>{t(option)}</Text>
                </View>
            </MenuOption>
        ))

    return (
        <View style={styles.filterSortContainer}>
            <Menu renderer={SlideInMenu}>
                <MenuTrigger>
                    <View style={styles.filterSortButton}>
                        <Icon name="sort" type="FontAwesome6" style={styles.filterIcon} />
                        <Text style={styles.filterText}> {t('sortBy')} </Text>
                    </View>
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                    <Text style={styles.titleText}>{t('sortBy')}</Text>
                    <Icon name="close-a" type="Fontisto" style={styles.closeIcon} />
                    {renderSortOptions()}
                </MenuOptions>
            </Menu>
            <Text style={styles.separator}>|</Text>
            <Menu renderer={SlideInMenu}>
                <MenuTrigger>
                    <View style={styles.filterSortButton}>
                        <Icon name="filter" type="FontAwesome" style={styles.filterIcon} />
                        <Text style={styles.filterText}> {t('filter')}</Text>
                    </View>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => Alert.alert(`Save`)} text="Save" />
                    <MenuOption onSelect={() => Alert.alert(`Delete`)}>
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => Alert.alert(`Not called`)} disabled text="Disabled" />
                </MenuOptions>
            </Menu>
        </View>
    )
}
export default FavoritesFilterSortHeader
