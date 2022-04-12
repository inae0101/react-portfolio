import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h1>CLAUDEL DESIGN</h1>
				<div class='wrap'>
					<article>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolorsit amet consecteturadipisicing elit Impedit.
						</p>
						<a href='#'>Contact Now</a>
					</article>
					<article>
						<h2>Services</h2>
						<ul>
							<li>Interior Design</li>
							<li>Architectural Planning</li>
							<li>Landscape Design</li>
							<li>Urban Design</li>
						</ul>
					</article>
					<article>
						<h2>Recent News</h2>
						<ul>
							<li>Interior Design</li>
							<li>Architectural Planning</li>
							<li>Landscape Design</li>
							<li>Urban Design</li>
						</ul>
					</article>
					<article>
						<h2>Contact Us</h2>

						<ul>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faFacebookF} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
						</ul>
						<address>
							ADRESS | 56th Street,
							<br /> SE Washington, DC 20103
							<br /> TEL | 703.908.8003
							<br />
							FAX | 703.907.8001
						</address>
					</article>
				</div>
			</div>
			<p>Copyright &copy; 2022 CLAUDEL DESIGN ALL Right Reserved.</p>
		</footer>
	);
}

export default Footer;
