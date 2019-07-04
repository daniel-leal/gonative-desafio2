import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  card: {
    height: 80,
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    padding: metrics.basePadding,
  },

  avatarPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.basePadding,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  issuePosition: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },

  issue: {
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
