import sliderImage1 from "../Index/slider-bg-1.jpg";
import sliderImage2 from "../Index/slider-bg-5.jpg";
import cardImage1 from "../CardImages/imgbox-1-375x500.jpg";
import cardImage2 from "../CardImages/imgbox-1-375x240.jpg";
import cardImage3 from "../CardImages/imgbox-2-375x240.jpg";
import cardImage4 from "../CardImages/imgbox-2-375x500.jpg";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const sliderImages = [sliderImage1, sliderImage2];
export const cardImages = [cardImage1, cardImage2, cardImage3, cardImage4];
export const iconBoxContent = [
  {
    icon: faTruckMoving,
    title: "Free Shipping",
    subtitle: "The Internet Trend To Repeat",
  },
  {
    icon: faMoneyBillAlt,
    title: "Cash On Delivery",
    subtitle: "The Internet Trend To Repeat",
  },
  {
    icon: faGift,
    title: "Gift For All",
    subtitle: "The Internet Trend To Repeat",
  },
  {
    icon: faClock,
    title: "Opening All Week",
    subtitle: "6.00 am - 17.00pm",
  },
];
