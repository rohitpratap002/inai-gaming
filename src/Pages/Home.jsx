import React ,{useRef, useState, useEffect} from 'react'
import useScrollOnDrag from 'react-scroll-ondrag';

import Btn from '../Components/Btn'

import '../Styles/Home.css'

import mainLogo from '../Assets/logos/logo-full.png'
import heroImg from '../Assets/heroImg.png'
import zoomcarLogo from '../Assets/logos/zoomcar-logo.png'
import healthifyLogo from '../Assets/logos/healthify-logo.png'
import RaridoLogo from '../Assets/logos/rario-logo.png'
import errorIcon from '../Assets/icons/error.png' 
import barChartIcon from '../Assets/icons/bar-chart.svg' 
import distIcon from '../Assets/icons/distance.png'
import moneyIcon from '../Assets/icons/money (1).svg' 
import phoneIcon from '../Assets/icons/phone.png'
import moneytransferIcon from '../Assets/icons/money.png'
import refundIcon from '../Assets/icons/refund.png'
import rocketIcon from '../Assets/icons/rocket.png'
import fingerprintIcon from '../Assets/icons/fingerprint.png'
import icIcon from '../Assets/icons/ic.png'

import amazonPayLogo from '../Assets/logos/amzonpay-logo.png'
import phonePeLogo from '../Assets/logos/phonepay-logo.png'
import freechargeLogo from '../Assets/logos/freecharge.png'
import upiLogo from '../Assets/logos/upi-logo.png'
import gpayLogo from '../Assets/logos/gpay-logo.png'
import rupayLogo from '../Assets/logos/rupay-logo.png'
import mastercardLogo from '../Assets/logos/mastercard.png'
import visaLogo from '../Assets/logos/visa.png'
import papzappLogo from '../Assets/logos/papzapp.png'


import paypalLogo from '../Assets/logos/paypal.png'
import paytmLogo from '../Assets/logos/paytm.png'
import cashfreeLogo from '../Assets/logos/cashfree.png'
import razorpayLogo from '../Assets/logos/razorpay.png'
import PayuLogo from '../Assets/logos/payu.png'
import ippoLogo from '../Assets/logos/ippo.png'
import billdeskLogo from '../Assets/logos/billdesk.png'
import ccavenueLogo from '../Assets/logos/ccavenue.png'


import YCombinatorLogo from '../Assets/logos/Y_Combinator_Logo 1.png'
import pauaLogo from '../Assets/logos/pauaventure.png'
import uncommonCapitalLogo from '../Assets/logos/uncommon.png'
import somaLogo from '../Assets/logos/soma.png'
import unicornLogo from '../Assets/logos/unicorn.png'
import gocardlessLogo from '../Assets/logos/logo-gocardless-carre 1.png'
import americanExpLogo from '../Assets/logos/american.png'
import RocketPlaceLogo from '../Assets/logos/rocketplace.png'
import ComplyLogo from '../Assets/logos/comply-advantage-logo 1.png'

const badges = [
    [YCombinatorLogo,"Y Combinator"],
    [pauaLogo,'Paua Ventures'],
    [uncommonCapitalLogo,'Uncommon Capital'],
    [somaLogo,'Soma Capital'],
    [unicornLogo,'9Unicorns'],
    [gocardlessLogo,'GoCardless'],
    [americanExpLogo,'Amex Ventures'],
    [RocketPlaceLogo,'Rocketplace'],
    [ComplyLogo,'Comply Advantage']
]


const ScrollableBox = ({ runScroll }) => {
    const containerRef = useRef(null);
    const { events } = useScrollOnDrag(containerRef, {
        runScroll: runScroll && runScroll(containerRef)
    });

    return (
        <div className="downSec" {...events} ref={containerRef}>
        <div className="pillCard">
            <div><img src={errorIcon} alt="error" /></div>
            <h3>No-Code Platform</h3>
        </div>
        <div className="pillCard">
            <div><img src={barChartIcon} alt="bar-chart" /></div>
            <h3>Do More With Less</h3>
        </div>
        <div className="pillCard">
            <div><img src={distIcon} alt="location" /></div>
            <h3>Orchestrate Routing</h3>
        </div>
        <div className="pillCard">
            <div><img src={moneyIcon} alt="cash" /></div>
            <h3>Reduced Transaction Costs</h3>
        </div>
        <div className="pillCard">
            <div>60%</div>
            <h3>Increase checkout conversions by 60%</h3>
        </div>
        </div>
    );
};

