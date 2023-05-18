import { Link } from 'react-router-dom'
import { useState } from 'react'

function Conversao() {
  const [valores, setValores] = useState({
    taxa: 0,
    periodo: 0,
  })
  const { taxa, periodo } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let conversao = taxa / periodo
    window.confirm('Periodo: ' + conversao)
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Conversao da Taxa Capitalizada</p>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col text-center w-fit m-auto'>
          <p>
            Por favor, informe o Periodo em baixo baseado nas calculaçoes
            seguindo:{' '}
          </p>
          <p>Capitalização mensal? Periodo=12 </p>
          <p>Capitalização bimestral? Periodo=6 </p>
          <p>Capitalização trimestal? Periodo=4 </p>
          <p>Capitalização semestral? Periodo=2 </p>
          <label>Informe a Taxa ao Ano: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='taxa'
            value={taxa}
            onChange={onMutate}
          />
          <label>Informe o Periodo: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='periodo'
            value={periodo}
            onChange={onMutate}
          />
          <button
            type='submit'
            className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit mt-2 place-self-center'>
            Calcular
          </button>
        </form>
      </div>
    </div>
  )
}

export default Conversao
