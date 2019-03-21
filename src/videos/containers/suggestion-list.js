import React , {Component} from 'react'
import {FlatList, Text} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'


class SuggestionList extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias :('/>
  itemSeparator = () => <Separator />

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })
  }
   
  renderItem = ({item}) => {
    return(
      <Suggestion 
        {...item}
        onPress={() => {this.viewMovie(item)}}
      />
      )
  }
  keyExtractor = item => item.id.toString() 

  render() {
    return (
      <Layout title='Recomendado para ti'>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}  //Se le pasa una lista o un array
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}  //Va a recibir una func y puede renderizar un componente
        />
      </Layout>      
    )
  }
}

function mapStateToProps(state){
  //avisar a nuestros componentes de que se han producido cambios en el state.
  //se pasan del state a las props del componente
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionList)
