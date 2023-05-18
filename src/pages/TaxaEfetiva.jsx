import { Link } from 'react-router-dom'
import { useState } from 'react'

function TaxaEfetiva() {
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
    conversao = conversao / 100
    let efetiva = (1 + conversao) ** periodo
    efetiva = efetiva - 1
    window.confirm('Periodo: ' + efetiva + ' => ' + efetiva * 100 + '%')
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Taxa Efetiva</p>
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
          <label>Informe a Taxa Unitaria por mes: </label>
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

export default TaxaEfetiva
