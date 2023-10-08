import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
