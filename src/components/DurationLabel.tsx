import { Box, Typography } from '@material-ui/core'
import { differenceInDays } from 'date-fns'
import React from 'react'
import { animated, useSpring } from 'react-spring'

export const computeDays = () => {
  const startDate = new Date(2019, 5, 9)
  return differenceInDays(new Date(), startDate) + 1
}

const DurationLabel: React.FC = () => {
  const { days } = useSpring({
    days: computeDays(),
    from: { days: 0 },
  })
  return (
    <Box textAlign="center">
      <Box m={1} fontSize="body1.fontSize">
        自 6 月 9 日起
      </Box>
      <Typography variant="h3">
        第&nbsp;
        <animated.span>
          {days.interpolate(val => Math.floor(val))}
        </animated.span>
        &nbsp;日
      </Typography>
      <Box m={1} fontSize="body1.fontSize">
        香港人仲抗爭緊
      </Box>
    </Box>
  )
}

export default DurationLabel
