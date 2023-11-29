import React from "react";
import img1 from "../../images/Rectangle-1-1x.jpg"; // Шлях до вашого зображення
import img2 from "../../images/Rectangle-2-1x.jpg"; // Шлях до вашого зображення
import img3 from "../../images/Rectangle-3-1x.jpg"; // Шлях до вашого зображення
import img4 from "../../images/Rectangle-4-1x.jpg"; // Шлях до вашого зображення

import dealsData from "../../dealsData.json";

import {
  DealsContainer,
  HeroText,
  DealsList,
  DealItem,
  Image,
  DealDescription,
  DealInfo,
  DescriptionAbout,
  DescriptionAboutText,
  DescriptionAboutTextHero,
} from "./Styled.Main";
const Deals = () => {
  const imagesArray = [
    img1,
    img2,
    img3,
    img4,
    // Додайте інші імпорти зображень за потреби
  ];

  return (
    <DealsContainer>
      <HeroText>Open Deals</HeroText>
      <DealsList>
        {dealsData.map((deal, index) => (
          <DealItem key={index}>
            <Image src={imagesArray[index]} alt={`Image ${index + 1}`} />
            <DealInfo>
              <DealDescription>
                <DescriptionAbout>
                  <DescriptionAboutTextHero>
                    {deal.title}
                  </DescriptionAboutTextHero>
                  <DescriptionAboutText>{deal.price}</DescriptionAboutText>
                  <DescriptionAboutText>
                    {deal.ticketPrice}
                  </DescriptionAboutText>
                </DescriptionAbout>
                <DescriptionAbout>
                  <DescriptionAboutText>{deal.yield}</DescriptionAboutText>
                  <DescriptionAboutText>{deal.daysLeft}</DescriptionAboutText>
                </DescriptionAbout>
                <DescriptionAbout>
                  <DescriptionAboutText>{deal.sold}</DescriptionAboutText>
                </DescriptionAbout>
              </DealDescription>
            </DealInfo>
          </DealItem>
        ))}
        {/* <DealItem>
          <Image src={img1} alt="Image 1" />
          <DealInfo>
            <DealDescription>
              <DescriptionAbout>
                <DescriptionAboutTextHero>
                  The Marina Torch
                </DescriptionAboutTextHero>
                <DescriptionAboutText>6 500 000 Dhs</DescriptionAboutText>
                <DescriptionAboutText>Tiket - 60 000 Dhs</DescriptionAboutText>
              </DescriptionAbout>
              <DescriptionAbout>
                <DescriptionAboutText>Yield 9.25%</DescriptionAboutText>
                <DescriptionAboutText>Days left 150 </DescriptionAboutText>
              </DescriptionAbout>
              <DescriptionAbout>
                <DescriptionAboutText>Sold 75%</DescriptionAboutText>
              </DescriptionAbout>
            </DealDescription>
          </DealInfo>
        </DealItem> */}
        {/* <DealItem>
          <Image src={img2} alt="Image 1" />
        </DealItem>
        <DealItem>
          <Image src={img3} alt="Image 1" />
        </DealItem>
        <DealItem>
          <Image src={img4} alt="Image 1" />
        </DealItem> */}
      </DealsList>
    </DealsContainer>
  );
};

export default Deals;
