import { View } from 'react-native'
import React from 'react'
import { HeaderSection, ProductListSection } from './components'

/*
  HomeScreen, ürünlerin görüntülendiği ve listelendiği istenilen başlıkta arama yapılabildiğimiz bir ekran bileşenidir.  
  Bu ekran, kullanıcıya ürünleri ve bilgi resimlerini gösteririrken istediğimiz başlık altında ürünleri listelememize olanak tanır.   
*/
export const HomeScreen = () => {
    return (
        <View>
            <HeaderSection />
            <ProductListSection />
        </View>
    )
}
