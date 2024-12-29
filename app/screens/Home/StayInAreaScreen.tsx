import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function StayInAreaScreen( ) {
  const navigation = useNavigation();
  const [distance, setDistance] = useState(30); 

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={18} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stay in area</Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../../assets/images/map.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      {/* Info Section */}
      <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Stay in area</Text>
        <Text style={styles.infoSubtitle}>
          We'll search for rides within this location, you can widen the area to get more potential
          rides.
        </Text>

        {/* Slider Section */}
        <View style={styles.sliderContainer}>
          <Text style={styles.distanceLabel}>{distance}km</Text>
          <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={100}
            step={10}
            value={distance}
            onValueChange={(value) => setDistance(value)}
            minimumTrackTintColor="#1D4ED8"
            maximumTrackTintColor="#D1D5DB"
            thumbTintColor="#1D4ED8"
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabelText}>10km</Text>
            <Text style={styles.sliderLabelText}>100km</Text>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('RideArrivalScreen')}>
          <Text style={styles.continueButtonText}>Continue ➔</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 40,
  },
  mapContainer: {
    flex: 1,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  sliderContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  distanceLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sliderLabelText: {
    fontSize: 12,
    color: '#6B7280',
  },
  continueButton: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
