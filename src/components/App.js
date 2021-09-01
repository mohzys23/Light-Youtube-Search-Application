import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';
import {css} from "@emotion/css";
import styled from "@emotion/styled"
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export default class App extends Component {
  componentDidMount() {
    this.onSearchSubmit("Best of Africa")
  }
  state = { videos: [], selectedVdideo: null }
  onSearchSubmit = async (text) => {
   const response = await youtube.get('/search', {
      params: {
        q: text,
        }
    })
    const app = response.data.items;
    this.setState({
			videos: app,
			selectedVdideo: app[Math.floor(Math.random() * app.length)],
		});
    console.log(app)
  }
  onVideoDisplay = (video) => {
    this.setState({ selectedVdideo: video })
  }
   render() {
    return (
			<Container>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ContainerContent>
					<VideoDetails video={this.state.selectedVdideo} />
					<VideoList
						onVideoDisplay={this.onVideoDisplay}
						videos={this.state.videos}
					/>
				</ContainerContent>
			</Container>
		);
  }
};

const Container = styled.div`
	padding: 0 5rem;
`;

const ContainerContent = styled.div`
	display: flex;
	margin-top: 1rem;
	justify-content: space-between;


`;