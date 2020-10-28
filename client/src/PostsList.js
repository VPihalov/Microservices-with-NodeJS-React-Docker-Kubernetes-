import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

export default () => {
	const [posts, setPosts] = useState({});
	console.log('posts', posts)

	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4002/posts');
				
		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts()
	}, []);

	const renderedPosts = Object.values(posts).map(post => {
		return (
			<div className='card' key={post.id} style={{width: '30%', marginBottom: "20px"}}>
				<div className='card=body'>
					<h3>{post.title}</h3>
					<CommentsList comments={post.comments}></CommentsList>
					<CommentCreate postId={post.id}></CommentCreate>
				</div>
			</div>
		)
	})

	return (
	<div className='d-flex flex-row flex-wrap justify-content-between'>
		{renderedPosts}
	</div>
	)
}