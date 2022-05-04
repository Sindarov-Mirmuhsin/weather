import { useState, useEffect } from 'react';
import Images from './Components/Helper/Images';

function App() {
	const [city, setCity] = useState('Tashkent');
	const [state, setState] = useState('metric');
	const [data, setData] = useState({
		isFetched: false,
		data: {},
		error: false,
	});

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7300dde2802c5a38fa3047cf250bb7b7&units=${state}`,
		)
			.then((response) => response.json())
			.then((data) =>
				setData({
					isFetched: true,
					data: data,
					error: false,
				}),
			);
	}, [city, state]);

	function inputSearch(evt) {
		if (evt.code === 'Enter') {
			setCity(evt.target.value);
		}
	}

	return (
		<>
			<div className='inner'>
				<input
					className='input'
					onKeyUp={inputSearch}
					type='text'
					placeholder='Country'
				/>

				{data.isFetched ? (
					<div className='hero'>
						<div className='box'>
							<Images code={data.data.weather[0].id} />
							<p className='celci'>{Math.floor(data.data.main.temp)}</p>
							<button className='btn' onClick={() => setState('metric')}>C</button>
							<button className='btn' onClick={() => setState('standard')}>F</button>
						</div>
						<div>
							<h2 className='name'>{data.data.name}</h2>
							<h3 className='info'>{data.data.weather[0].description}</h3>
						</div>
					</div>
				) : (
					<h2>Loading.....</h2>
				)}
			</div>
		</>
	);
}

export default App;
