import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION } from '../Constants/constants'
import { useLanguageContext } from '../Context/LanguageContext'

export const ForgotPage = () => {
  const navigate = useNavigate()
  const { TEXT } = useLanguageContext()

  return (
    <Container
      component="main"
      maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <VpnKeyOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5">
          {TEXT.forgot_password}
        </Typography>
        <Box
          component="form"
          onSubmit={() => console.log('submit')}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={TEXT.forgot_email}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
              />
            }
            label={TEXT.forgot_human}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            {TEXT.forgot_retreive}
          </Button>
          <Grid
            container
            justifyContent="flex-end">
            <Grid item>
              <Typography
                variant="body2"
                onClick={() => navigate(NAVIGATION.signin)}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: 'primary.main',
                }}>
                {TEXT.forgot_check}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
