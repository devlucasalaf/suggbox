import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { data } from 'autoprefixer'
import MaskedInput from 'react-text-mask'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>O restaurante <b>Biscoiteria Clones</b> sempre busca por atender melhor seus clientes.<br />
Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      {!sucess && <div>
        <div className='text-center'>
          <label className='font-bold'>Seu nome:</label>
          <input type='text' className='mx-auto max-w-sm py-4 px-20 shadow block bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        </div>
        <div className='text-center'>
          <label className='font-bold'>E-mail:</label>
          <input type='text' className='mx-auto max-w-sm py-4 px-20 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        </div>
        <div className='text-center'>
          <label className='font-bold'>Whatsapp:</label>
          <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} type='text' className='mx-auto max-w-sm py-4 block px-20 shadow bg-blue-100 my-2 rounded' placeholder='(   ) 00000-0000' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        </div>
        <div className='text-center'>
          <label className='font-bold'>Nota:</label>
          <div className='w-1/6 mx-auto flex mb-6 mt-2'>
            {notas.map(nota => {
              return (
                <label className='mx-auto'>
                  {nota}<br />
                  <input className='max-w-sm' type='radio' name='Nota' value={nota} onChange={onChange} />
                </label>
              )
            })
            }
          </div>
        </div>
        <div className='text-center'>
          <button className='max-w-sm px-24 py-4 mb-4 bg-blue-400 font-bold rounded-lg shadow-lg hover:shadow hover:bg-green-400' onClick={save}>Salvar</button>
        </div>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon.</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa
