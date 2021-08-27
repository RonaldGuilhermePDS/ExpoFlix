import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-navigation';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';
import { gStyle } from '../constants';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showHeader: true,
    };

    this.offset = 0;

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(event) {
    const { showHeader } = this.state;

    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < this.offset;

    if (show !== showHeader || this.offset <= 0) {
      if (this.offset <= 0) show = true;

      this.setState({
        showHeader: show,
      });
    }

    this.offset = currentOffset;
  }

  render() {
    const { showHeader } = this.state;

    return (
      <View style={gStyle.container}>
        <HeaderHome show={showHeader} />

        <ScrollView
          bounces
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <PromotionBanner />

          <Text style={gStyle.heading}>Previews</Text>
          <ShowScroller dataset="previews" type="round" />

          <Text style={gStyle.heading}>My List</Text>
          <ShowScroller dataset="myList" />

          <Text style={gStyle.heading}>Popular on Netflix</Text>
          <ShowScroller dataset="popularonNetflix" />

          <Text style={gStyle.heading}>Watch It Again</Text>
          <ShowScroller dataset="watchitAgain" />

          <Text style={gStyle.heading}>Releases</Text>
          <ShowScroller dataset="releases" />

          <View style={gStyle.spacer24} />
        </ScrollView>

        <Cast />
      </View>
    );
  }
}

export default Home;
