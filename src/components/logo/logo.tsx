import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      {/* <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        AYN<span>NET</span>
      </Typography> */}
      {/* <img src="/images/LOGO AYN.NET.png" alt="Headline curve" /> */}
      <img src="/images/aynnet2.png" width={100} height={40} alt="Hero img" />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
