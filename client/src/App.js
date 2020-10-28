import React from 'react';
import PostCreate from './PostCreate';
import PostsList from './PostsList';

export default () => {
	return (<div className='containter'>
		<h1>Create Post</h1>
			<PostCreate></PostCreate>
		<hr/>
		<h1>Posts List</h1>
			<PostsList></PostsList>
	</div>)
}