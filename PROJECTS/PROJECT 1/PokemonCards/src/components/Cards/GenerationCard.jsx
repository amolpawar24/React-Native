
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { GenerationCardStyles } from '../styles/main.styles';

export default function GenerationCard({
  title,
  region,
  pokemonCount,
  description,
  color,
  onPress,
}) {
  return (
    <Pressable
      style={[
        GenerationCardStyles.card,
        { borderLeftColor: color },
      ]}
      onPress={onPress}
    >
      <View style={GenerationCardStyles.header}>
        <View
          style={[
            GenerationCardStyles.numberBox,
            { backgroundColor: color },
          ]}
        >
          <Text style={GenerationCardStyles.number}>
            {title.replace('Generation ', '')}
          </Text>
        </View>

        <View style={GenerationCardStyles.info}>
          <Text style={GenerationCardStyles.title}>
            {title}
          </Text>

          <Text style={GenerationCardStyles.region}>
            {region}
          </Text>
        </View>

        <Text style={GenerationCardStyles.arrow}>
          {'>'}
        </Text>
      </View>

      <Text style={GenerationCardStyles.description}>
        {description}
      </Text>

      <View style={GenerationCardStyles.footer}>
        <Text style={GenerationCardStyles.count}>
          {pokemonCount} Pokémon
        </Text>

        <Text
          style={[
            GenerationCardStyles.explore,
            { color },
          ]}
        >
          Explore Collection
        </Text>
      </View>
    </Pressable>
  );
}
