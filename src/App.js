import { Route } from 'react-router-dom';

import './scss/style.scss';
// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Visual from './components/main/Visual';
import Txtbox from './components/main/Txtbox';
import Photobox from './components/main/Photobox';
import Banner from './components/main/Banner';
import Content from './components/main/Content';
import Prevboard from './components/main/Prevboard';
import Board from './components/main/Board';
import Nextboard from './components/main/Nextboard';

// sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import About from './components/sub/About';
import Community from './components/sub/Community';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

function App() {
	return (
		<>
			{/* 메인이랑 서브랑 헤더디자인 다를때. 
		<switch>
		<Route exact path='/'>
			<Header type={'main'} /> 메인에만 적용
			<Visual />
			<Content />
		</Route>
		
		<Route exact path='/'>
			<Header type={'sub'} /> 서브에만 적용
		</Route>
		</switch> */}
			<Header />

			<Route exact path='/'>
				<Visual />
				<Txtbox />
				<Photobox />
				<Banner />
				<Content />
				<Prevboard />
				<Board />
				<Nextboard />
			</Route>

			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/about' component={About} />
			<Route path='/community' component={Community} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
