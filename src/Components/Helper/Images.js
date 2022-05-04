import Thunderstorm from '../../Assets/images/storm.png';
import Drizzle from '../../Assets/images/drizzle.png';
import Rain from '../../Assets/images/rainy.png';
import Snow from '../../Assets/images/snowy.png';
import Athmosphere from '../../Assets/images/sun.png';
import Clear from '../../Assets/images/clear.png';
import Clouds from '../../Assets/images/cloudy.png';

const Images = ({ code }) => {
	if (code >= 200 && code <= 232) {
		return <img src={Thunderstorm} alt='template' width='50' height='50' />;
	}
	if (code >= 300 && code <= 321) {
		return <img src={Drizzle} alt='template' width='50' height='50' />;
	}
	if (code >= 500 && code <= 531) {
		return <img src={Rain} alt='template' width='50' height='50' />;
	}
	if (code >= 600 && code <= 622) {
		return <img src={Snow} alt='template' width='50' height='50' />;
	}
	if (code >= 700 && code <= 781) {
		return <img src={Athmosphere} alt='template' width='50' height='50' />;
	}
	if (code === 800) {
		return <img src={Clear} alt='template' width='50' height='50' />;
	}
	if (code >= 801 && code <= 804) {
		return <img src={Clouds} alt='template' width='50' height='50' />;
	}
};

export default Images;
