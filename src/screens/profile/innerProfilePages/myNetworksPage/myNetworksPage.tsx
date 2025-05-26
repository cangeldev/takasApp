import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import getStyles from './myNetworksPage.style'
import { EmptyListComponent, FollowItemCard } from './components'
import { followerUsers, followingUsers } from 'utils/helper'
import { useTranslation } from 'react-i18next'

type Route = {
    key: string
    title: string
}

/*
  `MyNetworksPage`, kullanıcının takip ettiği ve takipçilerinin görüntülenmesi için kullanacağı istediği kişileri listeden çıkarabilmesi için tasarlanmış bileşendir. 
   TabView içerisinde 2 sayfa olarak hem takiğçi hemde takip edilenlerin bilgilerini bir resim ve kullanıcı bilgileriyle birlikte görsel olarak listeler.
*/
export const MyNetworksPage = () => {
    const styles = getStyles()
    const layout = useWindowDimensions()
    const { t } = useTranslation()
    const [index, setIndex] = useState(0)
    const [routes] = useState<Route[]>([
        { key: 'following', title: t('following') },
        { key: 'followers', title: t('followers') },
    ])

    const FollowingRoute = () => (
        <FlatList
            data={followingUsers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <FollowItemCard image={item.avatar} name={item.name} activeTab="following" />
            )}
            ListEmptyComponent={<EmptyListComponent text={t('youDontHaveAnyFollowersYet')} />}
        />
    )

    const FollowersRoute = () => (
        <FlatList
            data={followerUsers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <FollowItemCard image={item.avatar} name={item.name} activeTab="followers" />
            )}
            ListEmptyComponent={<EmptyListComponent text={t('youHaventFollowedAnyoneYet')} />}
        />
    )

    const renderScene = SceneMap({
        following: FollowingRoute,
        followers: FollowersRoute,
    })

    const renderTabBar = () => (
        <View style={styles.tabContainer}>
            {routes.map((route, i) => (
                <TouchableOpacity
                    key={route.key}
                    style={[styles.tab, index === i && styles.activeTab]}
                    onPress={() => setIndex(i)}
                >
                    <Text style={[styles.tabText, index === i && styles.activeTabText]}>
                        {route.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )

    return (
        <View style={styles.container}>
            {renderTabBar()}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null}
            />
        </View>
    )
}
