import {
  Container,
  TextField,
  Button,
  Grid,
  IconButton,
  Tooltip,
  MenuItem,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { UploadButton } from '../Components/UploadButton'
import { useAppContext } from '../Context/AppContext'
import { Header } from '../Components/Header'
import { AccountMenu } from '../Components/NotUsedAtm/AccountMenu'
import { TEXT } from '../Constants/constants'
import { RegistrerDialogs } from '../Components/RegistrerComponents/RegistrerModals'

export const RegistrerPage = () => {
  const {
    handleSubmit,
    handleDateChange,
    handleAmountChange,
    handleCatoryChange,
    handleDescriptionChange,
    date,
    amount,
    category,
    description,
    isNotNumber,
    handleInfoDialogOpen,
  } = useAppContext()

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <AccountMenu />
      <Header content={TEXT.registrer_page_header} />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label={TEXT.receipt_date}
              type="date"
              value={date}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              type="number"
              label={TEXT.receipt_amount}
              value={amount}
              onChange={handleAmountChange}
              error={isNotNumber}
              helperText={isNotNumber ? TEXT.input_number : ''}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              select
              fullWidth
              label={TEXT.category}
              value={category}
              onChange={handleCatoryChange}>
              {TEXT.categories.map((item) => (
                <MenuItem
                  key={item}
                  value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label={TEXT.commentary}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <UploadButton />
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center">
            <Button
              variant="contained"
              color="primary"
              type="submit">
              {TEXT.submit_expense}
            </Button>
            <Tooltip
              title={TEXT.how_to_use}
              sx={{ ml: 1 }}>
              <IconButton
                size={'medium'}
                onClick={handleInfoDialogOpen}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </form>
      <RegistrerDialogs />
    </Container>
  )
}
