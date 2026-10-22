
import React from 'react';
import {  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import HomeScreenStyles from '../../styles/pages/home/HomeScreenStyles';


export default function HomeScreen({ navigation }) {
  const handleGeneration1 = () => {
    navigation.navigate('Generation1');
  };

  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <ScrollView
        contentContainerStyle={HomeScreenStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={HomeScreenStyles.hero}>
          <Text style={HomeScreenStyles.eyebrow}>
            POKEMON COLLECTION
          </Text>

          <Text style={HomeScreenStyles.title}>
            Explore the World of Pokémon
          </Text>

          <Text style={HomeScreenStyles.subtitle}>
            Discover Pokémon, explore their abilities,
            and learn more about your favourites.
          </Text>
        </View>

        {/* Generation Section */}
        <Text style={HomeScreenStyles.sectionTitle}>
          Choose a Generation
        </Text>

        {/* Generation 1 Card */}
        <Pressable
          style={HomeScreenStyles.generationCard}
          onPress={handleGeneration1}
          accessibilityRole="button"
          accessibilityLabel="Explore Generation 1, Kanto region"
        >
          <View style={HomeScreenStyles.cardHeader}>
            <View style={HomeScreenStyles.generationNumber}>
              <Text style={HomeScreenStyles.numberText}>
                01
              </Text>
            </View>

            <Text style={HomeScreenStyles.arrow}>→</Text>
          </View>

          <View style={HomeScreenStyles.cardInfo}>
            <Text style={HomeScreenStyles.generationTitle}>
              Generation I
            </Text>

            <Text style={HomeScreenStyles.region}>
              Kanto Region
            </Text>
          </View>

          <Text style={HomeScreenStyles.description}>
            Meet the original Pokémon and explore the
            first generation of the Pokémon world.
          </Text>

          <View style={HomeScreenStyles.cardFooter}>
            <Text style={HomeScreenStyles.pokemonCount}>
              151 Pokémon
            </Text>

            <Text style={HomeScreenStyles.exploreText}>
              Explore Collection →
            </Text>
          </View>
        </Pressable>

        {/* Footer */}
        <View style={HomeScreenStyles.footer}>
          <Text style={HomeScreenStyles.footerText}>
            Your Pokémon adventure starts here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
