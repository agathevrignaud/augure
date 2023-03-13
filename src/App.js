import './css/App.css';
import './css/index.css';
import Header from './utils/components/Header.tsx';
import ZodiacCard from './utils/components/ZodiacCard.tsx';
import {Row} from 'react-bootstrap'



function App() {

  const zodiacSigns = [
    {sign : "Aries", emoji: "0x2648", description: 'Fearless leader' },   
    {sign : "Taurus", emoji: "0x2649", description: 'Dependable friend' }, 
    {sign : "Gemini", emoji: "0x264A", description: 'Curious Communicator' },   
    {sign : "Cancer", emoji: "0x264B", description: 'Sensitive nurturer' }, 
    {sign : "Leo", emoji: "0x264C", description: 'Confident performer' }, 
    {sign : "Virgo", emoji: "0x264D", description: 'Meticulous organizer' }, 
    {sign : "Libra", emoji: "0x264E", description: 'Harmonious diplomat' }, 
    {sign : "Scorpio", emoji: "0x264F", description: 'Intense investigator' }, 
    {sign : "Sagittarius", emoji: "0x2650", description: 'Adventurous wanderer' }, 
    {sign : "Capricorn", emoji: "0x2651", description: 'Ambitious achiever' }, 
    {sign : "Aquarius", emoji: "0x2652", description: 'Independant visionnary' }, 
    {sign : "Pisces", emoji: "0x2653", description: 'Dreamy empathizer' }
  ];
  
  return (
    <div>
      <Header/>
        <Row>
        { 
          zodiacSigns.map(zodiac => {
            return (
              <ZodiacCard 
                zodiac={zodiac} 
                horoscope={"horoscope placeholder"} 
              />
            )
          })
        }
      </Row>
    </div>
  );
}

export default App;
