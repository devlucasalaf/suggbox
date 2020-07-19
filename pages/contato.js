import React from 'react'
import PageTitle from '../components/PageTitle'
import useSWR from 'swr'

const fetcherContato = (...args) => fetch(...args).then(res => res.json())

const Contato = () => {

  const { data, error } = useSWR('/api/get-contato', fetcherContato)

  return (
    <div>
      <div>
        <PageTitle title='Contato' />
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data &&
          <p className='mt-8 mb-4'>
            <b className='text-red-800'>ENDEREÇO:</b> {data.messageRua}
          </p>}
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data &&
          <p className='mb-4'>
            <b className='text-red-800'>TELEFONES:</b> {data.messageTel1} / {data.messageTel2} / {data.messageTel3}
          </p>}
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data &&
          <p className='mb-4'>
            <b className='text-red-800'>CELULARES:</b> {data.messageCel1} / {data.messageCel2} / {data.messageCel3}
          </p>}
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data &&
          <p className='mb-4'>
            <b className='text-red-800'>E-MAIL:</b> {data.messageEmail}
          </p>}
      </div>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data &&
          <p className='mb-4'>
            <b className='text-blue-800'>De Segunda à Sábado</b> <br /> {data.messageHorario}
          </p>}
      </div>

    </div>
  )
}
export default Contato
