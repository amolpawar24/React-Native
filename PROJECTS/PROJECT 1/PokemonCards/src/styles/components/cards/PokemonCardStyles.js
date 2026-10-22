
import { StyleSheet } from 'react-native';

const PokemonCardStyles = StyleSheet.create({
  // Main Pokémon Card
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 12,
    marginBottom: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1DADA',
    overflow: 'hidden',

    elevation: 5,
    shadowColor: '#B91C1C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  // Pokémon Image
  image: {
    width: '100%',
    height: 120,
    marginBottom: 8,
    resizeMode: 'contain',
  },

  // Pokémon Name
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginTop: 6,
    letterSpacing: -0.2,
    textTransform: 'capitalize',
  },

  // Pokédex Number
  id: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    marginTop: 5,
    letterSpacing: 0.8,
  },

  // Pokémon Type Container
  types: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
  },

  // Pokémon Type Badge
  type: {
    overflow: 'hidden',
    backgroundColor: '#FEF2F2',
    color: '#B91C1C',
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
    textTransform: 'capitalize',
    letterSpacing: 0.2,
  },

  // Pokémon HP
  hp: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginTop: 12,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default PokemonCardStyles;
