
import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
});

export default GlobalStyles;
