import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Explore Iconic Treks and Destinations effortlessly with TrekConnect hassle-free</p>

            <DestinationData
            className="first-des"
            heading="Kedarkantha Trek"
            text="Discover Kedarkantha, a stunning peak in Uttarakhand. Best time to go: Dec-Apr or Sep-Nov. Costs vary (Rs 7k - Rs 10k). Trek takes 5-6 days, covering 20km. Pack warm clothes, sturdy shoes, and basic gear. Get fit and adjust to high altitudes. Plan your trip, book in advance, and pack light. Bring water, snacks, and ID. Trek with caution; it's moderate. Consider a trusted guide. Enjoy the incredible views and unforgettable moments on this amazing adventure!"
            img1="https://escapadestherebellion.com/wp-content/uploads/2021/12/kedarkanta-hero.jpg"
            img2="https://cliffhangersindia.com/wp-content/uploads/2022/04/kedarkantha.jpeg"
            />

            <DestinationData
            className="first-des-reverse"
            heading="Kheerganga Trek"
            text="Explore the serene beauty of Kheerganga nestled in the Parvati Valley of Himachal Pradesh, India. The trek is best undertaken from May to November, providing optimal weather conditions. Spanning over 2-3 days and covering approximately 12 kilometers, the trek offers a moderate challenge suitable for adventurers of various skill levels. Budget considerations typically range from $100 to $300 per person, encompassing accommodation and transportation expenses. Essential gear includes warm clothing, sturdy trekking shoes, camping equipment, and basic amenities. Prioritize physical fitness and acclimatization to high altitudes for a safe and enjoyable journey. Prepare by researching the route, securing necessary permits, and booking accommodations in advance. Stay hydrated and energized throughout the trek to fully appreciate the mesmerizing landscapes and tranquil ambiance of Kheerganga."
            img1="https://static.toiimg.com/photo/63878060.cms"
            img2="https://www.lazymonkadventure.com/wp-content/uploads/2021/10/Kasol-Kheerganga-Trek-3-scaled.jpg"
            />

            <DestinationData
            className="first-des"
            heading="Triund Trek"
            text="Embark on an unforgettable journey to Triund, located near McLeod Ganj in the Kangra district of Himachal Pradesh, India. The trek is best undertaken from March to June and September to December when the weather is most favorable. With a duration of 1-2 days covering approximately 9 kilometers, the trek offers a moderate challenge suitable for both beginners and experienced trekkers. Budget considerations typically range from $50 to $200 per person, encompassing accommodation and other associated costs. Essential gear includes warm clothing, sturdy trekking shoes, camping equipment, and basic amenities. Prioritize physical fitness and acclimatization to high altitudes for a safe and enjoyable journey. Prepare by familiarizing yourself with the trail, obtaining necessary permits, and booking accommodations in advance. Stay hydrated and carry snacks to fuel your adventure as you immerse yourself in the stunning vistas and serene atmosphere of Triund."
            img1="https://media.istockphoto.com/id/1474961955/photo/trekking-at-triund-himachal-pradesh-india.webp?b=1&s=170667a&w=0&k=20&c=1NA6dlayYymGdKEjTeSvpG1U8laDw3z7-RzmybIMsRo="
            img2="https://c0.wallpaperflare.com/preview/743/299/648/india-triund.jpg"
            />

            <DestinationData
            className="first-des-reverse"
            heading="Tungnath Trek"
            text="Discover the ancient beauty of Tungnath nestled in the Rudraprayag district of Uttarakhand, India. The trek is best undertaken from April to June and September to November, offering ideal weather conditions for trekking enthusiasts. With a duration of 1-2 days covering approximately 4 kilometers, the trek provides a moderate challenge suitable for adventurers of all levels. Budget considerations typically range from $50 to $150 per person, encompassing accommodation and other associated costs. Essential gear includes warm clothing, sturdy trekking shoes, camping equipment, and basic amenities. Prioritize physical fitness and acclimatization to high altitudes for a safe and enjoyable journey. Prepare by researching the trail, securing necessary permits, and booking accommodations in advance. Stay hydrated and carry snacks to keep your energy levels up as you soak in the majestic beauty and tranquility of Tungnath."
            img1="https://www.treksandtrails.org/system/images/000/237/752/3fbfde4528e89119784dd3cff77c322a/original/chandrashila-top-view.jpg?1614748138"
            img2="https://magpieecotourism.com/wp-content/uploads/2015/07/300479_babahoildayhomes1497337879.jpeg"
            />

        </div>
        
    );
        
};

export default Destination