const ScrollPayment = ({ runScroll,imgList }) => {
    const containerRef = useRef(null);
    const { events } = useScrollOnDrag(containerRef, {
        runScroll: runScroll && runScroll(containerRef)
    });

    return (
        <div className="scrollDiv" {...events} ref={containerRef}>
            {imgList.map((el,index)=>{
                return <div className="imgDiv" key={index}><img src={el} alt="payment" /></div>
            })}
        </div>
    );
};

const Home = () => {
    const heightRef = useRef();
    const contactRef = useRef(null)
    const [windowHeight,setwindowHeight]=useState()
    const [achiveNum,setAchiveNum]=useState(0)
    const achivementList = [
        {
            headLine:"Customise UI and UX As Per Your Game:",
            list:["When your game is immersive, why should your checkout look boring?","Set up an immersive UI that matches the theme of your game using checkout customization with inai and provide gamers with an unforgettable UX."]
        },
        {
            headLine:"Customise UI and UX As Per Your Game: 2",
            list:["2 When your game is immersive, why should your checkout look boring?","2 Set up an immersive UI that matches the theme of your game using checkout customization with inai and provide gamers with an unforgettable UX."]
        },
        {
            headLine:"Customise UI and UX As Per Your Game: 3",
            list:["3 When your game is immersive, why should your checkout look boring?","3 Set up an immersive UI that matches the theme of your game using checkout customization with inai and provide gamers with an unforgettable UX."]
        },
        {
            headLine:"Customise UI and UX As Per Your Game: 4",
            list:["4 When your game is immersive, why should your checkout look boring?","4 Set up an immersive UI that matches the theme of your game using checkout customization with inai and provide gamers with an unforgettable UX."]
        },
    ]
    const nextBtnHandler=()=>{
        if(achiveNum<(achivementList.length-1)){
            const curLen = achiveNum + 1
            setAchiveNum(()=>curLen)
            
        }
        else{
            setAchiveNum(0)
        }
        
    }
    const prvsBtnHandler=()=>{
        if(achiveNum>0){
            const curLen = achiveNum - 1
            setAchiveNum(()=>curLen)
            
        }
        else{
            const curLen = achivementList.length-1
            setAchiveNum(()=>curLen)
            
        }
        
    }
    const handleForm =()=>{
        alert("Form Submitted")
    }

    const handleScroll = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
      };
    const getheight = () => {    
        const newHeight = heightRef.current.clientHeight;
        setwindowHeight(newHeight);
    };
    useEffect(() => {
        getheight();
        window.addEventListener("resize", getheight);
    }, []);

  return (
    <>
        <div className='containerCenter'>
            <nav className="navbar">
            <img src={mainLogo} alt="InaiLogo" className="logo" />
            <Btn text="Get a Demo" extraText={false} size="m" scrollTo={handleScroll}/>
            </nav>
            <div className="heroSec">
                <div className="heroLeft">
                    <h1 className="headLine">Your Hunt For A Reliable {"{"}Dynamic{"}"} Payment Solution Ends Here.</h1>
                    <p className="headPara">Build customizable UI for {"{"}Dynamic{"}"} & integrate local payment methods at your checkout to increase payment conversion rates</p>
                    <Btn text="Get Demo Now!" scrollTo={handleScroll} extraText={true} size='l' />
                </div>
                <div className="heroRight">
                    <img src={heroImg} alt="Hero" />
                </div>
            </div>
        </div>
        <div className="smBanner">
                <h1><span>“Players”</span> That Trust Inai</h1>
                <img src={zoomcarLogo} alt="zoomcarLogo" />
                <img src={healthifyLogo} alt="healthifyLogo" />
                <img src={RaridoLogo} alt="RaridoLogo" />
        </div>
        <div className="statistics">
            <div className="statisticCard">
                <div className="cardBack"></div>
                <h1>120</h1>
                <p>Countries Supported</p>
            </div>
            <div className="statisticCard">
                <div className="cardBack"></div>
                <h1>300</h1>
                <p>Payment Methods</p>
            </div>
            <div className="statisticCard">
                <div className="cardBack"></div>
                <h1>30</h1>
                <p>Payment Gatways</p>
            </div>
        </div>
        <div className="achivementSec" style={{height:windowHeight}}>
            <div className="achivementDiv" ref={heightRef}>
                <div className="upperSec">
                    <div className="left">
                        <h1>Achievement Unlocked “Quest For Payment Checkouts” - Finished.</h1>
                        <p className='leftP'>Provide a reliable, seamless and customised checkout experience to gamers with multiple payment options to boost your success rates.</p>
                        <Btn scrollTo={handleScroll} text='Get Demo Now!' size='l' extraText={true}/>
                    </div>
                    <div className="right">
                        <h1>{achivementList[achiveNum].headLine}</h1>
                        <ul>
                            <li>{achivementList[achiveNum].list[0]}</li>
                            <li>{achivementList[achiveNum].list[1]}</li>
                        </ul>
                        {/* <h1>Customise UI and UX As Per Your Game:</h1>
                        <ul>
                            <li>When your game is immersive, why should your checkout look boring?</li>
                            <li>Set up an immersive UI that matches the theme of your game using checkout customization with inai and provide gamers with an unforgettable UX.</li>
                        </ul> */}
                        <div className="scrollBtn">
                            <button onClick={prvsBtnHandler}><i className="fa-solid fa-caret-left"></i></button>
                            <button onClick={nextBtnHandler}><i className="fa-solid fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="downBlur">
                <ScrollableBox />
                </div>
            </div>
        </div>
        <div className="centerHeadline">
            <h1>Add Ease To Your Players{"’"}<br/>Gaming Journey.</h1>
        </div>
        <div className="gridContainer">
            <div className="gridCard gridCard1">
                <div className="dataDiv">
                    <h1>Redundancy In Pay-ins</h1>
                    <p>inai provides integrations with multiple high-risk friendly processors to accept local payment methods & build redundancy with multiple payment gateways.</p>
                </div>
                <div className="imgDiv">
                    <img src={phoneIcon} alt="Phone" />
                </div>
            </div>
            <div className="gridCard gridCard2">
                <div className="dataDiv">
                    <h1>Pay Outs & Refunds</h1>
                    <p>Choose from a variety of different payout modes and automate through instant & scheduled payouts & refunds.</p>
                </div>
                <div className="imgDiv">
                    <img src={moneytransferIcon} alt="Money" />
                </div>
            </div>
            <div className="gridCard gridCard3">
                <div className="dataDiv">
                    <h1>Auto Refund</h1>
                    <p>No more dealing with customer support teams and following up on tickets required.</p>
                </div>
                <div className="imgDiv">
                    <img src={refundIcon} alt="Refund" />
                </div>
            </div>
            <div className="gridCard gridCard4">
                <div className="dataDiv">
                    <h1>Support high traffic / sec</h1>
                    <p>Ensure 99.9% uptime even during peak traffic with turbo mode and enable 200+ TPS during gameplay</p>
                </div>
                <div className="imgDiv" style={{background:"#71C3FF"}}>
                    <img src={rocketIcon} alt="Money" />
                </div>
            </div>
            <div className="gridCard gridCard5">
                    <div className="dataDiv" style={{width:'65%'}}>
                        <h1>UPI fingerprinting</h1>
                        <p>Reduce referral abuses & game manipulations by implementing UPI fingerprinting to map unique users</p>
                    </div>
                    <div className="imgDiv" style={{background:"#776BF8",width:'35%'}}>
                        <img src={fingerprintIcon} alt="Money" />
                    </div>
            </div>
            <div className="gridCard gridCard6">
                <div className="dataDiv" style={{width:'50%'}}>
                    <h1>Manage Risks with Custom Fraud Flows</h1>
                    <p>Manage risks to suit your business needs and seamlessly manage checkout experiences. Build custom flows to deal with frauds in just a few easy steps:</p>
                </div>
                <div className="imgDiv" style={{background:"#1FBE75",width:'50%'}}>
                    <img src={icIcon} alt="IC" style={{aspectRatio:"1"}} />
                </div>
            </div>
        </div>
        <div className="callToAction">
            <Btn scrollTo={handleScroll} text='Get Demo Now!' extraText={true} size='l' />
        </div>
        <div className="paymentMethod">
            <div className="dot"></div>
            <ScrollPayment imgList={[amazonPayLogo,phonePeLogo,freechargeLogo,upiLogo,gpayLogo,rupayLogo,mastercardLogo,visaLogo,papzappLogo]}/>
        </div>
        <div className="paymentMethod paymentGatway">
            <div className="dot"></div>
            <ScrollPayment imgList={[paypalLogo,paytmLogo,cashfreeLogo,razorpayLogo,PayuLogo,ippoLogo,billdeskLogo,ccavenueLogo]} />
        </div>
        <div className="integrationSec">
            <div className="dataDiv">
                <h1>Seamless Integrations</h1>
                <p>30+ Payment Gateways and 300+ Methods to get the best conversions possible.</p>
            </div>
            <Btn scrollTo={handleScroll} text='Get Demo Now!' size='l' extraText={true} />
        </div>
        <div className="BadgesSec">
            <div className="left">
                <div className="equalGrid">
                    {badges.map((badge,index)=>{
                        return <div key={index} className="imgDiv"><img src={badge[0]} alt="Badges" /><h4>{badge[1]}</h4></div>
                    })}
                </div>
            </div>
            <div className="right">
                <h1>Where We Get Our “Powers” From/ Our “Power” Badges</h1>
                <p>Inai was founded by repeat entrepreneurs who faced this problem first-hand. We have been backed by some of the most bankable investors in the world:</p>
                <Btn scrollTo={handleScroll} text='Get Demo Now!' size='l' extraText={true} />
            </div>
        </div>
        <div className="contactSec" ref={contactRef}>
            <div className="left">
                    <h1>Game Over For
                    Failed Payments</h1>
                    <p>Offer every gaming payment method your customer's needs. Launch faster, optimize transaction costs and boost your conversions.</p>
                    <Btn scrollTo={handleScroll} text='Get Demo Now!' size='l' extraText={true} />
            </div>
            <div className="right">
                    <div className="back"></div>
                    <form >
                        <label htmlFor="name" className="inp">
                            <input type="text" id="name" placeholder="&nbsp;" />
                            <span className="label">Full Name</span>
                        </label>
                        <label htmlFor="email" className="inp">
                            <input type="text" id="email" placeholder="&nbsp;" />
                            <span className="label">Business Email</span>
                        </label>
                        <label htmlFor="tCountry" className="inp">
                            <input type="text" id="tCountry" placeholder="&nbsp;" />
                            <span className="label">Targeted Country</span>
                        </label>
                        <label htmlFor="country" className="inp">
                            <input type="text" id="country" placeholder="&nbsp;" />
                            <span className="label">Which industry you are in?</span>
                        </label>
                        <label htmlFor="revenue" className="inp">
                            <input type="text" id="revenue" placeholder="&nbsp;" />
                            <span className="label">Revenue (Yearly)</span>
                        </label>
                        
                        <Btn scrollTo={handleForm} text='Get Now' size='s' extraText={false} />
                    </form>
            </div>
        </div>
        <div className="copyRight">
        Copyright © 2024 &nbsp; <a href="https://www.instagram.com/rohitpratap002/"> Rohit Pratap</a>. All Rights Reserved.
        </div>
    </>
  )
}

export default Home