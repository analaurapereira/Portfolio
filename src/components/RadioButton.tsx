import React, { useState } from 'react';
import Slider from 'react-slick';
import {  
  Input,
  Label,
  FirstCheckedSelection,
  SecondCheckedSelection,
  ThirdCheckedSelection,
  FourthCheckedSelection,
  Radio,
  CheckedLabel,
  RadioInputContainer,
} from '../styles/radioButton';
import { Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9 } from '../texts/radioButtonText';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const RadioInput: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('value-1');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 9999, // A large number to cover all larger screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

    
    


    const renderLabel = (value: string, label: string) => (
      <Label key={value}>
        <Input
          value={value}
          name="value-radio"
          id={value}
          type="radio"
          checked={selectedOption === value}
          onChange={handleOptionChange}
        />
        {selectedOption === value ? (
          <CheckedLabel>{label}</CheckedLabel>
        ) : (
          <span>{label}</span>
        )}
        {selectedOption === value && getSelectionComponent(value)}
      </Label>
    );

    const getSelectionComponent = (value: string) => {
      switch (value) {
        case 'value-1':
          return <FirstCheckedSelection className="selection"></FirstCheckedSelection>;
        case 'value-2':
          return <SecondCheckedSelection className="selection"></SecondCheckedSelection>;
        case 'value-3':
          return <ThirdCheckedSelection className="selection"></ThirdCheckedSelection>;
        case 'value-4':
          return <FourthCheckedSelection className="selection"></FourthCheckedSelection>;
        default:
          return null;
      }
    };

    return (
      <Radio>
        <Slider {...settings}>
          <RadioInputContainer>{renderLabel('value-1', 'Inglês')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-2', 'Português')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-3', 'DevLinks: minha primeira página web')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-4', 'CS50: o curso de Harvard, no Brasil')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-5', 'Matemática')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-6', 'Google Cloud Foundations')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-7', 'Modelagem de Dados')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-8', 'Google Sheets')}</RadioInputContainer>
          <RadioInputContainer>{renderLabel('value-9', 'Power BI')}</RadioInputContainer>
        </Slider>

        <div className="radio-carousel">
          <div className="content">
            {selectedOption === 'value-1' && <div><Text1 /></div>}
            {selectedOption === 'value-2' && <div><Text2 /></div>}
            {selectedOption === 'value-3' && <div><Text3 /></div>}
            {selectedOption === 'value-4' && <div><Text4 /></div>}
            {selectedOption === 'value-5' && <div><Text5 /></div>}
            {selectedOption === 'value-6' && <div><Text6 /></div>}
            {selectedOption === 'value-7' && <div><Text7 /></div>}
            {selectedOption === 'value-8' && <div><Text8 /></div>}
            {selectedOption === 'value-9' && <div><Text9 /></div>}
          </div>
        </div>
      </Radio>
    );
  };  