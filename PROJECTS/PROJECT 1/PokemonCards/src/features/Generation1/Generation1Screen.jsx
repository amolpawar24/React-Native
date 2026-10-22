
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TextInput,
} from 'react-native';

import generation1Pokemons from '../../data/generation1Pokemons';
import PokemonCardStyles from '../../styles/components/cards/PokemonCardStyles';
import Generation1Styles from '../../styles/pages/generation1/Generation1Styles';


export default function Generation1Screen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredPokemons = generation1Pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const renderPokemon = ({ item }) => (
    <Pressable
      style={PokemonCardStyles.card}
      onPress={() =>
        navigation.navigate('PokemonDetails', {
          pokemon: item,
        })
      }
    >
      <Image
        source={item.image}
        style={PokemonCardStyles.image}
        resizeMode="contain"
      />

      <Text style={PokemonCardStyles.name}>
        {item.name}
      </Text>

      <Text style={PokemonCardStyles.id}>
        #{String(item.id).padStart(3, '0')}
      </Text>

      <View style={PokemonCardStyles.types}>
        {item.type.map((type) => (
          <Text key={type} style={PokemonCardStyles.type}>
            {type}
          </Text>
        ))}
      </View>

      <Text style={PokemonCardStyles.hp}>
        HP: {item.hp}
      </Text>
    </Pressable>
  );

  return (
    <View style={Generation1Styles.container}>
      <Text style={Generation1Styles.title}>
        Generation 1
      </Text>

      <Text style={Generation1Styles.subtitle}>
        Discover the original Kanto Pokémon.
      </Text>

      <TextInput
        style={Generation1Styles.searchInput}
        placeholder="Search Pokémon..."
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <Text style={Generation1Styles.resultCount}>
        {filteredPokemons.length} Pokémon found
      </Text>

      <FlatList
        data={filteredPokemons}
        renderItem={renderPokemon}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={Generation1Styles.row}
        contentContainerStyle={Generation1Styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={Generation1Styles.emptyText}>
            No Pokémon found.
          </Text>
        }
      />
    </View>
  );
}
