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
import  { useState } from 'react';
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
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const getData =(id)=>{
    axios.get(`https://mocker-server.herokuapp.com/all${id}`)
}
const Home = () => {

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
                <Link to={`/home/:{id}`}><Box height={'350px'} lineHeight='25px' padding={'10px'}>
                    <Image src={el.image}></Image>
                    <Text className={styles.dataText} textAlign='justify'>{el.name}</Text>
                    <Heading as={'h4'} size='md' color={'red'} textAlign='justify'>${el.price}</Heading>
                </Box></Link>
            </GridItem>)}
        </Grid>
        <Footer/>
                {/* Footer Section */}
    {/* <Box className={styles.footerSection}>
        <Flex width='90%' margin={'auto'} marginTop='30px'  gap='60px' alignItems={'center'} >
            <Box className={styles.footerAdIndividualAd}>
            <Image src='https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png'></Image>
            <Heading className={styles.footerLowerAd} as={'h5'} size='sm'>AFFORDABLE QUALITY <br /> FUN SHOPPING</Heading>
            </Box>
            <Box className={styles.footerAdIndividualAd}>
                <BsShop size='35px'  className={styles.lowerFooterAd}/>
                <Heading as={'h5'} size='sm'>High Quality Selection </Heading>
                <Text className={styles.footerLowerAd}>Total product quality <br /> control for peace of mind</Text>
            </Box>
            <Box className={styles.footerAdIndividualAd}>
                <FiThumbsUp size='35px' className={styles.lowerFooterAd}/>
                <Heading as={'h5'} size='sm'>Affordable Prices</Heading>
                <Text className={styles.footerLowerAd}>Factory direct prices for <br /> maximum savings</Text>
            </Box>
            <Box>
                < TbBus size='35px' className={styles.lowerFooterAd}/>
                <Heading as={'h5'} size='sm'>Express Shipping</Heading>
                <Text className={styles.footerLowerAd}>Fast, reliable delivery from <br /> global warehouses</Text>
            </Box>
            <Box className={styles.footerAdIndividualAd}>
                <AiOutlineStar size='35px' className={styles.lowerFooterAd}/>
                <Heading as={'h5'} size='sm'>Worry-free After-sales</Heading>
                <Text className={styles.footerLowerAd}>Instant access to <br /> professional support</Text>
            </Box>
        </Flex>

        <Flex justifyContent={'space-evenly'} alignItems={'center'} width='90%' margin={'auto'} marginLeft='130px' marginTop={'50px'}>
            <Flex alignItems={'center'}  marginLeft='-230px'>
                <Heading marginRight={'10px'} as={'h5'} size='sm'>Newsletter</Heading>
                <Input width={'350px'} padding='15px' backgroundColor={'white'} placeholder="Enter Email to get 50 points"></Input>
                <Button onClick={()=>alert('Thanks For Subscribing')} backgroundColor={'black'} color='white' borderRadius={'0px'} padding='13px' width='150px'>Subscribe</Button>
            </Flex>
            <Flex fontSize={'25px'}>
                <Box marginRight={'30px'}></Box><SiFacebook />
                 <Box marginLeft={'30px'} marginRight={'30px'}><BsMessenger /></Box>
                 <Box marginRight={'30px'}><BsYoutube /></Box>
                 <Box marginRight={'30px'}><FaPinterestSquare /></Box>
                 <Box marginRight={'30px'}><BsInstagram /></Box>
                 <Box marginRight={'30px'}><FaBlogger /></Box>
            </Flex>
        </Flex>
        <Flex width='90%' justifyContent={'space-evenly'}>
            <Box textAlign={'justify'} fontSize='12px' marginTop={'20px'}>
                <Heading as={'h4'} size="sm">Company Information</Heading>
                <Text>About Us</Text>
                <Text>Top Searches</Text>
                <Text>Privacy Policy</Text>
                <Text>Terms and Conditions</Text>
                <Text>Intellectual Property Policy</Text>
                <Text>Testimonials</Text>
                <Text>Contact Us</Text>
                <Text>Report Security Issue</Text>
                <Text>Sell on Gearbest</Text>
                <Text>Cookies Policy</Text>
                <Text>Top Brands</Text>
                <Text>Gearbest Official Blog</Text>
            </Box>
             <Box textAlign={'justify'} fontSize='12px' marginTop={'20px'}>
                <Heading as={'h4'} size="sm">Customer Service</Heading>
                <Text>Shipping Information</Text>
                <Text>My Favorites</Text>
                <Text>FAQ For Newsletter Subscription</Text>
                <Text>My Points</Text>
                <Text>Warranty and Return</Text>
                <Text>Payment Methods</Text>
                <Text>Deposit Expansion</Text>
                <Text>FAQ & Support</Text>
                <Text>Sitemap</Text>
                <Text>Gearbest Wallet Instruction</Text>
                <Text>FAQs about COVID-19</Text>
            </Box>
             <Box textAlign={'justify'} fontSize='12px' marginTop={'20px'}>
                <Heading as={'h4'} size="sm">Other Business</Heading>
                <Text>Partnership Programs</Text>
                <Text>Associate Program</Text>
            </Box>
             <Box textAlign={'justify'} fontSize='12px' marginTop={'20px'}>
                <Heading as={'h4'} size="sm">Download App!</Heading>
                <Text>Save $3 with App & New User Only</Text>
                <Flex>
                    <Image textAlign={'justify'} marginTop='15px' width='100px' src='https://imgs.search.brave.com/sQAGynG7zniztT33LJ-nymnJ8RdOzZpOd_TIG1JOGtw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcXJfY29kZS9x/cl9jb2RlX1BORzYu/cG5n'></Image>
                    <Image textAlign={'justify'} marginTop='15px' width='150px' src="https://imgs.search.brave.com/1keJVoMCBk8TDk4PiQO0umNta3-XPrMg4qs4f1j-tR0/rs:fit:1200:989:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL2FwcC1z/dG9yZS1nb29nbGUt/cGxheS1pY29uLTM5/LnBuZw"></Image>
                </Flex>
            </Box>
        </Flex>
        <Flex height='30px' justifyContent={'space-evenly'} width='90%' margin={'auto'} marginTop='50px'>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png'></Image>
        </Flex>
        <Flex height='30px' justifyContent={'space-evenly'} width='90%' margin={'auto'} marginTop='20px'>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png'></Image>
            <Image src='https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png'></Image>
        </Flex>
        <Flex 
        backgroundColor={'black'} 
        color='white' 
        justifyContent={'center'} 
        marginTop='30px' 
        fontSize='14px' 
        height={'50px'} 
        alignItems='center'>
            Copyright © 2014-2022 Gearbest.com. All Rights Reserved.
        </Flex>
    </Box> */}
</>
    );
}

export default Home;
