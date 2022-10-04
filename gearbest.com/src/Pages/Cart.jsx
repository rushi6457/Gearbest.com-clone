import React, { useState } from 'react';
import { useContext } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { CartContext } from '../Context/CartContext/CartContext';
import {Button, Flex, Grid, Heading, Image,Text} from "@chakra-ui/react"
import CartCount from '../Components/CartCount';
const Cart = () => {

    const [cartState,cartDispatch] = useContext(CartContext)
      const [count,setCount] = useState(1)
        console.log(cartState)
    return (
        <div>
            <Navbar/>
            {cartState.cart.map((el)=>
            <Grid 
                backgroundColor={'blackAlpha.100'} 
                width='90%' 
                templateColumns={'repeat(6,1fr)'} 
                marginTop='30px' 
                marginLeft={'80px'}>
            <Image 
                marginLeft={'15px'}
                marginTop='30px'
                border={'1px solid'} 
                padding='5px' 
                width='100px' src={el.image}/>
            <Text  
                heigth='10px'
                padding='5px'
                textOverflow={'ellipsis'}>{el.name}</Text>
            <Heading 
                alignItems={'center'}
                marginTop='60px'
                as={'h6'} 
                size='sm'>${el.price}</Heading>
            <Flex alignItems={'center'}>
                <Button backgroundColor={'white'} border='1px solid' borderRadius={'0px'} onClick={()=>setCount(count-1)}>-</Button>
                <Button backgroundColor={'white'} border='1px solid' borderRadius={'0px'} 
                width='35px' onClick={()=>setCount(count)}>{count}</Button>
                <Button backgroundColor={'white'} border='1px solid' borderRadius={'0px'} onClick={()=>setCount(count+1)}>+</Button>
            </Flex>
            <Button
            onClick={(id)=>{
            cartDispatch({
                type:"REMOVE_CART",
                payload:cartState.cart.id
            })
            }}
            marginTop={'55px'} 
            backgroundColor=' #ffda00' 
            borderRadius={'0px'}>Remove</Button>
            <Heading 
                marginTop='60px'
                color={'red'} 
                as='h5' 
                size='sm'>${Math.floor(el.price *count ).toFixed(2)}</Heading>
            </Grid>) }
           
           
            <Footer/>
        </div>
    );
}

export default Cart;
