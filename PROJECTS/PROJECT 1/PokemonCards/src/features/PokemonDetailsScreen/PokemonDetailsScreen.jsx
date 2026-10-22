
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import PokemonDetailsStyles from '../../styles/pages/pokemonDetails/PokemonDetailsStyles';


export default function PokemonDetailsScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <ScrollView
      style={PokemonDetailsStyles.container}
      contentContainerStyle={PokemonDetailsStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={PokemonDetailsStyles.card}>
        <Text style={PokemonDetailsStyles.pokemonId}>
          #{String(pokemon.id).padStart(3, '0')}
        </Text>

        <Image
          source={pokemon.image}
          style={PokemonDetailsStyles.image}
          resizeMode="contain"
        />

        <Text style={PokemonDetailsStyles.name}>
          {pokemon.name}
        </Text>

        <View style={PokemonDetailsStyles.types}>
          {pokemon.type.map((type) => (
            <Text
              key={type}
              style={PokemonDetailsStyles.type}
            >
              {type}
            </Text>
          ))}
        </View>
      </View>

      <View style={PokemonDetailsStyles.section}>
        <Text style={PokemonDetailsStyles.sectionTitle}>
          Statistics
        </Text>

        <View style={PokemonDetailsStyles.statRow}>
          <Text style={PokemonDetailsStyles.label}>HP</Text>
          <Text style={PokemonDetailsStyles.value}>
            {pokemon.hp}
          </Text>
        </View>
      </View>

      <View style={PokemonDetailsStyles.section}>
        <Text style={PokemonDetailsStyles.sectionTitle}>
          Moves
        </Text>

        {pokemon.moves.map((move, index) => (
          <View
            key={`${move.name}-${index}`}
            style={PokemonDetailsStyles.listRow}
          >
            <Text style={PokemonDetailsStyles.label}>
              {move.name}
            </Text>

            <Text style={PokemonDetailsStyles.value}>
              Power: {move.power}
            </Text>
          </View>
        ))}
      </View>

      <View style={PokemonDetailsStyles.section}>
        <Text style={PokemonDetailsStyles.sectionTitle}>
          Weaknesses
        </Text>

        <View style={PokemonDetailsStyles.types}>
          {pokemon.weakness.map((weakness) => (
            <Text
              key={weakness}
              style={PokemonDetailsStyles.weakness}
            >
              {weakness}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
