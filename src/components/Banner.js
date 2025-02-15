import {useState , useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const[loopNum , setLoopNum] = useState(0);
    const[isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["web Developer" , "web Designer" , "UI/Ux Designer"];
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()  => {
        let ticker = setInterval(()  =>{
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum% toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
         
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        }
    }
return (

    <section className="banner" id="home">
    <Container>
     <Row   className="align-items-center">
        <Col x5 = {12} md = { 6 } xl= {7}>
        <span className="tagline" > welcome to my page</span>
        <h1>{'hi im webcodede'}<span className="wrap"> {text}</span> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a
        </p>
        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/> </button>
        </Col>
        <Col x5 = {12} md = { 6 } xl= {7}>
            <img src={headerImg} alt="Headder Img"/>
        </Col>
     </Row>
    </Container>
    </section>
)
}