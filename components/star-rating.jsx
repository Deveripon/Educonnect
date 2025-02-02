import StarSvg from "@/public/assets/star.svg";
import Image from "next/image";

const StarRating = ({ rating }) => {
    const stars = new Array(rating).fill("stars");
    return stars.map((_, index) => (
        <Image key={index} src={StarSvg} alt='rating' />
    ));
};

export default StarRating;
