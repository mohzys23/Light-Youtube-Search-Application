import React from 'react';
import styled from '@emotion/styled';

 const VideoItem = ({video, onVideoDisplay}) => {
   return (
			<Item onClick={() => onVideoDisplay(video)}>
				<img
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.description}
				/>
				<p>{video.snippet.title}</p>
			</Item>
		);
}

export default VideoItem;


const Item = styled.div`
	max-height: 300px;
	display: flex;
	border-bottom: 1px solid lightgrey;
	margin: .5rem 0;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	order: 2;

	p {
		font-weight: 800;
		item-align: center;
		font-size: .8rem;
		padding: 0 .5rem;
		margin: 0;
		text-align: left;
	}

	img {
		max-width: 200px;
		padding-bottom: .5rem;
	}
`;