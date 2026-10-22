
import { StyleSheet } from 'react-native';

const Generation1Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 20,
  },

  // Screen Header
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#111827',
    letterSpacing: -0.8,
    marginHorizontal: 20,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: '#64748B',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 24,
  },

  // Search Bar
  searchInput: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 17,
    paddingHorizontal: 18,
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    marginHorizontal: 20,
    marginBottom: 20,

    elevation: 3,
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  // Result Count
  resultCount: {
    fontSize: 12,
    fontWeight: '800',
    color: '#DC2626',
    letterSpacing: 0.8,
    marginHorizontal: 20,
    marginBottom: 16,
  },

  // Pokémon Grid
  row: {
    justifyContent: 'space-between',
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 32,
  },

  // Empty Search Results
  emptyText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
    color: '#64748B',
    textAlign: 'center',
    marginTop: 48,
    marginHorizontal: 24,
  },
});

export default Generation1Styles;
