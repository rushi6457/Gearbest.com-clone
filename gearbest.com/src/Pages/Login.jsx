import React from 'react';
import {Box, Container, Flex, Heading, Image, Input, VStack,Text, Checkbox, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import styles from "../PageStyles/Signup.module.css"
import {FcGoogle} from "react-icons/fc"
  const links = 
    [
        {
            path:'/login',
            title:'SIGN IN'
        },
        {
            path:'/signup',
            title:'REGISTER'
        }
    ]

const Signup = () => {

  
    return (
        <div>
           <Image width='300px' padding={'30px'}marginLeft='70px' src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png'></Image>

           <Box >
                <Box 
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
                marginLeft={'800px'}
                padding={'20px'}
                height='450px'
                gap='100px' 
                marginTop='30px'
                width='35%'
                paddingRight={'150px'}
               >
                  {links.map((el)=><NavLink key={el.path} to={el.path}
                   className={({ isActive }) =>
                    isActive ? styles.active : styles.default
                }
                  >
                    {el.title}
                  </NavLink>)}
                  
                  <Container>
                     <VStack marginTop={'40px'} width='140%'> 
                        <Input size='md' borderRadius={'0px'} placeholder='Email'></Input>
                        <Input size='md' borderRadius={'0px'} placeholder='Password'></Input>
                          <Flex
                          alignItems='center'
                          justifyContent='space-evenly'
                          ><Checkbox 
                          marginTop='15px'
                          size='md' 
                          colorScheme='yellow'>
                            <Text 
                            fontSize='13px'>Keep me Sign in</Text>
                            </Checkbox>
                            <Text marginTop='10px' fontSize='13px'textDecoration='underline' marginLeft='150px'>Forgot Password</Text>
                            </Flex>
                    </VStack>
                            <Button _hover={'none'} borderRadius={'0px'} backgroundColor='#ffda00'  marginTop='40px' width={'140%'}>Register</Button>
                            <Text marginTop={'25px'} textAlign='center' marginLeft={'100px'}>or connect via</Text>
                            <Flex justifyContent={'center'} marginLeft='100px' marginTop={'10px'}><FcGoogle fontSize={'50px'}/></Flex>
                </Container>          
                </Box>        
           </Box>
           <Flex marginLeft='40%'height='30px'  width='100px' marginTop='100px'><Image marginRight='20px' src='https://css.gbtcdn.com/imagecache/gbw/img/site/money_back2@.png'></Image>
           <Image marginRight='20px' src='https://css.gbtcdn.com/imagecache/gbw/img/site/mcafee_secure@.png'></Image>
           <Image marginRight='20px' src='https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png'></Image></Flex>
            <Text marginTop='10px' fontSize='12px'>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</Text>
        </div>
    );
}

export default Signup;
