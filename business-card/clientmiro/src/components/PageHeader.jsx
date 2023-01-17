import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import {string} from "prop-types"

const PageHeader = ({title,subtitle}) => {
  return (
    <Box pt={2}>
      <Typography variant='h2'>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Divider sx={{m:2}}/>
    </Box>
  )
}
PageHeader.propTypes = {
  title:string.isRequired,
  subtitle:string.isRequired
}
export default PageHeader