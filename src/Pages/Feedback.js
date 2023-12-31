import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useLanguageContext } from '../Context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION } from '../Constants/constants'
import { ComponentWrapper } from '../Components/ComponentWrapper'

export const FeedbackPage = () => {
  const { TEXT } = useLanguageContext()
  const navigate = useNavigate()

  const FEEDBACK_LINKS = [
    { content: TEXT.feedback_frontpage, path: NAVIGATION.frontpage },
    { content: TEXT.feedback_login, path: NAVIGATION.signin },
    { content: TEXT.feedback_signup, path: NAVIGATION.signup },
    { content: TEXT.feedback_driving, path: NAVIGATION.driving },
    { content: TEXT.feedback_receipt, path: NAVIGATION.receipt },
    { content: TEXT.feedback_forgot, path: NAVIGATION.forgot },
  ]

  return (
    <ComponentWrapper
      title={TEXT.feedback_title}
      subtitle={TEXT.feedback_subtitle}>
      <Container maxWidth="sm">
        <Typography
          component="h2"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom>
          {TEXT.demo_links}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 2,
          }}>
          {FEEDBACK_LINKS.map((link, index) => (
            <Typography
              key={index}
              sx={{ my: 1, textDecoration: 'none', cursor: 'pointer' }}
              variant="button"
              color="text.primary"
              onClick={() => navigate(link.path)}>
              {link.content}
            </Typography>
          ))}
        </Box>
      </Container>
    </ComponentWrapper>
  )
}
