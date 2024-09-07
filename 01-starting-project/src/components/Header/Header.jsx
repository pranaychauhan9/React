import './Header.css'
import reactImg from '../../assets/react-core-concepts.png'
const rendomDescription =["Fundamental","Core","Crucial"];

function getRandomDescription(max){
  return rendomDescription[Math.floor(Math.random() * (max+1))];
}

export default function Header() {

    const description = getRandomDescription(2)
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials For Me</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
  