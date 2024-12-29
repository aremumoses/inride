import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RideArrivalScreen() {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text></Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../../assets/images/map.png')}
          style={styles.mapImage}
        />
        <View style={styles.pickupDetails}>
          <Text style={styles.pickupTime}>7 min</Text>
          <Text style={styles.pickupAddress}>Pickup at 2601 West 7th St...</Text>
        </View>
      </View>

      {/* Arrival Info */}
      <View style={styles.arrivalContainer}>
        <Text style={styles.arrivalText}>Arriving in 5 mins</Text>
        <Text style={styles.carDetails}>Toyota Corolla | Black | EPE-546-633</Text>
      </View>

      {/* Ride Details Section */}
      <View style={styles.rideDetailsContainer}>
        <Text style={styles.detailsTitle}>Ride details</Text>
        <Text style={styles.detailsSubtitle}>
          Meet driver at pick up spot
        </Text>
        <Text style={styles.pickupInstructions}>
          AMLI 7th Street Station..., Driver will arrive here to pick you up
        </Text>
      </View>

      {/* Driver Info Section */}
      <View style={styles.driverInfoContainer}>
        <Image
          source={require('../../../assets/images/Motor.png')}
          style={styles.driverImage}
        />
         <Image
          source={require('../../../assets/images/Avatar.png')}
        style={[styles.driverImage,{marginLeft: -30}]}
        />
        <View style={styles.driverDetails}>
          <Text style={styles.driverName}>Olive Rodrigo</Text>
         
        </View> 
        <View style={{alignItems:'Right'}}>
        <Text style={styles.driverRating}>
            <Ionicons name="star" size={14} color="#FFC107" /> 4.4 | 53 rides
          </Text>
        <Text style={styles.driverPrice}>$12.5</Text>
        </View>
      </View>

      {/* Route Info */}
      <View style={styles.routeContainer}>
      <Image
          source={require('../../../assets/images/Location1.png')}
          style={[styles.driverImage,{marginTop:15,width:30,height:105,marginRight:-10,resizeMode:'contain'}]}
        />  
        <View>
        <View style={styles.routePoint}>
          <View style={styles.LocationContainer}>
          <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
          </View>
          <TouchableOpacity>
          <Image
          source={require('../../../assets/images/Edit-icon.png')}
          style={[styles.driverImage,{width:30,height:30,marginRight:0}]}
        />  
        </TouchableOpacity>
        </View>
        <View style={styles.routePoint}>
          <View style={styles.LocationContainer}>

          <Text style={styles.routeText}>AMLI 7th Street Station.</Text>
          </View>
          <TouchableOpacity>
          <Image
          source={require('../../../assets/images/Add.png')}
          style={[styles.driverImage,{width:30,height:30,marginRight:0}]}
        />
        </TouchableOpacity>
        </View>
        </View>
      </View>

      {/* Contact Options */}
      <View style={styles.contactOptions}>
        <TouchableOpacity style={{backgroundColor:'#E6F2FF',padding:15,borderRadius:8,width:'300'}} onPress={()=> navigation.navigate('ChatScreen')}>
        <Text style={styles.messageDriver}>Message Olive Rodrigo</Text>
        </TouchableOpacity>
        <View style={styles.contactIcons}>
        <Image
          source={require('../../../assets/images/Phone-call.png')}
          style={[styles.driverImage,{width:25,height:25,marginRight:0}]}
        />
          <Text style={[styles.messageDriver,{marginLeft:5}]}>Call</Text>
       
        
        </View>
      </View>

      {/* Safety Button */}
      <TouchableOpacity style={styles.safetyButton} onPress={() => navigation.navigate('ChooseDriverScreen')}>
        <Ionicons name="shield-checkmark-outline" size={20} color="#1D4ED8" />
        <Text style={styles.safetyButtonText}>Safety</Text>
      </TouchableOpacity>
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
    pickupDetails: {
      position: 'absolute',
      top: 16,
      left: 16,
      backgroundColor: '#1D4ED8',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    pickupTime: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    pickupAddress: {
      color: '#FFF',
      fontSize: 12,
    },
    arrivalContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
    },
    arrivalText: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 4,
      textAlign: 'center',
    },
    carDetails: {
      fontSize: 14,
      color: '#6B7280',
      textAlign: 'center',

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
    detailsTitle: {
      fontSize: 13,
      fontWeight: '500',
    },
    detailsSubtitle: {
      fontSize: 17,
      fontWeight: '500',
      marginTop: 8,
    },
    pickupInstructions: {
      fontSize: 13,
      color: '#6B7280',
      marginTop: 4,
    },
    driverInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    driverImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    driverDetails: {
      flex: 1,
    },
    driverName: {
      fontSize: 17,
      fontWeight: '600',
    },
    driverRating: {
      fontSize: 12,
      color: '#6B7280',
      marginTop: 4,
    },
    driverPrice: {
      fontSize: 14,
      fontWeight: '500',
      textAlign:'right'
    },
    routeContainer: {
      flexDirection:'row',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      // justifyContent:'space-between'
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
    contactOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
    //   backgroundImage:'#E5E7EB'
    },
    messageDriver: {
      color: '#000',
      fontSize: 15,
    },
    contactIcons: {
      flexDirection: 'row',
      gap: 16,
alignItems:'center'    },
    safetyButton: {
      borderColor: '#1D4ED8',
      borderWidth:1,
      backgroundColor: '#fff',
      padding: 16,
      margin: 16,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    safetyButtonText: {
      fontSize: 16,
      color: '#1D4ED8',
      marginLeft: 8,
    },
  });
  