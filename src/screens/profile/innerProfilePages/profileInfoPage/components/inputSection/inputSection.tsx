import React, { useEffect, useRef, useState } from 'react'
import { Alert, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './inputSection.style'
import { ProfileInfoPageTxtInput } from './components/profileInfoPageTxtInput/profileInfoPageTxtInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { updateDescription } from 'store/slices/authSlice'
import { api } from 'api/apiClient'

/**
 * InputSection: Kullanıcının kendi profil bilgilerini (kullanıcı adı, ad, soyad, şifre ve kişisel açıklama) görüntülemesini ve düzenlemesini sağlayan metin giriş alanları grubudur.
 *
 * `ProfileInfoPageTxtInput` bileşeni kullanılarak standartlaştırılmış bir giriş deneyimi sunar.
 * Temel kişisel bilgiler (username, name, surname) doğrudan düzenlenebilirken, şifre alanı (password) düzenlenemez (editable={false}) ancak kullanıcıyı şifre değiştirme ekranına yönlendirecek bir ikon (chevron-right) içerir.
 * Ayrıca, kullanıcıya kendisi hakkında bilgi ekleyebileceği çok satırlı (multiline) bir açıklama (description) alanı sunar. Tüm başlıklar çeviri (i18n) desteklidir.
 */

export const InputSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authInfo = useSelector((state: RootState) => state.auth)
    const debounceRef = useRef<NodeJS.Timeout | null>(null)

    const formatPhoneNumber = (phone?: string) => {
        if (!phone) return ''

        const match = phone.match(/(\d{3})(\d{3})(\d{4})$/)

        if (!match) return phone

        const [, first, second, third] = match
        return `(${first}) ${second}-${third}`
    }
    const formattedPhone = formatPhoneNumber(authInfo.user?.phoneNumber)

    const [description, setDescription] = useState(
        authInfo.user?.description ?? ''
    )

    useEffect(() => {
        setDescription(authInfo.user?.description ?? '')
    }, [authInfo.user?.description])

    const fields = [
        { key: 'username', value: authInfo.user?.username },
        { key: 'name', value: authInfo.user?.name },
        { key: 'surname', value: authInfo.user?.surname },
    ]

    const handleDescriptionChange = (text: string) => {
        setDescription(text)
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(async () => {
            try {
                const res = await api.patch('/users/update-profile', {
                    description: text,
                })

                dispatch(updateDescription(res.data.description))
                console.log('Description autosave edildi')
            } catch (error) {
                Alert.alert('Hata', 'Açıklama kaydedilemedi')
            }
        }, 800)
    }

    return (
        <View style={styles.inputSection}>

            {fields.map(({ key, value }) => (
                <ProfileInfoPageTxtInput
                    key={key}
                    title={t(key)}
                    value={value ?? ''}
                    editable={false} />
            ))}

            <ProfileInfoPageTxtInput
                title={t('password')}
                placeHolder="******"
                iconName="chevron-right"
                iconType="Entypo"
                editable={false}
                changeInfo={false} />

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.countryCode}>
                    <ProfileInfoPageTxtInput
                        title={t('countryCode')}
                        placeHolder="+90"
                        editable={false}
                    />
                </View>
                <View style={styles.phoneNumber}>
                    <ProfileInfoPageTxtInput
                        title={t('phoneNumber')}
                        iconName="chevron-right"
                        iconType="Entypo"
                        editable={false}
                        value={formattedPhone}
                        changeInfo={true}
                    />
                </View>
            </View>
            <ProfileInfoPageTxtInput
                multiline
                title={t('description')}
                editable
                value={description}
                onInputChange={handleDescriptionChange}
                placeHolder={t("youCanWriteSomethingAboutYourself")} />
        </View>
    )
}

export default InputSection
