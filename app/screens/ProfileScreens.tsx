 

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreens() {
  const navigation= useNavigation();
  const recentRides = [
    {
      id: 1,
      title: 'Delivery to California',
      date: 'Nov 14th, 2024 21:42:39',
      amount: '$200',
      status: 'Successful',
      statusColor: '#34D399', // Green
    },
    {
      id: 2,
      title: 'Ride to Washington DC',
      date: 'Nov 14th, 2024 21:42:39',
      amount: '$20',
      status: 'Canceled',
      statusColor: '#F87171', // Red
    },
    {
      id: 3,
      title: 'Group ride to Washington DC',
      date: 'Nov 14th, 2024 21:42:39',
      amount: '$20',
      status: 'Pending',
      statusColor: '#FBBF24', // Yellow
    },
    {
      id: 4,
      title: 'Ride to Washington DC',
      date: 'Nov 14th, 2024 21:42:39',
      amount: '$20',
      status: 'Canceled',
      statusColor: '#F87171', // Red
    },
  ];

  const renderRide = ({ item }) => (
    <View style={styles.rideItem}>
      <View>
        <Text style={styles.rideTitle}>{item.title}</Text>
        <Text style={styles.rideDate}>{item.date}</Text>
      </View>
      <View style={styles.rideDetails}>
        <Text style={styles.rideAmount}>{item.amount}</Text>
        <Text style={[styles.rideStatus, { color: item.statusColor }]}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/map.png')}
          style={styles.mapImage}
        />
        <View style={styles.earningsContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <Text style={styles.earningsAmount}>5000</Text>
        </View>
      </View>

      {/* Earnings Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.earningsTitle}>Earnings</Text>
        <Text style={styles.earningsDate}>Mar 11 - Mar 17</Text>
        <Text style={styles.earningsTotal}>$458.88</Text>
        <Text style={styles.earningsRides}>23 rides over the last 5 days</Text>
        <TouchableOpacity style={styles.cashOutButton}>
          <Text style={styles.cashOutButtonText}>Cash out $458.88</Text>
        </TouchableOpacity>
        <Text style={styles.payoutInfo}>
          Last weekly payout was <Text style={styles.boldText}>$458.88</Text> Mar 12 25 rides
        </Text>
        <TouchableOpacity>
          <Text style={styles.weeklyBreakdown}>See weekly breakdown ➔</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Rides */}
      <View style={styles.recentRidesContainer}>
        <Text style={styles.recentRidesTitle}>Recent Rides</Text>
        <FlatList
          data={recentRides}
          renderItem={renderRide}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
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
  },
  mapContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  earningsContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center'
  },
  currencySymbol: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 4,
  },
  earningsAmount: {
    color: '#FFF',
    textAlign:'center',

    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    justifyContent: 'center',
    textAlign:'center'
  },
  earningsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 4,
  },
  earningsDate: {
    fontSize: 14,
    color: '#6B7280',
    textAlign:'center',
    marginBottom: 8,
  },
  earningsTotal: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign:'center'

  },
  earningsRides: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    textAlign:'center'

  },
  cashOutButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    width:300,
    alignSelf:'center'
  },
  cashOutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payoutInfo: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  weeklyBreakdown: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 16,
  },
  recentRidesContainer: {
    padding: 16,
  },
  recentRidesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: '500',
    color:'#000',
    marginVertical:10
  },
  rideDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  rideDetails: {
    alignItems: 'flex-end',
  },
  rideAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rideStatus: {
    fontSize: 12,
  },
});
