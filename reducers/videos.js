function videos(state = {}, action) {

  switch (action.type){

    //modifican el state de la aplicación dependiendo de la acción disparada
    case 'SET_SUGGESTION_LIST': { return {...state, ...action.payload} }
    case 'SET_CATEGORY_LIST':   { return {...state, ...action.payload} }
    case 'SET_SELECTED_MOVIE':  { return {...state, selectedMovie: action.payload.movie} }
    default:  return state
  }

}
export default videos