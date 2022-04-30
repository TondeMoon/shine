import { Avatar, Stack, Grid, Box, Typography, Badge } from '@mui/material'
import { useNavigate } from 'react-router-dom'

// import dummyAvatar from '../../../images/dummyAvatar.jpg'
import girl from '../../../images/pic.jpg'
import profData from '../../../utils/profile.json'
import './Profile.scss'
import ProfileForm from '../../forms/profileForm/ProfileForm'
import pencil from '../../../images/pencil.svg'
import user from '../../../utils/fakeUser.json'

export default function Profile(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Box className='page'>
      <Grid container spacing={5}>
        <Grid item lg={3} md={3} sm={4} xl={3} xs={12}>
          <Stack
            className='avatarContainer'
            direction='column'
            sx={{ justifyContent: 'flex-start', paddingTop: '40px', alignItems: 'center' }}
          >
            <Badge
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={<img alt='pencil' className='pencil' src={pencil} />}
              overlap='circular'
            >
              <Avatar alt='userpic' src={girl} sx={{ width: 130, height: 131, border: '3.65px solid #4787f3' }} />
            </Badge>
            <Typography className='profileTitle' component='div' gutterBottom variant='h2'>
              {`${user.name} ${user.surname}`}
            </Typography>
            <button className='roundButton' onClick={() => navigate('/')} type='button'>
              {profData.main.logout}
            </button>
          </Stack>
        </Grid>
        <Grid item lg={9} md={9} sm={8} xl={9} xs={12}>
          <div className='dataContainer'>
            <Typography className='secondTitle' component='div' gutterBottom variant='h1'>
              {profData.main.h1}
            </Typography>
            <ProfileForm />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}
