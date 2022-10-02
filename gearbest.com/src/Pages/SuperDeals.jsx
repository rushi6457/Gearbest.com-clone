import { 
    Box,
    Image,
    Flex, 
    Grid,
    GridItem,
    Heading, 
    Text,
    Button,
    Stack} 
from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from "../PageStyles/Superdeals.module.css"
 const links = [
    {
        path:'superdeals',
        title:"SUPER DEALS"
    },
    {
        path:'apponly',
        title:"APP ONLY"
    },
    {
        path:'newarrivals',
        title:"NEW ARRIVALS"
    }
]
const fixTimeString = (time)=>{
    return time<10? `0${time}`:time
}
const timeToFormatString=(time) =>{
    const sec = time%60
    const min = Math.floor(time/60)%60
    const hours = Math.floor(time/3600)%60
    const output = `${fixTimeString(hours)}:${fixTimeString(min)}:${fixTimeString(sec)}`
    return output
}
const  getData =async ({orderBy}) =>{
    //  const price = Number(price)
    let res = await axios(`https://mocker-server.herokuapp.com/data?_sort=price&_order=${orderBy}`)
    let data = await res
    console.log(data)
    return data.data

}

const SuperDeals = () => {

    const [counter,setCounter] = useState(3600)
    const ref = useRef(null)
    const [data,setData] = useState([])
    const [orderBy ,setOrderBy] = useState('desc')
   
    useEffect(()=>{
        getData({orderBy})
        .then((res)=>{
            setData(res)
        })
    },[orderBy])
    useEffect(()=>{
      
        if(ref.current){
            clearInterval(ref.current)
        }
        ref.current = setInterval(()=>{
            setCounter((prev)=>prev-1)
        },1000)
    })
   
    return (
        <div>
             <>
        <Navbar/>
        <Flex width='90%' margin='auto' marginTop='30px'><Heading as={'h4'} 
        backgroundColor='black'
        color='white'
        padding='8px'
        width='250px'
        marginLeft='0px'
        size='md'>Categories </Heading>
        {links.map((el)=><NavLink 
        end
        className={({ isActive }) =>
        isActive ? styles.active : styles.default
        }
        to={el.path} 
        key={el.path}>{el.title}</NavLink>)}</Flex>
    </>
        <Flex width='100%' justifyContent='center' heigth='100px'>
            <Box 
          marginLeft='5%'
             width='33%'
             bgColor='black'
             height='63px'
   
            >
            </Box>
            <Heading 
            height='70px'          
            width='33%'           
            bgGradient='linear(red.500 90%, yellow.100 10%)' 
            as={'h4'} 
            size='md'>Ends in : <br />{timeToFormatString(counter)}</Heading>
             <Box 
             width='33%'
             bgColor='black' 
            marginRight='5%'
            height='63px'
            >
            </Box>
        </Flex>
        <Stack direction='row' marginLeft='65px' padding='10px' alignItems='center'>
            <Text>Sort By : </Text>
            <Button colorScheme='red'>Recommended</Button>
            <Button colorScheme='red'>Hottest</Button>
            <Button colorScheme='red'>Newest</Button>
            <Button onClick={()=>setOrderBy(orderBy==='asc'?"desc":"asc")} colorScheme='red'>Price</Button>
        </Stack>
           <Grid
           backgroundColor='blackAlpha.100'
           padding='10px'
           marginTop='300px'
           width='90%'
           margin='auto'
           gap='20px'
             templateColumns={{base:'repeat(1,1fr)' , md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}}
           >
            {data.map((el)=>{
               return <GridItem key={el.id}>
                    <Image src={el.image}></Image>
                    <Text className={styles.dataText}>{el.name}</Text>
                    <Text color='red.400' fontSize='20px' fontWeight='bold' textAlign='justify'>${el.price}</Text>
                </GridItem>
            })}
           </Grid>
        <Footer/>
        </div>
    );
}

export default SuperDeals;
