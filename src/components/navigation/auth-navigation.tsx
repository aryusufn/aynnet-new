import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <a href="https://e.ebilling.id:4433/billing/login.php">
        <StyledButton disableHoverEffect={true} variant="outlined">
          Sign In
        </StyledButton>
      </a>
      <a href="https://bit.ly/regiswifiayn">
        <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
      </a>
    </Box>
  )
}

export default AuthNavigation
