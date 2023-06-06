import { Link } from 'react-router-dom'
import { useState } from 'react'

function TaxaDeJuros() {
  const [valores, setValores] = useState({
    desconto: 0,
    valor: 0,
    periodo: 0,
  })
  const { desconto, valor, periodo } = valores

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let taxa = desconto / (periodo * (valor - desconto))
    window.confirm('Taxa de Juros é: ' + taxa * 100)
  }

  return (
    <div className='flex flex-col text-center'>
      <Link
        to='/'
        className='bg-blue-700 rounded-3xl p-2 text-white hover:bg-blue-600 w-fit'>
        Voltar ao Inicio
      </Link>
      <p className='text-3xl'>Calculadora de Taxa De Juros</p>
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
          <label>Informe o Periodo de Antecipaçao (em Meses): </label>
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

export default TaxaDeJuros
