'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount = 0 }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
        duration={1.5}
        end={amount}
        decimals={2}
        decimal=','
        prefix='$'
        />
    </div>
  )
}

export default AnimatedCounter