
import FryDeals from "@/components/homeComponents/FryDeals";
import GetInspired from "@/components/homeComponents/GetInspired";
import MainCarousel from "@/components/homeComponents/MainCarousel";
import ShopByRoom from "@/components/homeComponents/ShopByRoom";
import TopBrands from "@/components/homeComponents/TopBrands";
import WinterEdit from "@/components/homeComponents/WinterEdit";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Hide,
  // Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import LoginModal from "@/components/loginModal";
import SignupModal from "@/components/signupModal";
// import { Heading } from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const SHOP_BY_ROOM = [
    {
      name: "Shop Living Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg",
    },
    {
      name: "Shop Bedroom",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg",
    },
    {
      name: "Shop Dining Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg",
    },
    {
      name: "Shop Study Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Home Interior</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={"8xl"}>
        <Stack gap={10}>
          <Heading>home</Heading>
          <Flex gap={5}>
            <MainCarousel />
            <Hide below="sm">
              <Image
                src={
                  "https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg"
                }
                width={0}
                height={0}
                sizes="100vw"
                alt="image"
                style={{ width: "22%", height: "auto", paddingBottom: "6px" }}
              />
            </Hide>
          </Flex>

          <Hide below="sm">
            <Link href={"#"}>
              <Image
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_2712.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="image"
                style={{ width: "100vw", height: "auto" }}
              />
            </Link>
          </Hide>
          
          <ShopByRoom />

          <FryDeals />

          <GetInspired />

          <TopBrands />

          <WinterEdit />
        </Stack>
      </Container>
      <Heading>home</Heading>
      <SignupModal/>
      <LoginModal/>
    </>
  );
}
