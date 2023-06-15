import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $18',

  [`${Heading}`]: {
    '@media(max-width: 680px)': {
      fonSize: '$6xl',
    },
  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingLeft: '$8',
  overflow: 'hidden',

  '@media(max-width: 680px)': {
    display: 'none',
  },
})
