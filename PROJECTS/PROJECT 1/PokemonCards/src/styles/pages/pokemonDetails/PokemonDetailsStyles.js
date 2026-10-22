
import { StyleSheet } from 'react-native';

const PokemonDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 36,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    elevation: 5,
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },

  pokemonId: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontWeight: '800',
    color: '#DC2626',
    letterSpacing: 1,
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    overflow: 'hidden',
  },

  image: {
    width: 230,
    height: 230,
    marginVertical: 14,
    resizeMode: 'contain',
  },

  name: {
    fontSize: 30,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: -0.7,
    marginTop: 4,
  },

  types: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },

  type: {
    overflow: 'hidden',
    backgroundColor: '#FEF2F2',
    color: '#B91C1C',
    fontSize: 12,
    fontWeight: '800',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
    textTransform: 'capitalize',
    letterSpacing: 0.3,
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#F1DADA',
    elevation: 3,
    shadowColor: '#B91C1C',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 9,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#111827',
    letterSpacing: -0.3,
    marginBottom: 18,
  },

  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
    gap: 12,
  },

  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    flexShrink: 1,
  },

  value: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'right',
    flexShrink: 0,
  },

  weakness: {
    overflow: 'hidden',
    backgroundColor: '#FEF2F2',
    color: '#B91C1C',
    fontSize: 12,
    fontWeight: '800',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
    textTransform: 'capitalize',
  },
});

export default PokemonDetailsStyles;
