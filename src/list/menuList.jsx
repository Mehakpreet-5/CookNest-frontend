
import Dosa from '../assets/dosaimg.webp';

import butterChicken from '../assets/foodlist/butter.jpg';
import paneerTikka from '../assets/foodlist/tikka.jpg';
import roganJosh from '../assets/foodlist/rosh.png';
import dalMakhani from '../assets/foodlist/dal.jpg';
import alooParatha from '../assets/foodlist/paranda.jpg';
import choleBhature from '../assets/foodlist/chole.jpg';
import raita from '../assets/foodlist/raii.jpg';

import kulfi from '../assets/foodlist/download (1).jpg';
import iceCreamSundae from '../assets/foodlist/mixIce.webp';
import mangoIceCream from '../assets/foodlist/download (2).jpg';
import butterscotchIceCream from '../assets/foodlist/download (3).jpg';
import vanillaIceCream from '../assets/foodlist/download (4).jpg';
import strawberryIceCream from '../assets/foodlist/download (5).jpg';
import pineappleIceCream from '../assets/foodlist/download (6).jpg';

import chocolateCake from '../assets/foodlist/download (7).jpg';
import gulabJamun from '../assets/foodlist/download (8).jpg';
import jalebi from '../assets/foodlist/download (9).jpg';
import kheer from '../assets/foodlist/download (10).jpg';
import gajarKaHalwa from '../assets/foodlist/download (11).jpg';
import milkCake from '../assets/foodlist/download (12).jpg';

import samosa from '../assets/foodlist/download (13).jpg';
import pavBhaji from '../assets/foodlist/download (14).jpg';
import dosa from '../assets/foodlist/download (16).jpg';
import masalaDosa from '../assets/foodlist/download (17).jpg';
import bhelPuri from '../assets/foodlist/download (18).jpg';
import momos from '../assets/foodlist/download (19).jpg';
import pakora from '../assets/foodlist/download (20).jpg';

import chickenTikka from '../assets/foodlist/download (21).jpg';
import chickenBiryani from '../assets/foodlist/download (22).jpg';
import tandooriChicken from '../assets/foodlist/download (23).jpg';
import chickenKorma from '../assets/foodlist/download (24).jpg';
import chicken65 from '../assets/foodlist/download (25).jpg';

import paneerButterMasala from '../assets/foodlist/download (26).jpg';
import chanaMasala from '../assets/foodlist/download (27).jpg';
import palakPaneer from '../assets/foodlist/download (28).jpg';
import vegetableBiryani from '../assets/foodlist/download (29).jpg';
import alooGobi from '../assets/foodlist/download (30).jpg';
import bainganBharta from '../assets/foodlist/download (31).jpg';
import dhokla from '../assets/foodlist/dhokla.jpg';

import masalaChai from '../assets/foodlist/download (32).jpg';
import lassi from '../assets/foodlist/download (33).jpg';
import mangoLassi from '../assets/foodlist/download (34).jpg';
import coconutWater from '../assets/foodlist/download (35).jpg';
import cocaCola from '../assets/foodlist/download (36).jpg';
import pepsi from '../assets/foodlist/peps.jpg';

const menu = [
  {
    foodType: "North Indian",
    image: raita,
    dishes: [
      { name: "Butter Chicken", price: "₹350", image: butterChicken },
      { name: "Paneer Tikka", price: "₹220", image: paneerTikka },
      { name: "Rogan Josh", price: "₹320", image: roganJosh },
      { name: "Dal Makhani", price: "₹150", image: dalMakhani },
      { name: "Aloo Paratha", price: "₹50", image: alooParatha },
      { name: "Chole Bhature", price: "₹90", image: choleBhature },
      { name: "Raita", price: "₹40", image: raita }
    ]
  },
  {
    foodType: "Ice Cream",
    image: iceCreamSundae,
    dishes: [
      { name: "Kulfi (Malai, Mango, Pistachio)", price: "₹60", image: kulfi },
      { name: "Ice Cream Sundae", price: "₹80", image: iceCreamSundae },
      { name: "Mango Ice Cream", price: "₹50", image: mangoIceCream },
      { name: "Butterscotch Ice Cream", price: "₹50", image: butterscotchIceCream },
      { name: "Vanilla Ice Cream", price: "₹50", image: vanillaIceCream },
      { name: "Strawberry Ice Cream", price: "₹50", image: strawberryIceCream },
      { name: "Pineapple Ice Cream", price: "₹50", image: pineappleIceCream }
    ]
  },
  {
    foodType: "Sweet",
    image: kheer,
    dishes: [
      { name: "Chocolate Cake", price: "₹200", image: chocolateCake },
      { name: "Gulab Jamun", price: "₹60", image: gulabJamun },
      { name: "Jalebi", price: "₹50", image: jalebi },
      { name: "Kheer", price: "₹80", image: kheer },
      { name: "Gajar Ka Halwa", price: "₹100", image: gajarKaHalwa },
      { name: "Milk Cake", price: "₹120", image: milkCake }
    ]
  },
  {
    foodType: "Fast Food",
    image: samosa,
    dishes: [
      { name: "Samosa", price: "₹20", image: samosa },
      { name: "Pav Bhaji", price: "₹70", image: pavBhaji },
      { name: "Chole Bhature", price: "₹90", image: choleBhature },
      { name: "Dosa", price: "₹60", image: dosa },
      { name: "Masala Dosa", price: "₹70", image: masalaDosa },
      { name: "Bhel Puri", price: "₹40", image: bhelPuri },
      { name: "Momos", price: "₹60", image: momos },
      { name: "Pakora", price: "₹30", image: pakora }
    ]
  },
  {
    foodType: "Chicken",
    image: chickenKorma,
    dishes: [
      { name: "Butter Chicken", price: "₹250", image: butterChicken },
      { name: "Chicken Tikka", price: "₹180", image: chickenTikka },
      { name: "Chicken Biryani", price: "₹200", image: chickenBiryani },
      { name: "Tandoori Chicken", price: "₹220", image: tandooriChicken },
      { name: "Chicken Korma", price: "₹200", image: chickenKorma },
      { name: "Chicken 65", price: "₹150", image: chicken65 }
    ]
  },
  {
    foodType: "Veg",
    image: chanaMasala,
    dishes: [
      { name: "Paneer Butter Masala", price: "₹180", image: paneerButterMasala },
      { name: "Chana Masala", price: "₹130", image: chanaMasala },
      { name: "Palak Paneer", price: "₹150", image: palakPaneer },
      { name: "Vegetable Biryani", price: "₹130", image: vegetableBiryani },
      { name: "Aloo Gobi", price: "₹100", image: alooGobi },
      { name: "Baingan Bharta", price: "₹110", image: bainganBharta },
      { name: "Dhokla", price: "₹50", image: dhokla }
    ]
  },
  {
    foodType: "Drinks",
    image: lassi,
    dishes: [
      { name: "Masala Chai", price: "₹20", image: masalaChai },
      { name: "Lassi (Sweet/Salted)", price: "₹40", image: lassi },
      { name: "Mango Lassi", price: "₹50", image: mangoLassi },
      { name: "Coconut Water", price: "₹30", image: coconutWater },
      { name: "Coca Cola", price: "₹20", image: cocaCola },
      { name: "Pepsi", price: "₹20", image: pepsi }
    ]
  }
];

export default menu;
