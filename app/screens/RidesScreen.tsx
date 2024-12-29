import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RidesScreen() {
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const ridesData = {
    Upcoming: [
      {
        id: '1',
        type: 'Reservation',
        mapImage: require('../../assets/images/map.png'),
        date: '13th, July, 2000',
        car: 'Toyota Corolla | Black | EPE-546-633',
        price: '$12.5',
        driverImage: require('../../assets/images/Avatar1.png'),
      },
      {
        id: '2',
        type: 'Delivery',
        mapImage: require('../../assets/images/map.png'),
        date: '13th, July, 2000',
        price: '$12.5',
        stops: ['AMLI 7th Street Station.', 'AMLI 7th Street Station.'],
      },
    ],
    Past: [
      {
        id: '3',
        type: 'Ride',
        mapImage: require('../../assets/images/map.png'),
        arrival: 'Arriving in 5 mins',
        price: '$12.5',
        stops: ['AMLI 7th Street Station.', 'AMLI 7th Street Station.'],
      },
    ],
  };

  const renderRideCard = (item) => (
    <View style={styles.rideCard}>
      <Text style={styles.rideType}>{item.type}</Text>
      <View style={styles.rideCardContent}>
        <Image source={item.mapImage} style={styles.mapImage} />
       
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        <View>
      {item.date && <Text style={styles.dateText}>Arrival date- {item.date}</Text>}
      {item.car && <Text style={styles.carText}>{item.car}</Text>}
      </View>
      {item.driverImage && (<>
          <Image source={item.driverImage } style={[styles.driverImage,]} />
          <Image source={require('../../assets/images/Motor.png')} style={[styles.driverImage,{marginLeft:-100}]} />
          </>  )}
        </View>
      {item.stops && (
        <View>
          {/* Route Info */}
          
              <View style={styles.routeContainer}>
                <TouchableOpacity>
                  <Image
                  source={require('../../assets/images/Location1.png')}
                  style={[styles.driverImage,{width:30,height:90,resizeMode:'contain'}]}
                />  
                </TouchableOpacity>
                <View>
                <View style={styles.routePoint}>
                  <View style={styles.greenDot} />
                  <View style={styles.LocationContainer}>
                  <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
                  </View>
                 
                </View>
                <View style={styles.routePoint}>
                  <View style={styles.redDot} />
                  <View style={styles.LocationContainer}>
        
                  <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
                  </View>
                
                </View>
                </View>
              </View>
        </View>
      )}
      <View style={styles.footer}>
        <Text style={styles.priceText}>  {item.price}</Text>
        {!item.stops && <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );

  return (
          <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rides</Text>
      </View>

      {/* Top Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Upcoming' && styles.activeTab]}
          onPress={() => setSelectedTab('Upcoming')}
        >
          <Text style={[styles.tabText, selectedTab === 'Upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Past' && styles.activeTab]}
          onPress={() => setSelectedTab('Past')}
        >
          <Text style={[styles.tabText, selectedTab === 'Past' && styles.activeTabText]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rides List */}
      <FlatList
        data={ridesData[selectedTab]}
        renderItem={({ item }) => renderRideCard(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ridesList}
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  routeContainer: {
    flexDirection:'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    justifyContent:'space-between'
  },
  LocationContainer:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 20,
    borderRadius: 8,
    width:300

},
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  greenDot: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#34D399',
    marginRight: 8,
  },
  redDot: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#F87171',
    marginRight: 8,
  },
  routeText: {
  //   flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    paddingVertical: 16,
    width: '50%',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1D4ED8',
  },
  tabText: {
    fontSize: 16,
    color: '#6B7280',
  },
  activeTabText: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  ridesList: {
    padding: 16,
  },
  rideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rideType: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  rideCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  mapImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 8,
  },
  dateText: {
    fontSize: 17,
    color: '#000',
    marginBottom: 8,
  },
  carText: {
    fontSize: 13,
    color: '#000',
    marginBottom: 8,
  },
  stop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  greenDot: {
    backgroundColor: '#34D399',
  },
  redDot: {
    backgroundColor: '#F87171',
  },
  stopText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: "flex-start",
    marginTop: 16,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#EAF4FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
