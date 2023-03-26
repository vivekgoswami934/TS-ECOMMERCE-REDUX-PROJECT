import {  Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCurrentParamProduct } from '../hooks/useCurrentParamProduct';
import {  updateProduct } from '../Redux/app/app.action';
import { useAppDispatch, } from '../Redux/store';

const EditProduct = () => {
  const {currentProduct, id} = useCurrentParamProduct()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const updateHandler = () => {
    if(title.length && price){
      const payload = {
        title, 
        price
      }
      dispatch(updateProduct(Number(id), payload)).then(() => {
        navigate('/')
      })
    }
  }


  useEffect(() => {
    if(currentProduct?.title && currentProduct?.price){
      setTitle(currentProduct?.title)
      setPrice(currentProduct?.price)
    }
  }, [currentProduct])



  return (
    <>
    <Heading>Edit Product</Heading>
     <Flex
      m={5}
      justify={'center'}
   >
        <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input value={title} 
              onChange={(e) => { setTitle(e.target.value)}} type="text" />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input value={price} onChange={(e) => {setPrice(Number(e.target.value))}} type="number" />
            </FormControl>
            </Stack>
    </Flex>
            <Button onClick={updateHandler}>Update Product</Button>
    </>
  )
}

export default EditProduct