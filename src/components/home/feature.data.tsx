import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import BuildIcon from '@mui/icons-material/Build'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Free biaya sewa alat',
    description: 'Dapatkan Promo Free biaya sewa alat selama berlangganan',
    icon: <MoneyOffIcon />,
  },
  {
    title: 'Harga Terjangkau',
    description: 'Harga Terjangkau mulai dari 125.000 / bulan',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Unlimited',
    description: 'Unlimited tanpa batas kuota',
    icon: <RssFeedIcon />,
  },
  {
    title: 'Free biaya Maintenance',
    description: 'Bebas biaya perbaikan selama berlangganan',
    icon: <BuildIcon />,
  },
]
