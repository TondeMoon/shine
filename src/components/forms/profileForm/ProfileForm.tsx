/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react'
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useFormik } from 'formik'

import profData from '../../../utils/profile.json'
import edit from '../../../images/edit.svg'
import './ProfileForm.scss'
import user from '../../../utils/fakeUser.json'

// @ts-ignore
const InputField = ({ formik, label, value, id, type, handleClick, open, handleClose, anchorEl, idPopover }) => (
  <>
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={handleClick}>
              <img alt='edit' src={edit} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      className='formField'
      disabled
      error={formik.touched.email && Boolean(formik.errors.email)}
      fullWidth
      helperText={formik.touched.email && formik.errors.email}
      id={id}
      label={label}
      name={id}
      onChange={formik.handleChange}
      size='small'
      type={type}
      value={value}
    />
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      id={idPopover}
      onClose={handleClose}
      open={open}
      sx={{ boxShadow: 'none' }}
    >
      <Typography className='popup' sx={{ p: 2 }}>
        {profData.avatar.demo}
      </Typography>
    </Popover>
  </>
)

export default function ProfileForm(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      password: user.password,
      language: user.language,
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const [lang, setLang] = useState<string[]>(['English'])

  const handleChange = (event: SelectChangeEvent<typeof lang>) => {
    const {
      target: { value },
    } = event
    setLang(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <form className='overallWrapper' onSubmit={formik.handleSubmit}>
      <div className='profileForm'>
        <InputField
          anchorEl={anchorEl}
          formik={formik}
          handleClick={handleClick}
          handleClose={handleClose}
          id='name'
          idPopover={id}
          label={profData.main.name}
          open={open}
          type='text'
          value={formik.values.name}
        />
        <InputField
          anchorEl={anchorEl}
          formik={formik}
          handleClick={handleClick}
          handleClose={handleClose}
          id='surname'
          idPopover={id}
          label={profData.main.surname}
          open={open}
          type='text'
          value={formik.values.surname}
        />
        <FormControl className='form-select' fullWidth sx={{ m: 1, ml: 0 }}>
          <InputLabel id='demo-multiple-checkbox-label'>{profData.main.language}</InputLabel>
          <Select
            id='demo'
            input={<OutlinedInput label={profData.main.language} notched />}
            labelId='demo'
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
            size='small'
            sx={{ borderRadius: 0 }}
            value={lang}
          >
            {profData.main.langArr.map((el) => (
              // @ts-ignore
              <MenuItem key={el} value={el}>
                <Checkbox checked={lang.indexOf(el) > -1} />
                <ListItemText primary={el} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <InputField
          anchorEl={anchorEl}
          formik={formik}
          handleClick={handleClick}
          handleClose={handleClose}
          id='email'
          idPopover={id}
          label={profData.main.email}
          open={open}
          type='email'
          value={formik.values.email}
        />
        <InputField
          anchorEl={anchorEl}
          formik={formik}
          handleClick={handleClick}
          handleClose={handleClose}
          id='phone'
          idPopover={id}
          label={profData.main.phone}
          open={open}
          type='phone'
          value={formik.values.phone}
        />
        <InputField
          anchorEl={anchorEl}
          formik={formik}
          handleClick={handleClick}
          handleClose={handleClose}
          id='password'
          idPopover={id}
          label={profData.main.password}
          open={open}
          type='password'
          value={formik.values.password}
        />
      </div>
      {/* <div className='buttonContainer'>
        <button className='roundButtonDark' type='button'>
          {profData.main.save}
        </button>
        </div> */}
    </form>
  )
}
