import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCampground } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";

export const locationsTab = [
  { id: 0, label: "Chicken", icon: <MdOutlineApartment size={24} /> },
  { id: 1, label: "Mexican", icon: <BsSnow size={24} /> },
  { id: 2, label: "Desserts", icon: <MdHouseSiding size={24} /> },
  { id: 3, label: "Fast Food", icon: <MdOutlineWater size={24} /> },
  { id: 4, label: "American", icon: <GiKidSlide size={24} /> },
  { id: 5, label: "Burgers", icon: <AiOutlineCoffee size={24} /> },
  { id: 6, label: "Comfort Food", icon: <GiSpaceNeedle size={24} /> },
  { id: 7, label: "Salad", icon: <FaCampground size={24} /> },
  { id: 8, label: "Sandwiches", icon: <GiCampingTent size={24} /> },
  { id: 9, label: "Chinese", icon: <GiLightningDome size={24} /> },
  { id: 10, label: "Breakfast", icon: <BiHomeAlt size={24} /> },
  { id: 11, label: "Seafood", icon: <GiEvilTree size={24} /> },
  { id: 12, label: "Healthy", icon: <GiWaveSurfer size={24} /> },
  { id: 13, label: "Pizza", icon: <GiMountainCave size={24} /> },
  { id: 14, label: "Noodles", icon: <GiCaveEntrance size={24} /> },
  { id: 15, label: "Japanese", icon: <GiGolfFlag size={24} /> },
  { id: 16, label: "Soup", icon: <MdCabin size={24} /> },
  { id: 17, label: "Sushi", icon: <RiEarthquakeFill size={24} /> },
];
