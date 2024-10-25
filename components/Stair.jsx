import { animate } from 'framer-motion'
import React from 'react'

const StairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: [ "100%", "0%"]
    },
}

const Stair = () => {

  return (
    <div>
      Stair
    </div>
  )
}

export default Stair
