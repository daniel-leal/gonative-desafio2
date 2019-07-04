import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  breadcrumb: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.light,
    margin: metrics.baseMargin,
    height: 30,
    borderRadius: metrics.baseRadius,
  },
  active: {
    fontWeight: 'bold',
  },
  inActive: {
    color: colors.regular,
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
