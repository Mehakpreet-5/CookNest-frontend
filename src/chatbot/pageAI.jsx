import React from 'react'
import Main from './MainAI'

import ContextProvider from './ContextAI.jsx';
function pageAI() {
  return (
   
           <ContextProvider>
   
       <Main/>
       </ContextProvider>
   
  )
}

export default pageAI
