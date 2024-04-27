import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home (){
    return(
        <>
        <Navbar />
        <Hero
            cName = "hero"
            heroImg="https://img.freepik.com/free-photo/inspiring-view-sunset-light_23-2148851744.jpg?w=2000&t=st=1708354538~exp=1708355138~hmac=ef094871d60dc32558dc0172ac530aa08db0885697d9f369502a76189f2f8042"
            title="Where Your Journey Begins!"
            text="Uniting Trekkers, Sharing Trails, and Embracing Nature"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
            />
        
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;