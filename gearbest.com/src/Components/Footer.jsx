import React from 'react';
import styles from "./Footer.module.css"
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
import "swiper/css/bundle";
import {FiThumbsUp} from "react-icons/fi"
import {BsShop} from "react-icons/bs"
import {TbBus} from "react-icons/tb"
import {AiOutlineStar} from "react-icons/ai"
import {SiFacebook} from "react-icons/si"
import {BsMessenger ,BsYoutube,BsInstagram} from "react-icons/bs"
import {FaPinterestSquare,FaBlogger} from "react-icons/fa"
const Footer = () => {
    return (
        <div >
             <Box className={styles.footerSection} >
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
        width='100%'
        backgroundColor={'black'} 
        color='white' 
        justifyContent={'center'} 
        marginTop='30px' 
        fontSize='14px' 
        height={'50px'} 
        alignItems='center'>
            Copyright © 2014-2022 Gearbest.com. All Rights Reserved.
        </Flex>
    </Box>
        </div>
    );
}

export default Footer;
