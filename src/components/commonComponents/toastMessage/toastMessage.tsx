import Toast from 'react-native-toast-message'

interface IToastMessage {
    type?: 'success' | 'error' | 'info'
    title: string
    message: string
    text1Style?: any
    text2Style?: any
}

// ToastMessage, bu component uygulamada kullanılan uyarı, bilgi veya hata mesajları gibi bildirimleri gösterilmesi için kullanılan bileşendir.
export const ToastMessage = ({
    type = 'info',
    title,
    message,
    text1Style,
    text2Style,
}: IToastMessage) => {
    Toast.show({
        type,
        text1: title,
        text2: message,
        text1Style,
        text2Style,
    })
}
