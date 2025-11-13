import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from 'navigation/index'
import { RootStackParamList } from 'utils/types'

interface ContainerProps {
  initialRoute: keyof RootStackParamList
}

export const Container: React.FC<ContainerProps> = ({ initialRoute }) => {
  return (
    <NavigationContainer>
      <AppStack initialRoute={initialRoute} />
    </NavigationContainer>
  )
}
