import { useState } from 'react'
import Auth from '@src/Auth'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Auth />
      </QueryClientProvider>
    </>
  )
}

export default App
