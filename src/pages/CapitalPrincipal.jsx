import { Link } from 'react-router-dom'
import { useState } from 'react'

function CapitalPrincipal() {
  const [valores, setValores] = useState({
    taxa: 0,
    periodo: 0,
    montante: 0,
  })
  const { taxa, periodo, montante } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let taxa1 = taxa / 100
    let bottom = (1 + taxa1) ** periodo
    let capital = montante / bottom
    window.confirm('Capital: ' + capital)
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Capital Principal</p>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col text-center w-fit m-auto'>
          <label>Informe o Montante: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='montante'
            value={montante}
            onChange={onMutate}
          />
          <label>Informe a Taxa Unitaria por mes: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='taxa'
            value={taxa}
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

export default CapitalPrincipal
