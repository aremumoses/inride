import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps'; 
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
<View style={styles.searchBarContainer}>
  <View style={styles.searchBarWrapper}>
    <Ionicons name="search-outline" size={20} color="#A6A6A6" style={styles.searchIcon} />
    <TextInput
      style={styles.searchBar}
      placeholder="Where to?"
      placeholderTextColor="#000"
    />
  </View>
</View>

      {/* Recent Locations */}
<View style={styles.locationCardContainer}>
  {['AMLI 7th Street Station', 'Another Location'].map((location, index) => (
    <View key={index}>
      <TouchableOpacity style={styles.locationCard}>
        <Image
          source={require('../../../assets/images/Timer-icon.png')}
          style={{ height: 26, width: 26 }}
        />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationTitle}>{location}</Text>
          <Text style={styles.locationSubtitle}>
            2601 West 7th St. Fort Worth, Texas 7
          </Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={19} color="#000000" />
      </TouchableOpacity>
      {index < ['AMLI 7th Street Station', 'Another Location'].length - 1 && (
        <View style={styles.divider} />
      )}
    </View>
  ))}
</View>


        {/* Drivers Nearby Section */}
        <TouchableOpacity style={styles.driversNearbyContainer} onPress={() => navigation.navigate('StayInAreaScreen')}>
         
          <Image
            source={require('../../../assets/images/Banner1.png')}
            style={styles.driversNearbyImage}
            resizeMode='contain'
          />
        </TouchableOpacity>

   
{/* Our Services Section */}
<Text style={styles.sectionTitle}>Our Services</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
  {[
    { title: 'Ride', image: require('../../../assets/images/Item1.png') },
    { title: 'Reserve', image: require('../../../assets/images/Item2.png') },
    { title: 'Group Ride', image: require('../../../assets/images/Item3.png') },
    { title: 'Reserve', image: require('../../../assets/images/Item2.png') },
    { title: 'Ride', image: require('../../../assets/images/Item1.png') },


  ].map((service, index) => (
    <TouchableOpacity key={index} style={styles.serviceCard}>
      <Image source={service.image} style={styles.serviceImage} />
      <Text style={styles.serviceText}>{service.title}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>



        {/* Ways to Use Section */}
        <Text style={styles.sectionTitle}>Ways to use <Text style={{color:'#007BFF'}}>inride </Text></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.waysToUseContainer}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.waysToUseCard}>
                <Image
                  source={require('../../../assets/images/image1.png')}
                  style={styles.waysToUseImage}
                  resizeMode='contain'
                />
                <Text style={styles.waysToUseText}>Schedule ride in to the future ➔</Text>
                <Text style={styles.waysToUseTextt}>send and receive parcels siwftly</Text>
              </View>
            ))}
        </ScrollView>

          {/* Drivers Nearby Section */}
          <TouchableOpacity style={styles.driversNearbyContainer} onPress={() => navigation.navigate('ReserveRideScreen')}>
         
         <Image
           source={require('../../../assets/images/Banner2.png')}
           style={styles.driversNearbyImage}
           resizeMode='contain'
         />
       </TouchableOpacity>

 {/* Ways to Use Section */}
 <Text style={styles.sectionTitle}>Other <Text style={{color:'#007BFF'}}>services </Text></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.waysToUseContainer}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.waysToUseCard}>
                <Image
                  source={require('../../../assets/images/image.png')}
                  style={styles.waysToUseImage}
                  resizeMode='contain'
                />
                <Text style={styles.waysToUseText}>Group ride ➔</Text>
                <Text style={styles.waysToUseTextt}>Order  together with your friends </Text>
              </View>
            ))}
        </ScrollView>


      {/* Around You Section */}
<Text style={styles.sectionTitle}>Around You</Text>
<View style={styles.mapContainer}>
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 32.7534, // Replace with your default latitude
      longitude: -97.3317, // Replace with your default longitude
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {/* Example Marker */}
    <Marker
      coordinate={{
        latitude: 32.7534,
        longitude: -97.3317,
      }}
      title="Example Location"
      description="This is a placeholder description."
    />
  </MapView>
</View>

      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 200, // Fixed height for the map container
    borderRadius: 8,
    overflow: 'hidden', // Ensures rounded corners
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 15,
  },
  
  searchBarContainer: {
    margin: 16,
    marginBottom: 8,
  },
 
  locationCardContainer: {
    marginHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
  },
  
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
  },
  locationTextContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  locationTitle: {
    fontWeight: '400',
    fontSize: 16,
  },
  locationSubtitle: {
    color: '#A6A6A6',
    fontSize: 14,
  },
  driversNearbyContainer: {
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  driversNearbyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  driversNearbyLink: {
    color: '#FFF',
    marginVertical: 8,
  },
  driversNearbyImage: {
    width: '100%',
    height: 150,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontWeight: '500',
    fontSize: 19,
  },
  // servicesContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginHorizontal: 16,
  //   marginBottom: 16,
  // },

  servicesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding:5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16, // Adds spacing between cards
    width: 100,
  },
  serviceImage: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 8, // Optional: Add rounded corners for images
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },

  waysToUseContainer: {
    paddingHorizontal: 16,
  },
  waysToUseCard: {
   marginRight: 16,
  },
  waysToUseImage: {
    borderRadius: 8,
    width: 250,
    height: 150,
    marginBottom: 8,
  },
  waysToUseText: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'left',
    color: '#344054',
  },
    waysToUseTextt: {
      fontSize: 15,
    fontWeight: '500',
      textAlign: 'left',
      color: '#344054',
  },
});
