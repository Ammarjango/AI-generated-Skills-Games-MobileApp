import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import {Images} from '../../assets/Image/index';
// assuming NextButton is exported from the correct location
import SlideContent from '../../components/SildeContent';
import {styles} from './styles';
export default function Onboarding(props) {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const handleNext = () => {
    if (swiperIndex < 3 && swiperRef.current) {
      setSwiperIndex(swiperIndex + 1);
      swiperRef.current.scrollBy(1);
    } else {
      if (props.navigation) {
        props.navigation.replace('Example');
      }
    }
  };
  const func = () => {
    props.navigation.replace('Verify Account');
  };
  return (
    <Swiper
      style={[styles.wrapper, props.style]}
      loop={false}
      showsPagination={true}
      dotColor="black"
      activeDotColor="#FF9900"
      onIndexChanged={index => setSwiperIndex(index)}
      ref={swiperRef}>
      <SlideContent
        imageSource={Images.xone}
        text="In a dimension beyond our own, lies a vibrant unknown realm where knowledge isn’t just power—it's superpower…well sort of….. Legend has it that centuries ago, this world experienced a ‘Celestial Convergence,' a rare cosmic event where all neighboring stars aligned, giving birth to a comet known as 'Luminar' that would graced the skies."
        handleNext={handleNext}
        styless={styles.text}
        func={func}
      />
      <SlideContent
        imageSource={Images.xtwo}
        text="As Luminar descended, it didn't crash but rather dissolved into countless radiant particles, known as QRK, showering the world with its celestial essence. This essence was not ordinary; it was pure, condensed knowledge from across the galaxies. Local people soon realised that anyone touched by these QRK particles experienced profound transformations. Their minds expanded, thirsting for skills and understanding."
        handleNext={handleNext}
        styless={styles.textaxa} // Pass style as prop to the Slide component
        func={func}
      />
      <SlideContent
        imageSource={Images.xthree}
        text="With every skill mastered, they unlocked unique superpowers - unique but absolutely useless superpowers. A fisherman grabbed a QRK that enabled them to learn the languages of distant lands and could now communicate with marine life, but only when they were sitting on a toilet! A dancer touched a QRK and learned the physics of movement and could defy gravity and fly…but only 3 cm off the ground!"
        handleNext={handleNext}
        styless={styles.textaxxxa} // Pass style as prop to the Slide component
        func={func}
      />
      <SlideContent
        imageSource={Images.xfour}
        text="A QRK allowed a chef to gain knowledge in chemistry and concoct dishes that evoked vivid memories or emotions. but only in pigeons! Everyone gained super, super ridiculously silly skills. This unknown phenomenon came with a promise though. Who so ever could amass enough ridiculous QRK knowledge would learn the true meaning of the Celestial Convergence, the truth about Luminar and the ability to gain true super powers. Are you that hero?"
        handleNext={() => {
          if (props.navigation) {
            props.navigation.replace('Example');
          }
        }}
        styless={styles.textaxxa} // Pass style as prop to the Slide component
        func={func}
      />
    </Swiper>
  );
}
