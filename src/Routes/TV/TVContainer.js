import React from "react";
import TVPresenter from "./TVPresenter";

export class TVIndex extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  render() {
    const { topRated, popular, airingTday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTday={airingTday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVIndex;