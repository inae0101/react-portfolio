import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	//localStorage의 데이터를 반환하는 함수
	const getLocalData = () => {
		let data = localStorage.getItem('posts');
		data = JSON.parse(data);
		return data;
	};

	const [posts, setPosts] = useState(getLocalData);

	//post입력창 초기화함수
	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//post추가 함수
	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요!!');
			return;
		}

		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
		resetPost();
	};

	//post삭제 함수
	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	//post수정 함수
	const updatePost = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요!!');
			return;
		}
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	//글수정모드 변경함수
	const enableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//글출력모드 변경함수
	const disableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	//posts의 상태값이 변경될때마다 콘솔문 출력
	useEffect(() => {
		console.log('posts state변경됨');
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'COMMUNITY'}>
			<section className='community'>
				<div className='inner1'>
					<article>
						<div className='pic'>
							<img src='img/003.jpg'></img>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src='img/kari-shea-AMyjxxLEHU4-unsplash.jpg'></img>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src='img/lissete-laverde-g-yxWzhtKRE-unsplash.jpg'></img>
						</div>
					</article>
				</div>
				<div className='inner2'>
					<div className='inputBox'>
						<input type='text' placeholder='제목' ref={input} />
						<br />
						<textarea
							cols='32'
							rows='20'
							placeholder='본문'
							ref={textarea}></textarea>
						<br />

						<button onClick={resetPost}>cancel</button>
						<button onClick={createPost}>create</button>
					</div>

					<div className='showBox'>
						{posts.map((post, idx) => {
							let con = post.content.split('\n');

							return (
								<article key={idx}>
									{post.enableUpdate ? (
										// 수정모드
										<>
											<input
												type='text'
												defaultValue={post.title}
												ref={editInput}
											/>
											<br />
											<textarea
												defaultValue={post.content}
												ref={editTextarea}></textarea>

											<div className='btns'>
												<button onClick={() => disableUpdate(idx)}>
													cancel
												</button>
												<button onClick={() => updatePost(idx)}>save</button>
											</div>
										</>
									) : (
										// 출력모드
										<>
											<h2>{post.title}</h2>
											<div>
												{/* 분리된 문자열 배열을 반복처리하면서 br태그 연결해서 줄바꿈출력 */}
												{con.map((txt, idx) => {
													return (
														<p key={idx}>
															{txt}
															<br />
														</p>
													);
												})}
											</div>

											<div className='btns'>
												<button onClick={() => enableUpdate(idx)}>edit</button>
												<button onClick={() => deletePost(idx)}>delete</button>
											</div>
										</>
									)}
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Community;
