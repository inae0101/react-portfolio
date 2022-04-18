import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function About() {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/about.json`).then((json) => {
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout name={'ABOUT'}>
			<section className='about'>
				{members.map((member, idx) => {
					return (
						<div className='inner' key={idx}>
							<div className='wrap'>
								<article>
									<div className='pic'>
										<img src={`${path}/img/${member.pic}`} />
									</div>
								</article>
								<article>
									<h2>{member.name}</h2>
									<h3>{member.position}</h3>
									<p>{member.description1}</p>
									<p>{member.description2}</p>
								</article>
							</div>
						</div>
					);
				})}
			</section>
		</Layout>
	);
}

export default About;
