import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StatusBar,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import api from '~/services/api';

import Header from '~/components/Header';
import IssueItems from './IssueItems';
import Filter from './Filter';
import styles from './styles';
import { colors } from '~/styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    data: [],
    filter: 'all',
    loading: true,
    refreshing: false,
    error: false,
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { filter } = this.state;
    const { navigation } = this.props;
    const repo = navigation.getParam('repo');

    try {
      const { data } = await api.get(`/repos/${repo}/issues?state=${filter}`);

      this.setState({ data: data || [], loading: false, refreshing: false });
    } catch (err) {
      console.tron.log(err.data);
    }
  };

  renderListItem = ({ item }) => <IssueItems issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return !data.length ? (
      <Text style={styles.empty}>Não há issues cadastradas!</Text>
    ) : (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  changeFilter = async (value) => {
    this.setState({ filter: value, loading: true, refreshing: true });

    const { navigation } = this.props;
    const repo = navigation.getParam('repo');

    try {
      const { data } = await api.get(`/repos/${repo}/issues?state=${value}`);

      this.setState({ data, loading: false, refreshing: false });
    } catch (_err) {
      this.setState({
        error: 'Erro ao recuperar as Issues',
        loading: false,
        refreshing: false,
      });
    }
  };

  render() {
    const { loading, error, filter } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.lighter} />

        <Header title="Issues" pop />

        <View style={styles.breadcrumb}>
          <Filter activeFilter={filter} changeFilter={this.changeFilter} />
        </View>

        {!!error && <Text style={styles.error}>{error}</Text>}

        {loading ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
