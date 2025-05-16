import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Rout from './routes/AppRouter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout/>
  </StrictMode>,
)
