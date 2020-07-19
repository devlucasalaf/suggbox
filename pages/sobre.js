import React from 'react'
import PageTitle from '../components/PageTitle'
import useSWR from 'swr'

const fetcherSobre = (...args) => fetch(...args).then(res => res.json())

const Sobre = () => {
  const { data, error } = useSWR('/api/get-sobre', fetcherSobre)
  return (
    <div>
      <div>
        <PageTitle title='Sobre' />       
      </div>
      <div>
      {!data && <p>Carregando...</p>}
        {!error && data && 
      <p className='mt-8 mb-4 text-center'>
        {data.message1}
      </p>} 
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data && 
      <p className='mb-4 text-center'>
        {data.message2}
      </p>} 
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data && 
      <p className='mb-4 text-center'>
        {data.message3}
      </p>} 
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data && 
      <p className='mb-4 text-center'>
        {data.message4}
      </p>} 
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data && 
      <p className='mb-4 text-center'>
        {data.message5}
      </p>} 
      </div>
  </div>
  )
}
export default Sobre
