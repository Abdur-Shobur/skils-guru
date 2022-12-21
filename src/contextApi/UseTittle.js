import React from 'react'
import { useEffect } from 'react'

function UseTittle(usetittle) {
  useEffect(() => {
    document.title = `${usetittle}`
  }, [usetittle])
}

export default UseTittle
