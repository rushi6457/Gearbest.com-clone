import React from 'react';
import Navbar from "../Components/Navbar.jsx"
import styles from "../PageStyles/NewArrivals.module.css"
import {Flex,Heading,Grid,GridItem,Image,Text, Stack, Button} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"
import Footer from "../Components/Footer.jsx"
import axios from 'axios'
import { useEffect } from 'react';
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
const getData =async() =>{
   let res = await axios.get(`https://fakestoreapi.com/products`)
    let data= await res
    console.log(data)
    return data.data
}

const NewArrivals = () => {
    const [data,setData] = React.useState([])

    useEffect(()=>{
        getData()
        .then((res)=>{
            setData(res)
        })
    },[])
    return (
        <div>
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
                <Stack direction='row' marginLeft='65px' padding='10px' alignItems='center'>
                    <Text>Sort By : </Text>
                    <Button colorScheme='red'>Recommended</Button>
                    <Button colorScheme='red'>Hottest</Button>
                    <Button colorScheme='red'>Newest</Button>
                <Button colorScheme='red'>Price</Button>
        </Stack>
                <Heading textAlign={'justify'}marginLeft='5%' marginTop={'40px'} as={'h4'} size='md'>LATEST COLLECTION</Heading>
                <Grid 
                gap='15px'
                marginBottom={'50px'} 
                marginTop={'50px'} 
                width='90%' 
                margin={'auto'} 
                templateColumns={{base:'repeat(1,1fr)' , md:'repeat(2,1fr)' , lg:'repeat(4,1fr)'}}>
                    {data.map((el)=><GridItem padding={'20px'}  key={el.id} border='1px solid'>
                        <Image height={'200px'} width='250px' src={el.image}></Image>
                        <Text textAlign={'justify'} >{el.title}</Text>
                        <Text textAlign={'justify'} color='red' fontSize={'20px'}fontWeight='bold'>${el.price}</Text>
                    </GridItem>)}
                </Grid>
                <Footer/>
        </div>
    );
}

export default NewArrivals;
