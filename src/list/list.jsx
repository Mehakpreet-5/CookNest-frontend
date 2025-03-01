import React from 'react';
import { LuCakeSlice } from 'react-icons/lu';
import { FaHamburger } from 'react-icons/fa';
import { CiPizza, CiIceCream } from 'react-icons/ci';
import { MdDeliveryDining } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import { LiaCocktailSolid } from 'react-icons/lia';

const List = [
  {
    title: "Wedding Services",
    description: "Elegant catering and themed setups.",
    icon: <LuCakeSlice size={105} />
  },
  {
    title: "Bento Catering",
    description: "Individually packed bento boxes for events.",
    icon: <FaHamburger size={105} />
  },
  {
    title: "Corporate Catering",
    description: "Catering for conferences and office events, all meal options.",
    icon: <CiPizza size={105} />
  },
  {
    title: "Buffet & Food Stations",
    description: "Buffets and interactive food stations like taco bars.",
    icon: <ImSpoonKnife size={105} />
  },
  {
    title: "Outdoor BBQ  Services",
    description: "Grilling services with meats, seafood, and veggie options.",
    icon: <IoFastFoodOutline size={105} />
  },
  {
    title: "Cocktail  Catering",
    description: "Bar service with cocktails, mocktails, and more.",
    icon: <LiaCocktailSolid size={105} />
  },
  {
    title: "Home Delivery",
    description: "Custom catering for birthdays and celebrations.",
    icon: <MdDeliveryDining size={105} />
  },
  {
    title: "Dessert  Bars",
    description: "Dessert tables with cakes, cupcakes, and sweets.",
    icon: <CiIceCream size={105} />
  }
];

export default List;
