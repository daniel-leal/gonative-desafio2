import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View, StatusBar, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static defaultProps = {
    pop: false,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    pop: PropTypes.bool,
  };

  back = () => {
    const { navigation } = this.props;

    navigation.navigate('Repositories');
  };

  render() {
    const { title, pop } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {pop ? (
          <TouchableOpacity onPress={this.back}>
            <Icon name="arrow-left" size={16} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
