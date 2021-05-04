import {BbcIcon,
    GuardianIcon,
    TechCrunchIcon,
    DailyTelegraphIcon,
    EveningStandardIcon,
    ItvIcon,
    TesIcon, 
    MetroIcon} from '@components/icons';
import React from 'react';


    
interface IPressSlider {
    Icon: React.FC<any>;
    label: string;
  }
  
  export const pressSlider: IPressSlider[] = [
    {
      label: 'theguardian',
      Icon: GuardianIcon 
    },
    {
      label: 'bbc',
      Icon: BbcIcon
    },
    {
      label: 'dailyTelegraph',
      Icon: DailyTelegraphIcon
    },
    {
      label: 'metro',
      Icon: MetroIcon
    },
    {
      label: 'eveningStandard',
      Icon: EveningStandardIcon
    },
    {
      label: 'itv',
      Icon: ItvIcon
    },
    {
      label: 'techCrunch',
      Icon: TechCrunchIcon
    },
    {
      label: 'tes',
      Icon: TesIcon
    }
  ];
  
  export const carouselConfigs = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };