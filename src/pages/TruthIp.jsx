import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './TruthIp.css';
import TruthCards from '../components/TruthCards';
const TruthIp = (props) => {
    const [canMove, setCanMove] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [truth1, setTruth1] = useState(false);
    const [truth2, setTruth2] = useState(false);
    const [lie, setLie] = useState(false);
    const swiperRef = useRef(null);


    useEffect(() => {
        console.log("running");
        if (props.truthOrLie.truth1) {
            setTruth1(true);
        } 
        if (props.truthOrLie.truth2) {
            setTruth2(true);
        }
        if (props.truthOrLie.lie) {
            setLie(true);
        }
        if (!props.truthOrLie.truth1) {
            setTruth1(false);
        }
        if (!props.truthOrLie.truth2) {
            setTruth2(false);
        }
        if (!props.truthOrLie.lie) {
            setLie(false);
        }
    }, [props.truthOrLie]);


    function handleNextClick() {
        const { truth1, truth2, lie } = props.truthOrLie;
        // if(currentSlide === 0 && selectedOption){
        //     setTruthOrLie(prevState => ({ ...prevState, truth1: selectedOption }));
        //     swiperRef.current.swiper.slideTo(1);
        //     setCurrentSlide(1);
        // }else if(currentSlide === 1 && selectedOption2){
        //     setTruthOrLie(prevState => ({ ...prevState, truth2: selectedOption2 }));
        //     swiperRef.current.swiper.slideTo(2);
        //     setCurrentSlide(2);
        // }else if(currentSlide === 2 && selectedOption3){
        //     setTruthOrLie(prevState => ({ ...prevState, lie: selectedOption3 }));
        //     if (currentSlide === 2 && truth1 && truth2 && lie) {
        //         console.log('Send Data:', truthOrLie);}
        //         else{
        //     const emptyField = !truth1 ? 0 : !truth2 ? 1 : 2;
        //     swiperRef.current.swiper.slideTo(emptyField);
        //     setCurrentSlide(emptyField);}
        // }
        if (currentSlide === 0 && truth1) {
            swiperRef.current.swiper.slideTo(1);
            setCurrentSlide(1);
        } else if (currentSlide === 1 && truth2) {
            swiperRef.current.swiper.slideTo(2);
            setCurrentSlide(2);
        } else if (currentSlide === 2 && truth1 && truth2 && lie) {
            console.log('Send Data:', props.truthOrLie);
            props.onforw();
        }
        else {
            const emptyField = !truth1 ? 0 : !truth2 ? 1 : 2;
            swiperRef.current.swiper.slideTo(emptyField);
            setCurrentSlide(emptyField);
        }
    }
    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };


    return (
        <div className='truthIPPage'>
            <div className="backbtnTTOL" onClick={props.onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738
                     11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171
                     3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788
                     14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                     fill="white" />
                </svg>
            </div>
            <div className='topsmallcards'>
                <svg className='tick_svg' xmlns="http://www.w3.org/2000/svg" width="14" visibility={truth1 ? "" : "hidden"} height="14" viewBox="0 0 14 14" fill="none">
                    <rect width="14" height="14" rx="7" fill="#161716" fillOpacity="0.1" />
                    <path d="M4 7L6 9L10 5" stroke="#161716" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className='tick_svg2' xmlns="http://www.w3.org/2000/svg" width="14" visibility={truth2 ? "" : "hidden"} height="14" viewBox="0 0 14 14" fill="none">
                    <rect width="14" height="14" rx="7" fill="#161716" fillOpacity="0.1" />
                    <path d="M4 7L6 9L10 5" stroke="#161716" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className='tick_svg3' xmlns="http://www.w3.org/2000/svg" width="14" visibility={lie ? "" : "hidden"} height="14" viewBox="0 0 14 14" fill="none">
                    <rect width="14" height="14" rx="7" fill="#161716" fillOpacity="0.1" />
                    <path d="M4 7L6 9L10 5" stroke="#161716" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 47" fill="none">
                    <rect y="11.9526" width="23" height="36" rx="3" transform="rotate(-15 0 11.9526)" fill={truth1 ? "#02FF89" : "#526175"} />
                    <rect width="23" height="36" rx="3" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 74.5337 11.9526)" fill={lie ? "#FF55F8" : "#526175"} />
                    <rect x="26" width="23" height="36" rx="3" fill={truth2 ? "#02FF89" : "#526175"} />
                </svg>
            </div>

            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                spaceBetween={'0'}
                slidesPerView={'1.12'}
                onSlideChange={handleSlideChange}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <TruthCards TL={'truth'} back={true} text={'1st truth'} setCanMove={setCanMove} selectedOption={props.selectedOption} setSelectedOption={props.setSelectedOption} setTruthOrLie={props.setTruthOrLie} ToL={'truth1'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TruthCards TL={'truth'} back={true} text={'2nd truth'} setCanMove={setCanMove} selectedOption={props.selectedOption2} setSelectedOption={props.setSelectedOption2} setTruthOrLie={props.setTruthOrLie} ToL={'truth2'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TruthCards TL={'lie'} back={false} text={'Enter a lie'} setCanMove={setCanMove} selectedOption={props.selectedOption3} setSelectedOption={props.setSelectedOption3} setTruthOrLie={props.setTruthOrLie} ToL={'lie'} />
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
            <button className={`nxtbtntp`} onClick={handleNextClick} ><span className={`nxtbtntp-txt`}>Next</span></button>
        </div>
    )
}

export default TruthIp;