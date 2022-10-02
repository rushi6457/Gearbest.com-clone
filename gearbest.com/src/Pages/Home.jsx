import {
    Text, 
    Flex, 
    Heading, 
    Box,
    Image,
    GridItem,
    Grid,
    Tooltip,
    Input,
    Button,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Alert
} from '@chakra-ui/react';
import  { useState,useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "../PageStyles/Home.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useEffect } from 'react';
import axios from 'axios';
import {FiThumbsUp} from "react-icons/fi"
import {BsShop} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {MdOutlinePhoneIphone} from "react-icons/md"
import {TbBus} from "react-icons/tb"
import {AiOutlineStar} from "react-icons/ai"
import {SiFacebook} from "react-icons/si"
import {BsMessenger ,BsYoutube,BsInstagram} from "react-icons/bs"
import {FaPinterestSquare,FaBlogger} from "react-icons/fa"
import {AuthContext} from "../Context/AuthContextComponent.jsx"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// const getData =(id)=>{
//     axios.get(`https://mocker-server.herokuapp.com/all`)
// }
const Home = () => {
    const [state,dispatch] = useContext(AuthContext)
    const [data,setData] = useState([])
   
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
        axios.get(`https://mocker-server.herokuapp.com/all`)
        .then((res)=>{
          return setData(res.data)
        })
    },[])

 
    return (
<>
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

        <SwiperSlide ><Image  height='430px' width='980px'  src="https://images.unsplash.com/photo-1496150590317-f8d952453f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/></SwiperSlide>
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

<Flex width='90%' margin='auto' marginTop='30px'>
    <Heading fontSize='20px'><Flex marginTop='30px' marginBottom={'30px'}><HiOutlineShoppingBag/>COLLECTION</Flex></Heading></Flex>
    
    <Flex className={styles.appOnlyFlex}>
        <Box 
            border='1px solid' 
            padding='20px'
            width='250px' 
            backgroundColor={'#1b0c07'} >
            <MdOutlinePhoneIphone className={styles.phoneIconAppOnlyCard}/>
            <Text fontSize='30px' fontWeight='bold' letterSpacing='1px' color='gold'>App Only</Text>
        <Text 
            color='white' 
            fontSize='20px' 
            fontWeight='bold'
            marginTop='10px'>Deals From $0.99</Text>
        </Box>
         <Tooltip   
            marginTop={'-57px'} 
            backgroundColor='red'
            fontSize={'20px'}   
            width={'190px'}    
            padding={'10px'}  
            textAlign={'center'} 
            label="$295"
        ><Text><Image src='https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/ceced3aa3e7c.jpg'></Image>Nimble Tech Store</Text></Tooltip>
           <Tooltip 
            label='$300'
            marginTop={'-57px'} 
            backgroundColor='red'
            fontSize={'20px'}   
            width={'190px'}    
            padding={'10px'}  
            textAlign={'center'} 
        ><Text><Image src='https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_thumb_220-v3/1519af3adbf9.jpg'></Image>Orture Official Store</Text></Tooltip>
        <Tooltip 
            label='$80'
            marginTop={'-57px'} 
            backgroundColor='red'
            fontSize={'20px'}   
            width={'190px'}    
            padding={'10px'}  
            textAlign={'center'} 
        ><Text><Image src='https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16388/goods_thumb_220-v1/7f75f2f344a1.jpg'></Image>Asseo Go Store</Text></Tooltip>
        <Tooltip 
            label='$370'
            marginTop={'-57px'} 
            backgroundColor='red'
            fontSize={'20px'}   
            width={'190px'}    
            padding={'10px'}  
            textAlign={'center'} 
        ><Text><Image src='https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16512/goods_thumb_220-v1/8d220616eed4.jpg'></Image>Eight Hour Store</Text></Tooltip>
        <Tooltip 
            label='$8.90'
            marginTop={'-57px'} 
            backgroundColor='red'
            fontSize={'20px'}   
            width={'190px'}    
            padding={'10px'}  
            textAlign={'center'} 
        ><Text><Image src='https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16538/goods_thumb_220-v1/e4bcaa3bb001.jpg'></Image>Mi Home Store</Text></Tooltip>
    </Flex>
   
        <Heading 
        marginLeft='45px'
        as={'h2'}
        fontSize='20px' 
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
                <Link to={`/${el.id}`}><Box height={'350px'} lineHeight='25px' padding={'10px'}>
                    <Image src={el.image}></Image>
                    <Text className={styles.dataText} textAlign='justify'>{el.name}</Text>
                    <Heading as={'h4'} size='md' color={'red'} textAlign='justify'>${el.price}</Heading>
                </Box></Link>
            </GridItem>)}
        </Grid>
        <Footer/>
             
</>
    );
}

export default Home;
