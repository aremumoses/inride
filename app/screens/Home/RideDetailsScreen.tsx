import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RideDetailsScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ride details</Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../../assets/images/map.png')}
          style={styles.mapImage}
        />
        <View style={styles.earningsContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <Text style={styles.earningsAmount}>5000</Text>
        </View>
      </View>

      {/* Ride Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Ride details</Text>
        <Text style={styles.detailsDate}>Mar 11, 2024 21:42:39</Text>
        <Text style={styles.earningsLabel}>Your earnings</Text>
        <Text style={styles.earnings}>$458.88</Text>
      </View>

      {/* Route Section */}
      <View style={styles.routeContainer}>
        <Image
          source={require('../../../assets/images/map.png')}
          style={styles.routeMap}
        />
        <Text style={styles.rideTime}>9 mins ride</Text>
       
         {/* Route Info */}
             <View style={[styles.routeContainer,{flexDirection:'row'}]}>
                <TouchableOpacity>
                                <Image
                                source={require('../../../assets/images/Location1.png')}
                                style={[styles.driverImage,{width:30,height:90,resizeMode:'contain',marginTop:-15}]}
                              />  
                              </TouchableOpacity>
                              <View>
               <View style={styles.routePoint}>
                 <View style={styles.LocationContainer}>
                 <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
                 </View>
                 <TouchableOpacity>
                
               </TouchableOpacity>
               </View>
               <View style={styles.routePoint}>
                 <View style={styles.LocationContainer}>
       
                 <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
                 </View>
                 <TouchableOpacity>
                 {/* <Image
                 source={require('../../../assets/images/Add.png')}
                 style={[styles.driverImage,{width:30,height:30,marginRight:0}]}
               /> */}
               </TouchableOpacity>
               </View>
               </View>
             </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    rideDetailsContainer: {
      padding: 16,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      margin: 16,
      borderRadius: 8,

    },
    LocationContainer:{
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginHorizontal: 20,
        borderRadius: 8,
        width:300
  
    },
    driverImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
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
      fontWeight: 'bold',
      marginLeft: 16,
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
      position: 'absolute',
      top: 16,
      right: 16,
      backgroundColor: '#007BFF',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    currencySymbol: {
      color: '#FFF',
      fontSize: 16,
      marginRight: 4,
    },
    earningsAmount: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    detailsContainer: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
    },
    detailsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    detailsDate: {
      color: '#6B7280',
      fontSize: 14,
      marginBottom: 8,
    },
    earningsLabel: {
      color: '#6B7280',
      fontSize: 14,
      marginBottom: 4,
    },
    earnings: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#007BFF',
    },
    routeContainer: {
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      justifyContent:'space-between',
      // flexDirection: 'row',
      alignItems: 'center',

    },
    routePoint: {
      // flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
   
    routeText: {
    //   flex: 1,
      fontSize: 14,
      color: '#374151',
    },
    contactOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
    //   backgroundImage:'#E5E7EB'
    },
   
    routeMap: {
      width: '100%',
      height: 150,
      borderRadius: 8,
      marginBottom: 16,
    },
    rideTime: {
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 16,
    },
    routeDetails: {
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      paddingTop: 16,
    },
   
  });
  