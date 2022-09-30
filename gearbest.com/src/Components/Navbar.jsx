import React from 'react';
import { 
    Image, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    useDisclosure,
    Text, 
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Portal,
    Option,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Heading,
    Container,
    PopoverFooter,
    Stack,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem} from "@chakra-ui/react"
import styles from "./Navbar.module.css"
import {IoIosPhonePortrait} from "react-icons/io"
import {BsChevronDown} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import { Link,NavLink } from 'react-router-dom';
import {FaRegUser} from "react-icons/fa"
import {BsHeart} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {BsCart2} from "react-icons/bs"

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    return (
        <>
      
    <Flex className={styles.mainFlex}> 
        <Flex className={styles.savewithappModal} ref={finalRef}  onMouseEnter={onOpen}><IoIosPhonePortrait/> Save $3 with App      <BsChevronDown/></Flex>
        <Flex className={styles.supportText}>Support Centre</Flex>
        {/* </Flex> */}

      <Modal
      size='sm'
       isOpen={isOpen} 
       onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Download App!</ModalHeader>
          <Text className={styles.downloadapptext}>Save $3 with App & New User Only</Text>
          <ModalCloseButton />
          <ModalBody >
            <Flex className={styles.imagedownloadsection}>
           <Image className={styles.qrcodeimage} src='https://imgs.search.brave.com/sQAGynG7zniztT33LJ-nymnJ8RdOzZpOd_TIG1JOGtw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcXJfY29kZS9x/cl9jb2RlX1BORzYu/cG5n'/>
           <Image className={styles.appstoreimage} src="https://imgs.search.brave.com/1keJVoMCBk8TDk4PiQO0umNta3-XPrMg4qs4f1j-tR0/rs:fit:1200:989:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL2FwcC1z/dG9yZS1nb29nbGUt/cGxheS1pY29uLTM5/LnBuZw" /></Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Flex  className={styles.shippingModal}  onClick={onOpen}>Ship To <BsChevronDown/> </Flex> */}
        <Popover >
            <PopoverTrigger>        
                <Flex className={styles.shippingModal}>Ship To / USD <BsChevronDown/></Flex>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
               <Heading as='h5' size='sm'>Select Regional Settings</Heading>
                {/* <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody> */}
                <FormControl>
                    <FormLabel>Ship To</FormLabel>
                    <Select>
                        <option value=''>India</option>
                        <option value=''>USA</option>
                        <option value=''>Brazil</option>
                        <option value="">UK</option>
                        <option value="">Tunisia</option>
                        <option value="">Bangladesh</option>
                        <option value="">Pakistan</option>
                        <option value="">Saudi Arabia</option>
                        <option value="">New Zeland</option>
                        <option value="">Australia</option>
                        <option value="">South Africa</option>
                        <option value="">Itley</option>
                        <option value="">Poland</option>
                        <option value="">Germany</option>
                        <option value="">Philiphines</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                        <option value="">West Indies</option>
                        <option value="">Iraq</option>
                        <option value="">Finalnd</option>
                    </Select>
                    <FormLabel>Currency</FormLabel>
                    <Input placeholder='Enter Currency'></Input>
                </FormControl>
            </PopoverContent>
        </Popover>
      <Flex alignItems='center' className={styles.language}>Language <BsChevronDown/></Flex>
        <Popover size='sm' orientation='horizontal'>
            <PopoverTrigger>        
                <Flex alignItems='center' marginLeft='50px'>Country Website <BsChevronDown/></Flex>
            </PopoverTrigger>
            <PopoverContent >
                <PopoverArrow />
                <PopoverCloseButton />
               <Text >English(Global)</Text>
               <Text>Japanese</Text>
               <Text>Hindi</Text>
               <Text>Marathi</Text>
               <Text>Chinese</Text>
               <Text>Urabic</Text>
               <Text>France</Text>
               <Text>Detchland</Text>
               <Text>Portugal</Text>
            </PopoverContent>
        </Popover>
    </Flex>  
    <Flex>
      <Image className={styles.logo} src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png'/>
            <Flex>
            <Popover className={styles.inputPopOver}>
                <PopoverTrigger>
                    <Flex className={styles.inputCategories}>All <BsChevronDown/></Flex>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent lineHeight='25px' padding='15px'>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <Link>Market Place</Link>
                    <Divider/>
                    <Link>Gearbest Selection</Link>
                    <Divider/>
                    <Link>Cell Phone & Accessories</Link>
                    <Divider/>
                    <Link>Gearbest Women Collection</Link>
                    <Divider/>
                    <Link>Gearbest Mens Collection</Link>
                    <Divider/>
                    <Link>Consumer Electronics</Link>
                    <Divider/>
                    <Link>Women's Bags</Link>
                    <Divider/>
                    <Link>Drones, Toys & Hobbies</Link>
                    <Divider/>
                    <Link>Industrial & Scientific</Link>
                    </PopoverContent>
                </Portal>
            </Popover>
            <Stack><Input 
            placeholder="Phones"
            width='400px'
            height='42px'
            border='2px solid'
            borderColor='#ffda00'
            borderRadius='0px' 
            borderLeftColor='white'
            marginTop='30px'></Input></Stack>
            <Box className={styles.inputButton}><BsSearch className={styles.searchIcon}/></Box>
        {/* ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ */}
            <Menu>
                <MenuButton><Flex 
                alignItems='center' 
                marginTop='30px'
                marginLeft='20px'  
                as={Text}> <FaRegUser size='25px'/>Sign In</Flex></MenuButton>
                <MenuList zIndex={'10'} width='300px'>
                    <MenuItem  >Welcome to Gearbest</MenuItem>
                    <Link to='/login'><Button backgroundColor=' #ffda00' width='80%'marginTop='20px' >Sign In</Button></Link>
                    <MenuItem marginTop='20px'>Or connect via <FcGoogle size='20px' marginLeft='10px'/></MenuItem>
                    <Divider/>
                    <MenuItem marginTop='20px'>Register on Gearbest: Earn 10 points</MenuItem>
                    <Link to='/signup'><Button backgroundColor='blue.200' width='80%'marginTop='20px' marginBottom='15px'>Register</Button></Link>
                </MenuList>
            </Menu>
        {/* ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ */}
            <Flex className={styles.favTextFlex}><BsHeart size='25px' className={styles.FavIcon}/> <Text className={styles.favText} as={'h5'} size='25px' >Favorites</Text> </Flex>
            </Flex>
            <Flex marginTop='25px' marginLeft='-10px' alignItems='center' >
                <BsCart2 size='25px' />
                <Link to='/cart'><Text marginLeft='10px'>Cart</Text></Link>
            </Flex>
    </Flex>  
     
    {/* <Flex width='80%' margin='auto' marginTop='20px'>
        <Text width='250px' backgroundColor='black' color='white'padding='8px'>Category</Text>
        <Flex justifyContent='space-around' backgroundColor=' #ffda00'padding='10px'>
           
        </Flex>
    </Flex> */}
    </> 
    );
}

export default Navbar;
