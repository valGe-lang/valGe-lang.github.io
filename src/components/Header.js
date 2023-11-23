import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box,
         HStack,
         VStack,
         Modal, 
         ModalOverlay,
         useDisclosure,
         ModalContent,
         ModalHeader,
         ModalBody,
         Text,
         ModalFooter,
         Button,
         ModalCloseButton
         } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: valtterigoos@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/valGe-lang",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/valtteri-g%C3%B6%C3%B6s-277916234/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
   {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/",
  },
];

const Header = () => {
  const headerRef = useRef(null);
useEffect(() => {
  let prevScrollPos = window.scrollY;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;
    if(!headerElement) {
      return;
    }
    if(prevScrollPos > currentScrollPos) {
      headerElement.style.transform = "translateY(0)";
    } else {
      headerElement.style.transform = "translateY(-200px)";
    }
    prevScrollPos = currentScrollPos;
  }
  window.addEventListener('scroll', handleScroll)

  return() => {
    window.removeEventListener('scroll', handleScroll)
  }
}, []);

const Overlay = () => (
  <ModalOverlay
   bg='none'
   backdropFilter='auto'
   backdropBlur='2px'
    />
)

  const { isOpen, onOpen, onClose} = useDisclosure()
  const [overlay, setOverlay] = React.useState(<Overlay />)

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box>
     
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".2s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      
            
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >

          <nav>
            <HStack spacing={6}>
            <a href="https://github.com/valGe-lang"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <FontAwesomeIcon ml='4' onClick={() => { setOverlay(<Overlay/>); onOpen()}} icon={faEnvelope} size="2x" />
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
        <ModalContent>
          <ModalHeader>Email Address:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' fontsize='20px'>valtterigoos@gmail.com</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
            </Modal>
            <a href="https://www.linkedin.com/in/valtteri-g%C3%B6%C3%B6s-277916234/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="https://medium.com"><FontAwesomeIcon icon={faMedium} size="2x"/></a>
            <a href="https://stackoverflow.com/"><FontAwesomeIcon icon={faStackOverflow} size="2x"/></a>
            </HStack>
           
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>        
      </Box>      
    </Box>
    </Box>

    
    
   
    
    

  );
};
export default Header;
