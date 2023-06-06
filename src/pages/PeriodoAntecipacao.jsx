import { Link } from 'react-router-dom'
import { useState } from 'react'

function PeriodoAntecipacao() {
  const [valores, setValores] = useState({
    desconto: 0,
    valor: 0,
    taxa: 0,
  })
  const { desconto, valor, taxa } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let taxa1 = taxa / 100
    let periodo = desconto / (taxa1 * (valor - desconto))
    window.confirm('Periodo de Antecipaçao é: ' + periodo)
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Periodo De Antecipaçao</p>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col text-center w-fit m-auto'>
          <label>Informe o Desconto Racional Simples: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='desconto'
            value={desconto}
            onChange={onMutate}
          />
          <label>Informe o Valor Nominal: </label>
          <input
            className='rounded-3xl bg-slate-200 p-1 px-2'
            type='number'
            id='valor'
            value={valor}
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

export default PeriodoAntecipacao
