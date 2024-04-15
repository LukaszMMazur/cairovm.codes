import { useContext } from 'react'

import {
  RiFullscreenExitFill,
  RiFullscreenExitLine,
  RiFullscreenFill,
  RiFullscreenLine,
} from '@remixicon/react'
import { Action, Priority, useRegisterActions } from 'kbar'
import { useTheme } from 'next-themes'

import { AppUiContext } from 'context/appUiContext'

import { Button } from 'components/ui'

const ToggleFullScreen = () => {
  const { isFullScreen, toggleFullScreen } = useContext(AppUiContext)

  const { resolvedTheme } = useTheme()

  const actions: Action[] = [
    {
      id: 'fullscreen',
      name: 'Full Screen',
      shortcut: ['f'],
      keywords: 'full screen',
      section: 'Preferences',
      subtitle: 'Enter / Exit Full Screen',
      perform: () => {
        toggleFullScreen()
      },
      priority: Priority.LOW,
    },
  ]

  useRegisterActions(actions, [actions])

  const handleToggleFullScreen = () => {
    toggleFullScreen()
  }

  let FullScreenIcon
  if (isFullScreen) {
    FullScreenIcon =
      resolvedTheme === 'dark' ? RiFullscreenExitFill : RiFullscreenExitLine
  } else {
    FullScreenIcon =
      resolvedTheme === 'dark' ? RiFullscreenFill : RiFullscreenLine
  }

  return (
    <Button
      transparent
      onClick={handleToggleFullScreen}
      tooltip={`${isFullScreen ? 'Exit' : 'Enter'} Full Screen`}
      tooltipId="toggle-fullscreen"
      className="px-2 md:px-4"
    >
      <FullScreenIcon
        size={16}
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      />
    </Button>
  )
}

export default ToggleFullScreen
