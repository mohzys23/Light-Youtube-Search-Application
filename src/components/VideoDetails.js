import React from 'react';
import styled from '@emotion/styled';

const VideoDetails = ({video}) => {
  if (!video) {
    return <div>Loading..</div>
  }
	const URL = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
		<DisplayContainer>
			<div>
				<iframe src={URL} title="youtube" width="560" height="315"></iframe>
			</div>
			<div className="dispaly-content">
				<h3>{video.snippet.title}</h3>
				<time>{video.snippet.publishTime.slice(0, 10)}</time>
				<p>{video.snippet.description}</p>
			</div>
		</DisplayContainer>
	);
}

export default VideoDetails;

const DisplayContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
	order: 0;

	.dispaly-content {
		width: 560px;
		text-align: left;
		border: 1px solid lightgrey;
		margin: 1rem 0;
		padding: 0;
		box-shadow: 0px 0px 1px 1px #888888;
		
		h3,
		p, time {
			padding: 0 1rem;
			font-size: 1rem;
		}

		p, time {
			font-size: .9rem;
		}
	}
`;