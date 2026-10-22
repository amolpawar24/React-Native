
import { StyleSheet } from 'react-native';

const GenerationCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderLeftWidth: 5,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  numberBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  region: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },

  arrow: {
    fontSize: 25,
    fontWeight: '500',
    color: '#94A3B8',
    marginLeft: 8,
  },

  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 21,
    marginTop: 18,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 14,
    marginTop: 16,
  },

  count: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },

  explore: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default GenerationCardStyles;
