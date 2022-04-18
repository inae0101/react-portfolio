import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleRight,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function Community() {
	return (
		<Layout name={'COMMUNITY'}>
			<section className='community'>
				<div className='inner1'>
					<div className='wrap'>
						<article>
							<div className='pic'>
								<img src='img/003.jpg'></img>
							</div>
							<p>
								<a href='#'>NOTICE</a>
							</p>
						</article>
						<article>
							<div className='pic'>
								<img src='img/kari-shea-AMyjxxLEHU4-unsplash.jpg'></img>
							</div>
							<p>
								<a href='#'>FAQ</a>
							</p>
						</article>
						<article>
							<div className='pic'>
								<img src='img/lissete-laverde-g-yxWzhtKRE-unsplash.jpg'></img>
							</div>
							<p>
								<a href='#'>EVENT</a>
							</p>
						</article>
					</div>
				</div>

				<div className='search'>
					<td>
						<input type='text' name='search' id='search' placeholder='search' />
					</td>
					<p>
						<a href='#'>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</a>
					</p>
				</div>
				<div className='inner_2'>
					<table>
						<caption className='h'></caption>

						<thead>
							<tr>
								<td>
									<p>26</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>24</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>21</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>20</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>18</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>14</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>10</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<p>6</p>
									<p>2022.04</p>
								</td>
								<td>
									<a href='#'>
										<span>Lorem ipsum</span>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Deserunt maxime sit soluta maiores maxime maxime sunt.
									</a>
								</td>
							</tr>
						</thead>
					</table>

					<div className='pagination'>
						<a href='#' className='prev'>
							<FontAwesomeIcon icon={faAngleLeft} />
						</a>
						<a href='#' className='next'>
							<FontAwesomeIcon icon={faAngleRight} />
						</a>

						<p className='numbers'>
							<a href='#'>1</a>
							<a href='#'>2</a>
							<a href='#'>3</a>
							<a href='#'>4</a>
							<a href='#'>5</a>
							<a href='#'>6</a>
							<a href='#'>7</a>
							<a href='#'>8</a>
							<a href='#'>9</a>
							<a href='#'>10</a>
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Community;
