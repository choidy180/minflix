import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export class HomeIndex extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };
  async componentDidMount(){
    try {
      const nowPlaying = await movieApi.nowPlaying();
      console.log(nowPlaying);
    } catch (error) {
      this.setState({
        error: "Can't find Movies information."
      });
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeIndex;