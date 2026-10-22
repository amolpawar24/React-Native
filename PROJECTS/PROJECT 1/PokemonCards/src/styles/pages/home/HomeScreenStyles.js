
import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 36,
  },

  // Hero Section
  hero: {
    marginTop: 8,
    marginBottom: 32,
    padding: 24,
    paddingVertical: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    elevation: 5,
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.07,
    shadowRadius: 12,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2.5,
    color: '#DC2626',
    marginBottom: 14,
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#111827',
    letterSpacing: -0.7,
    lineHeight: 40,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#64748B',
  },

  // Generation Section
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.3,
    marginBottom: 18,
  },

  generationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderLeftWidth: 5,
    borderLeftColor: '#DC2626',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEE2E2',

    elevation: 5,
    shadowColor: '#B91C1C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  generationNumber: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F87171',

    elevation: 4,
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 7,
  },

  numberText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
  },

  cardInfo: {
    marginTop: 18,
  },

  generationTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.3,
  },

  region: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
    fontWeight: '500',
  },

  arrow: {
    fontSize: 27,
    fontWeight: '500',
    color: '#DC2626',
  },

  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 23,
    marginTop: 16,
  },

  // Card Footer
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#FEE2E2',
    paddingTop: 16,
    marginTop: 20,
  },

  pokemonCount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#991B1B',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },

  exploreText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#DC2626',
    letterSpacing: 0.2,
  },

  // Screen Footer
  footer: {
    marginTop: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default HomeScreenStyles;
