import '@tamagui/core/reset.css'

import { Button, TamaguiProvider, Text, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import config from './tamagui.config'

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <YStack f={1} ai="center" jc="center">
        <Button>Hello world</Button>
        <Text>Hello from hell</Text>
        <LinearGradient zIndex={-1} fullscreen colors={['pink', 'blue']} />
      </YStack>
    </TamaguiProvider>
  )
}
