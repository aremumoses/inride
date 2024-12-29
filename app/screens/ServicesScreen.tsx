

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ServicesScreen() {
  const navigation = useNavigation();
  const nearbyPickups = [
    {
      id: '1',
      title: 'AMLI 7th Street Station.',
      address: '2601 West 7th St. Fort Worth, Texas 7',
    },
    {
      id: '2',
      title: 'AMLI 7th Street Station.',
      address: '2601 West 7th St. Fort Worth, Texas 7',
    },
  ];

  const recentSearches = [
    {
      id: '3',
      title: 'AMLI 7th Street Station.',
      address: '2601 West 7th St. Fort Worth, Texas 7',
    },
    {
      id: '4',
      title: 'AMLI 7th Street Station.',
      address: '2601 West 7th St. Fort Worth, Texas 7',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
       <TouchableOpacity>
       <Image
                  source={require('../../assets/images/Location-icon.png')}
                  style={styles.profileImage}
                />
          </TouchableOpacity>
      <View style={styles.listTextContainer}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listSubtitle}>{item.address}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#000" />
    </View>
  );

  return (
       <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.container}>
      <ScrollView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Arrange your ride</Text>
      </View>

      {/* Ride Type */}
      <View style={styles.rideTypeContainer}>
        <TouchableOpacity style={[styles.rideTypeButton, styles.activeRideTypeButton]}>
          <Ionicons name="car-outline" size={20} color="#1D4ED8" />
          <Text style={[styles.rideTypeText, styles.activeRideTypeText]}>Pick up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rideTypeButton}>
          <Ionicons name="person-outline" size={20} color="#1D4ED8" />
          <Text style={styles.rideTypeText}>For me</Text>
        </TouchableOpacity>
      </View>

      {/* Locations */}
      <View style={styles.locationContainer}>
        <TouchableOpacity>
                          <Image
                          source={require('../../assets/images/Location1.png')}
                          style={[styles.driverImage,{width:30,height:105,resizeMode:'contain',marginTop:10}]}
                        />  
                        </TouchableOpacity>
                        <View>
        <View style={styles.locationItem}>
          <TextInput
            style={styles.locationInput}
            value="AMLI 7th Street Station."
            editable={false}
          />
        </View>
        <View style={styles.locationItem}>
          <TextInput style={styles.locationInput} placeholder="Where to ?" />
          <TouchableOpacity>
       <Image
                  source={require('../../assets/images/Add.png')}
                  style={styles.profileImage}
                />
          </TouchableOpacity>
        </View>
        </View>
      </View>

      {/* Saved Places & Map */}
      <TouchableOpacity style={styles.optionItem}>
      <TouchableOpacity>
       <Image
                  source={require('../../assets/images/Star-icon.png')}
                  style={styles.profileImage}
                />
          </TouchableOpacity>
        <Text style={styles.optionText}>Saved Places</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
      <TouchableOpacity>
       <Image
                  source={require('../../assets/images/Location-icon.png')}
                  style={styles.profileImage}
                />
          </TouchableOpacity>
        <Text style={styles.optionText}>Select Location via Map</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#000" />
      </TouchableOpacity>

      {/* Close by Pickups */}
      <Text style={styles.sectionTitle}>Close by Pickups</Text>
      <FlatList
        data={nearbyPickups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Recent Searches */}
      <Text style={styles.sectionTitle}>Recent Search</Text>
      <FlatList
        data={recentSearches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  rideTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  rideTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  activeRideTypeButton: {
    backgroundColor: '#fff',
  },
  rideTypeText: {
    color: '#1D4ED8',
    marginLeft: 8,
    fontWeight: '500',

  },
  activeRideTypeText: {
    color: '#1D4ED8',
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection:'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 8,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 8,
  },
  locationInput: {
    // flex: 1,
    width:330,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 14,
    padding: 15,
    marginLeft: 8,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  greenDot: {
    backgroundColor: '#34D399',
  },
  redDot: {
    backgroundColor: '#F87171',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginLeft: 16,
    color: '#1D4ED8',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  listTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },
  listSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
});
