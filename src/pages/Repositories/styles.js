import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    margin: metrics.baseMargin,
    width: metrics.screenWidth - 55,
    paddingLeft: 10,
  },
  icon: {
    fontWeight: 'bold',
    color: colors.darker,
  },
  horizontalLine: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    margin: metrics.baseMargin,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
});

export default styles;
