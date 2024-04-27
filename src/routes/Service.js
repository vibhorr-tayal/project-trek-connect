import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar />
            <Hero
            cName="hero-mid"
            heroImg="https://img.freepik.com/free-photo/young-couple-hikers-giving-high-five-during-sunset-mountains_651396-2310.jpg?w=2000&t=st=1708370059~exp=1708370659~hmac=49afe65be7521c9cd516aa3315244b89def1cb4ba51d8d2ba286f2700a16d235"
            title="Service"
            btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;