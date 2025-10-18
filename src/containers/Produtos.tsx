import  Produto, { Produto }   from '../App'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'


const ProdutosComponent = ( ) => {
  const {data:jogos,isLoading } = useGetJogosQuery()

    if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {Produto.map((Produto:Produto) => (
          <Produto key={Produto.id} Produto={Produto}/>
        ))}
      </S.Produtos>
    </>
  )
}
export default ProdutosComponent
