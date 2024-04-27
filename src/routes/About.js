import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//import AboutImg from "../assets/img1.jpeg";
function About (){
    return(
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg="https://img.freepik.com/free-photo/empty-road-dark-atmosphere_23-2150914181.jpg?t=st=1708369197~exp=1708372797~hmac=4210b01534fccb0f71ccd516ae5878745ce35adadc6d3f6bd6dc9017b8ec14a2&w=2000"
            title="All About Treks"
            btnClass="hide"
            />
            <Footer/>
        </>
    )
}

export default About;