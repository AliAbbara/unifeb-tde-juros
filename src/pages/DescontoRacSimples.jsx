import { Link } from 'react-router-dom'
import { useState } from 'react'

function DescontoRacSimples() {
  const [valores, setValores] = useState({
    valorNominal: 0,
    taxa: 0,
    periodo: 0,
  })
  const { valorNominal, taxa, periodo } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let taxa1 = taxa / 100 / 30
    let desconto = (valorNominal * taxa1 * periodo) / (1 + taxa1 * periodo)
    window.confirm('Desconto Racional Simples é: ' + desconto)
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Desconto Racional Simples</p>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col text-center w-fit m-auto'>
          <label>Informe o Valor Nominal: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='valorNominal'
            value={valorNominal}
            onChange={onMutate}
          />
          <label>Informe a Taxa Unitaria (por mes): </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='taxa'
            value={taxa}
            onChange={onMutate}
          />
          <label>Informe o Periodo de Antecipaçao (em Dias): </label>
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

export default DescontoRacSimples
