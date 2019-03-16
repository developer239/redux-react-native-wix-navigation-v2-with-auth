import { useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import { NavigationButtonPressedEvent } from 'react-native-navigation/lib/src/interfaces/ComponentEvents'

const useButtonListener = (callback: (event: NavigationButtonPressedEvent) => void) => {
  useEffect(() => {
    Navigation
      .events()
      .registerNavigationButtonPressedListener(callback)
  }, [])
}

export default useButtonListener
