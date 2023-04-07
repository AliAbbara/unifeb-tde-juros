import { Link } from 'react-router-dom'
import { useState } from 'react'

function TaxaUnitaria() {
  const [valores, setValores] = useState({
    capital: 0,
    taxa: 0,
    periodo: 0,
    juros: 0,
  })
  const { capital, periodo, juros } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let taxa = juros / ((capital * periodo) / 100)
    window.confirm('Taxa: ' + taxa + '%')
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>
        Calculadora de Taxa Unitaria na aplicaçao de Juros Simples
      </p>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col text-center w-fit m-auto'>
          <label>Informe o Capital: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='capital'
            value={capital}
            onChange={onMutate}
          />
          <label>Informe o Juros por mes: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='juros'
            value={juros}
            onChange={onMutate}
          />
          <label>Informe o Periodo em meses: </label>
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

export default TaxaUnitaria
