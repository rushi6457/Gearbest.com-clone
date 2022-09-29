import {
    Text, 
    Flex, 
    Heading, 
    Box,
    Image,
    GridItem,
    Grid
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "../PageStyles/Home.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useEffect } from 'react';
import axios from 'axios';
import {FiThumbsUp} from "react-icons/fi"
import {BsShop} from "react-icons/bs"
const Home = () => {

    const [data,setData] = React.useState([])

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

    useEffect(()=>{
        axios.get(`https://gearbest-project-server.herokuapp.com/products`)
        .then((res)=>{
          return setData(res.data)
        })
    },[])
    return (
<>
    <>
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
        <Box className={styles.subCategories}>
        <Text className={styles.subCategoriesText}>Consumer Electronics</Text>
        <Text className={styles.subCategoriesText}>Industrial & Scientific</Text>
        <Text className={styles.subCategoriesText}>Cell Phones & Accessories</Text>
        <Text className={styles.subCategoriesText}>Appliances</Text>
        <Text className={styles.subCategoriesText}>Outdoors, Fitness & Sports</Text>
        <Text className={styles.subCategoriesText}>Computers, Tablets & Office</Text>
        <Text className={styles.subCategoriesText}>Health & Personal Care</Text>
        <Text className={styles.subCategoriesText}>Home Improvement & Tools</Text>
        <Text className={styles.subCategoriesText}>Drones, Toys & Hobbies</Text>
        <Text className={styles.subCategoriesText}>Home & Garden</Text>
        <Text className={styles.subCategoriesText}>Motor & Car Electronics</Text>
        <Text className={styles.subCategoriesText}>Men's Fashion</Text>
        <Text className={styles.subCategoriesText}>Watches & Jewelry</Text>
        <Text className={styles.subCategoriesText}>Gearbest Promotion</Text>
        </Box>
    </>
    <Box marginTop='-430px' marginLeft='300px' >
        <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image height='430px' width='980px'  src="https://images.unsplash.com/photo-1496150590317-f8d952453f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/></SwiperSlide>
        <SwiperSlide><Image height='430px' width='980px'  src="https://des.gbtcdn.com/storage/desc/6870745450383863808/16625/ae0f71c559ef.jpg"/></SwiperSlide>
        <SwiperSlide><Image height='430px' width='980px'  src="https://des.gbtcdn.com/storage/desc/6870745450383863808/16625/9a9ee13963a2.jpg"/></SwiperSlide>
        <SwiperSlide><Image height='430px' width='980px'  src="https://des.gbtcdn.com/storage/desc/6862458881155723264/16593/ca7f67857f14.jpg"/></SwiperSlide>
        <SwiperSlide><Image height='430px' width='980px'  src="https://uidesign.gbtcdn.com/GB/image/5200/1190x420.jpg"/></SwiperSlide>
    </Swiper>
</Box>

<Flex width='90%' margin='auto' justifyContent='space-between' marginTop='20px'>
    <Image src='https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg'></Image>
    <Image src='https://uidesign.gbtcdn.com/GB/image/8823/master3_230%C3%97120_en.jpg'></Image>
    <Image src='https://uidesign.gbtcdn.com/GB/image/8823/HURLEY_230X120_en.jpg'></Image>
    <Image src='https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg'></Image>
    <Image src='https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg'></Image>
</Flex>
        <Heading 
        marginLeft='45px'
        as={'h2'} 
        size='lg'><Flex 
        padding='20px' 
        alignItems={'center'} 
        letterSpacing='1px'
        textAlign='justify'><FiThumbsUp />RECOMMENDED FOR YOU</Flex></Heading>
        <Grid 
        width='90%' 
        margin='auto' 
        marginTop='30px' 
        gap={'25px'}
        className={styles.gridItems}
        templateColumns={{base:'repeat(1,1fr)' , md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}}>
            {data?.map((el)=><GridItem>
                <Link to={`/home/:{id}`}><Box height={'350px'} lineHeight='25px' padding={'10px'}>
                    <Image src={el.image}></Image>
                    <Text className={styles.dataText} textAlign='justify'>{el.name}</Text>
                    <Heading as={'h4'} size='md' color={'red'} textAlign='justify'>{el.price}</Heading>
                </Box></Link>
            </GridItem>)}
        </Grid>
                {/* Footer Section */}
        <Flex>
            <Box>
            <Image src='https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png'></Image>
            <Heading as={'h5'} size='sm'>AFFORDABLE QUALITY <br /> FUN SHOPPING</Heading>
            </Box>
            <Box>
                <BsShop size='35px'/>
                <Heading as={'h5'} size='sm'>High Quality Selection </Heading>
                <Text>Total product quality control for peace of mind</Text>
            </Box>
        </Flex>
</>
    );
}

export default Home;
