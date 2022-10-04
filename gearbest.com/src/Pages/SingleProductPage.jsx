import React from 'react';
import {useParams,Link}from "react-router-dom"
import axios from 'axios'
import {Image,Grid,GridItem,Heading,Box,Text,Flex, Button, Divider} from "@chakra-ui/react"
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import { useState } from 'react';
import {BsPaypal} from "react-icons/bs"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext/CartContext.jsx';
const SingleProductPage = () => {

    const {id} = useParams()
    const [product,setProduct] = React.useState([])
    const [count,setCount] = useState(1)
    const [cartState,cartDispatch] = useContext(CartContext)
    console.log(cartState)
    React.useEffect(()=>{
        
        axios.get(`https://mocker-server.herokuapp.com/all/${id}`)
        .then((res)=>setProduct(res.data))  
    },[])
    return (
        <div>
            <Navbar/>
                {<Grid  width='90%' margin='auto'  templateColumns={'repeat(2,1fr)'}>
                <Image marginTop='50px' border='1px solid' src={product.image}/>
                <Box>
                <Heading 
                    textAlign={'justify'} 
                    marginTop='50px' 
                    marginLeft='-150px' as={'h2'} size='md'>{product.name}
                </Heading>
                <Heading 
                    color={'white'}
                    textAlign='justify'
                    backgroundColor={'#f30240'}
                    width='128%'
                    padding={'10px'}
                    marginTop={'30px'}
                    marginLeft={'-170px'}
                    fontStyle={'italic'}>Flash Sale
                </Heading>
                <Flex  
                    width='-10px'
                    height={'70px'}
                    backgroundColor={'blackAlpha.200'}
                    marginTop='0px'
                    marginLeft='-170px'  
                    textAlign='justify' 
                    alignItem='centre'>
                <Text 
                    
                    fontStyle={'italic'} 
                    marginTop='20px' 
                    marginLeft={'20px'}
                    marginRight='20px'>Price : 
                </Text>
                <Heading    
                    marginTop={'20px'}
                    fontSize={'25px'}
                    color='red' >
                ${product.price}</Heading>
                </Flex>
                <Flex 
                    marginTop={'30px'} 
                    marginLeft='-170px'
                    alignItems={'center'}>
                <Text 
                    fontStyle={'italic'} 
                    marginRight={'70px'}>QTY : </Text>
                <Button 
                    borderRadius={'0px'} 
                    backgroundColor='white' 
                    border={'1px solid'} onClick={()=>setCount(count-1)}>-</Button>
                <Button
                     borderRadius={'0px'} 
                    backgroundColor='white' 
                    border={'1px solid'}
                    onClick={()=>setCount(count)}>{count}</Button>
                <Button
                    borderRadius={'0px'} 
                    backgroundColor='white' 
                    border={'1px solid'}
                    onClick={()=>setCount(count+1)}>+</Button>
                <Text marginLeft='20px'>in stock</Text>
                <Text marginLeft={'20px'} color={'#f30240'}>Max per order : 100</Text>
                </Flex>
                <Flex marginLeft={'-170px'} marginTop={'40px'}>
                <Link to='/cart'>
                <Button 
               onClick={()=>{
                cartDispatch({
                    type:"ADD_TO_CART",
                    payload:product
                })
               }}
                color={'white'}
                fontSize={'20px'}
                marginRight={'20px'} 
                borderRadius='0px'
                backgroundColor={'#f30240'}>Add To Cart</Button>
                </Link>
                <Button
                fontSize={'20px'}
                color={'#f30240'} 
                marginRight={'20px'} 
                borderRadius='0px' 
                backgroundColor={'pink'} 
                border='2px solid #f30240'>Buy Now</Button>
                <Button
                border={'1px solid'} 
                fontSize={'20px'}
                marginRight={'20px'} 
                borderRadius='0px' 
                backgroundColor={'#ffc439'}><BsPaypal/> Paypal </Button>
                </Flex>
                </Box>
                </Grid>}
        <Box marginTop={'50px'} textAlign='justify' marginLeft={'60px'} width='90%'>
            <Heading as='h4' size={'sm'}>Main Features</Heading>
            <Divider opacity={'12px'} marginTop={'10px'} marginBottom='10px' width={'100%'}/>
            <Text>4K HD Dual Lens Wifi Camera 170° Wide Angle Outdoor Sports Micro Camera Night Vision Home Surveillance Car Driving Recorder</Text>
            <Text>
                D3 parameters:
                <br />
                APP: FtyCamPro (Chinese, English and Russian)
                Telephoto lens: 16 million pixels + wide-angle lens 170 degrees 16 million pixels (dual lens 32 million pixels)
                Video Resolution: 4k
                Built-in battery, speaker, microphone, WiFi
                <br />
                <br />
                Function:
                Photo, video, recording, voice intercom, global Wi-Fi remote mobile phone (any brand) tablet can monitor, remote control LED night vision light to turn on, power failure can be powered by mobile power or socket, or by itself - built-in battery to continue recording, power failure Recording, magnet, built-in hotspot connection, disconnect video recording, support 128G memory card and APP to save photos and videos to the phone
                <br />
                <br />  
                Uses: bicycle and motorcycle riding, outdoor extreme sports skydiving, aerial camera, driving recorder, store monitoring, warehouse video, real-time babysitting for the elderly (using mobile phones to remotely check the status of children and the elderly) home when not at home) family living room Monitoring, corridor monitoring, home door monitoring, office, travel, conference, classroom, pet care, magnetic refrigerator, warehouse iron rack, and other iron products
                <br />
                <br />
                easy installation:
                Distributed 360 rotating magnetic bracket, no drilling, no welding, plug and play, support 1/4 thread interface, with lanyard interface
                <br />
                <br />
                Key Features:
                1. Power on: Press the circular button in the middle to power on, and the green light starts to flash.
                Connect to the Internet, enter the WiFi settings of the mobile phone, connect the device, the blue light flashes once to indicate that the connection is successful 2. Take a photo
                : Click the left button to take a photo successfully (the light is not on when taking a photo, the APP interface will have a photo prompt sound, and the photo mute can be adjusted)
                3. Recording: Right-click to start recording (there will be a recording opening prompt on the APP interface), then right-click to save the recording successfully
                4. Rotate the screen (press and hold the up button for 4 seconds, you can see that the screen is rotated successfully on the APP interface) This function is used for the driving recorder
                5. Lighting: press the up button to turn on/off the lights
                6. Reset network/restart reset: press and hold the up button until the green light flashes to restore the restart state (the device needs to be reconnected at this time)
                7. Lens switching: long press the up button to switch between wide-angle-angle/telephoto lens shooting
                <br />
                <br />
                packing list:
                1 X Dual Lens Wifi Camera
                1 X Manual
                1 X Charging Cable
            </Text>
        </Box>
            <Footer/>
        </div>
    );
}

export default SingleProductPage;
