import React, { useEffect, useState } from 'react';
import { listadoProdutos } from '../../data/asyncMock'
import { ItemList } from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greetings }) => {

  const [productos, setProductos] = useState([])

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        listadoProdutos.length > 0 ?
          resolve(listadoProdutos)
          :
          reject("No hay")
      }, 500);
    }
    )
  }

 useEffect(() => {
    getProductos()
      .then(res => setProductos(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>{greetings}</h1>
      <hr />
      <ItemList listadoProductos={productos}/>
    </>
  );
};

export default ItemListContainer;





