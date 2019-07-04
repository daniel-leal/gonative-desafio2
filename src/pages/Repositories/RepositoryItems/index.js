import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RepositoryItems = ({ repository, navigation }) => (
  <View style={styles.card}>
    <View style={styles.container}>
      <View style={styles.avatarPosition}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.owner.avatar_url }}
        />
        <View style={styles.repositoryPosition}>
          <Text style={styles.repository}>{repository.name}</Text>
          <Text>{repository.owner.login}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Issues', { repo: repository.full_name })
        }
      >
        <Icon style={styles.icon} name="chevron-right" size={15} />
      </TouchableOpacity>
    </View>
  </View>
);

RepositoryItems.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    full_name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItems);
