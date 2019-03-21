import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import API from '../utils/api'
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';


class AppLayout extends Component {

  async componentDidMount(){

    const categoryList = await API.getMovies()

    //disparar las acciones que modificarán el state de la aplicación
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getSuggestion(10)
   
    //disparar las acciones que modificarán el state de la aplicación
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })

  }

  render(){
    if (this.props.selectedMovie){
      return <Movie/>
    }
    return(
      <Home>
        <Header/>
        <Search/>
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state){
  //avisar a nuestros componentes de que se han producido cambios en el state.
  //se pasan del state a las props del componente
  return {
    selectedMovie: state.selectedMovie
  }
}

//este connect sirve para tener disponible el store y asi poder usar dispatch
//this.props.dispatch({
export default connect(mapStateToProps)(AppLayout)
