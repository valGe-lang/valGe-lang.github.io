import React from "react";
import {  Heading, VStack, Img } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from '../images/photo5.jpg';

const greeting = "Hello, I am Valtteri!";
const bio1 = "A frontend developer";
const bio2 = "Learning React!";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
  <Img src={photo} borderRadius='full' boxSize='300px' objectFit='cover' paddingTop="10px" />
  <Heading as='h1' size='xl'>{greeting}</Heading>
  <VStack spacing={1}>
    <Heading as='h2' size='2xl'>{bio1}</Heading>
    <Heading as='h2' size='2xl'>{bio2}</Heading>
  </VStack>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
