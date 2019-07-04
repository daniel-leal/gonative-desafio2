import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import RepositoryItems from './RepositoryItems';
import Header from '~/components/Header';
import styles from './styles';
import { colors } from '~/styles';

export default class Repositories extends Component {
  state = {
    data: [],
    repository: '',
    loading: true,
    refreshing: false,
    error: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const data = JSON.parse(
      await AsyncStorage.getItem('@Desafio2:repositories'),
    );

    this.setState({ data: data || [], loading: false, refreshing: false });
  };

  addRepository = async () => {
    const { data, repository, loading } = this.state;

    if (loading) return;

    if (!repository) {
      this.setState({ error: 'Preencha o repoistório' });
      return;
    }

    try {
      const result = await api.get(`/repos/${repository}`);

      this.setState({
        data: [...data, result.data],
        repository: '',
        error: '',
      });

      await AsyncStorage.setItem(
        '@Desafio2:repositories',
        JSON.stringify([...data, result.data]),
      );
    } catch (err) {
      this.setState({ repository: '', error: 'Repositório inexistente' });
    } finally {
      this.setState({ loading: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItems repository={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return !data.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado!</Text>
    ) : (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { repository, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.lighter} />

        <Header title="Repositórios" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
          />
          <TouchableOpacity onPress={this.addRepository}>
            <Icon style={styles.icon} name="plus" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine} />

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
