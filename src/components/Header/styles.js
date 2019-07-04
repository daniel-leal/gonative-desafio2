import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: Platform.OS === 'ios' ? 54 + getStatusBarHeight() : 54,
    paddingTop: Platform.OS === 'ios' ? 54 + getStatusBarHeight() : 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },

  icon: {
    color: colors.darker,
  },
});

export default styles;
