import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';

function App() {
	return (
		<>
			{/*  <Navbar title = "testUtils" aboutUs = "About Us" /> */}
			{/*  <Navbar aboutUs = "About Us" /> */}
			<Navbar />
			<div className='container'>
				{/* <TextForm heading="Enter The Text To Analise Below "/> */}
				<About />
			</div>
			
		</>
	);
}

export default App;
