import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


function Contact (){
    return(
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg="https://img.freepik.com/free-photo/beautiful-shot-tropical-trees-chui-lodge-kenya_181624-3465.jpg?w=2000&t=st=1708368260~exp=1708368860~hmac=ed09ef0be0e030f06166e5be1a360b806b51ddea54bb1592c36085babc0d1a97"
            title="Contact"
            btnClass="hide"
            />
            <Footer/>
        </>
    )
}

export default Contact;