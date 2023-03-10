import React, {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function HomeScreen() {
  // const [products,setProducts]= useState([])

  // useEffect(() => {
  //   // console.log('useEffect is triggered')

  //   async function fetchProducts(){

  //     const{ data } = await axios.get(`/api/products/`)
  //     setProducts(data)
  //   }

  //   fetchProducts()

  // }, [])
  
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error,loading,products} = productList

  useEffect(() => {
    dispatch(listProducts())
  },[dispatch])

  // const products = []

  return (
    <div>
        <h1>Latest Products</h1>
        {loading ? <Loader/>
          : error ? <Message varient='danger'>{console.log}</Message>  
              :
              <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
              </Row>
        }
    </div>
  )
}

export default HomeScreen