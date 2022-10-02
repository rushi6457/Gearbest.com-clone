import React from 'react';
import {Box, Container, Flex,FormControl, Heading, Image, Input, VStack,Text, Checkbox, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import styles from "../PageStyles/Signup.module.css"
import {FcGoogle} from "react-icons/fc"
import {AuthContext} from "../Context/AuthContextComponent.jsx"
import {useNavigate} from "react-router-dom"
import {Navigate} from "react-router-dom"
import axios from 'axios'
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
 
const Login = () => {
  const [state,dispatch] = React.useContext(AuthContext)
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const navigate = useNavigate()
  console.log(state)

    const handleSubmit =() =>{
    
      dispatch({
        type:"LOGIN_REQUEST",
        payload:{
            isAuth:false,
            isLoading:true
        }
      });
      axios.post("https://reqres.in/api/login",{
        email,
        password
      })
      .then((res)=>{
        console.log(res)
        dispatch({
          type:'LOGIN_SUCCESS',
          payload:{
            token:res.data.token,
            isAuth:true,
            isLoading:false
          }
        })
         navigate('/')
      })
      .catch((err)=>{
        dispatch({
          type:"LOGIN_FAIL",
          payload:{
            isAuth:"false",
            isLoading:false,
            isError:true
          }         
        })
        alert(err , 'SOMETHING WENT WRONG')
      })
  }
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
                   <FormControl>
                     <VStack marginTop={'40px'} width='140%'> 
                     
                        <Input
                        onChange={(e)=>setEmail(e.target.value)}
                        type='email' 
                        value={email}
                        size='md' 
                        borderRadius={'0px'} 
                        placeholder='Email'></Input>
                        <Input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type='password' 
                        value={password}
                        size='md' 
                        borderRadius={'0px'} 
                        placeholder='Password'></Input>
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
                            <Button onClick={handleSubmit} _hover={'none'} borderRadius={'0px'} backgroundColor='#ffda00'  marginTop='140px' width={'100%'}>Register</Button>
                    </VStack>
                  </FormControl>
                            <Text marginTop={'25px'} textAlign='center' marginLeft={'100px'}>or connect via</Text>
                            <Flex justifyContent={'center'} marginLeft='100px' marginTop={'10px'}><FcGoogle fontSize={'50px'}/></Flex>
                </Container>          
                </Box>        
           </Box>
           <Flex 
           marginLeft='40%'
           height='30px'  
           width='100px' 
           marginTop='100px'>
            
            <Image 
            marginRight='20px' s
            rc='https://css.gbtcdn.com/imagecache/gbw/img/site/money_back2@.png'>
            </Image>

           <Image 
           marginRight='20px' 
           src='https://css.gbtcdn.com/imagecache/gbw/img/site/mcafee_secure@.png'>
           </Image>
           <Image 
           marginRight='20px' 
           src='https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png'>
          </Image></Flex>
            <Text marginTop='10px' fontSize='12px'>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</Text>
        </div>
    );
}

export default Login;
