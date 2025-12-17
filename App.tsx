import React, { useEffect, useState } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import { Provider, useDispatch } from 'react-redux'
import { AppStatusBar } from 'components/commonComponents'
import { store } from 'store/store'
import i18n from 'localization/i18next'
import { MenuProvider } from 'react-native-popup-menu'
import { initializeApp } from 'utils/initializeApp'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RootStackParamList } from 'utils/types'
import { api } from 'api/apiClient'
import { logout, setUser } from 'store/slices/authSlice'

/**
 * App bileşeni: Uygulamanın ana başlatma mantığını (tema/dil yükleme) ve i18n sağlayıcısını içerir.
 * Bu bileşen Redux Provider'ın altındadır, bu yüzden useDispatch'i kullanabilir.
 */
const App = () => {
  const dispatch = useDispatch()
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null)

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await initializeApp(dispatch);

        const token = await AsyncStorage.getItem("userToken");
        console.log("APP AÇILIŞ TOKEN:", token);

        if (!token) {
          setInitialRoute("Welcome");
          return;
        }

        const res = await api.get("/users/me");
        dispatch(setUser(res.data));

        setInitialRoute("AppTabs");
      } catch (error: any) {
        console.log("AUTH ME ERROR:", error?.message);

        // 🔴 SADECE 401 / 403 İSE LOGOUT
        if (error?.response?.status === 401 || error?.response?.status === 403) {
          await AsyncStorage.removeItem("userToken");
          dispatch(logout());
          setInitialRoute("Welcome");
        } else {
          setInitialRoute("AppTabs");
        }
      }
    };

    prepareApp();
  }, [dispatch]);


  if (initialRoute === null) {
    return null
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Container initialRoute={initialRoute} />
    </I18nextProvider>
  )
}

const Root = () => (
  <Provider store={store}>
    <MenuProvider>
      <AppStatusBar />
      <App />
      <Toast topOffset={10} />
    </MenuProvider>
  </Provider>
)

export default Root