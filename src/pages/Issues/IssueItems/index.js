import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const IssueItems = ({ issue }) => (
  <View style={styles.card}>
    <View style={styles.container}>
      <View style={styles.avatarPosition}>
        <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />

        <View style={styles.issuePosition}>
          <Text style={styles.issue} ellipsizeMode="tail" numberOfLines={1}>
            {issue.title}
          </Text>
          <Text>{issue.user.login}</Text>
        </View>
      </View>

      <Icon style={styles.icon} name="chevron-right" size={15} />
    </View>
  </View>
);

IssueItems.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItems;
