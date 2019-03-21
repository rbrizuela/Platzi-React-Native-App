import React, { Component } from 'react'
import { FlatList, 
        View, 
        Text
          } from 'react-native'
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category'
import Layout from '../components/category-list-layout'
import { connect } from 'react-redux'


class CategoryList extends Component {

  renderEmpty = () => <Empty text='No hay categorias :('/>
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return(
      <Category {...item}/>
      )
  }
  keyExtractor = item => item.id.toString() 

  render(){
    return(
      <Layout title='Categorias'>
        <FlatList
          horizontal
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
    list: state.categoryList
  }
}

export default connect(mapStateToProps)(CategoryList)
