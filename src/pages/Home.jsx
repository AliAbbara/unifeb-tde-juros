import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col justify-between w-fit m-auto'>
      <Link
        to='/desconto-racional'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Desconto Racional Simples
      </Link>
      <Link
        to='/valor-nominal'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Valor Noiminal
      </Link>
      <Link
        to='/taxa-de-juros'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Taxa de Juros
      </Link>
      <Link
        to='/periodo-de-antecipacao'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Periodo de Anticipaçao
      </Link>
      {/* <Link
        to='/juros-compostos'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Juros Compostos
      </Link>
      <Link
        to='/capital-principal'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Capital Principal
      </Link>
      <Link
        to='/taxa-unitaria'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Taxa Unitaria
      </Link>
      <Link
        to='/periodo'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Periodo
      </Link>
      <Link
        to='/conversao'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Conversao de Taxa
      </Link>
      <Link
        to='/taxa-efetiva'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Taxa Efetiva
      </Link> */}
    </div>
  )
}

export default Home
