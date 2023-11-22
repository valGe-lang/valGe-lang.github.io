import React from "react";
import {  Heading, VStack, Img } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from '../images/photo_5.jpg';

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
  <Img src={photo} borderRadius="140px" height="300px" width="300px"  />
  <Heading>{greeting}</Heading>
  <VStack spacing={1}>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </VStack>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;