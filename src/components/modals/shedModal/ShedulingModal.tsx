/* eslint-disable no-magic-numbers */
import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import faqs from '../../../utils/shedFaqs.json'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  () => ({
    border: 'none',
    backgroundColor: '#ffffff',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: 12 }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: '#ffffff',
  flexDirection: 'row-reverse',
  minHeight: '20px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions(): JSX.Element {
  const [expanded, setExpanded] = React.useState<string | false>()

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      {faqs.docs.map((el, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            key={el._id}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary id={`panel${index + 1}d-header`}>
              <Typography sx={{ fontSize: '12px' }}>{el.title.en}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '12px' }}>{el.text.en}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
