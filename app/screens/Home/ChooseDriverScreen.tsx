import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChooseDriverScreen() {
    const navigation = useNavigation();
    const drivers = [
        {
            id: 1,
            name: 'Olive Rodrigo',
            time: '10 min',
            price: '$12.5',
            rides: 53,
            rating: 4.4,
            avatar: require('../../../assets/images/Avatar1.png'),
            isSelected: true,
        },
        {
            id: 2,
            name: 'Olive Rodrigo',
            time: '10 min',
            price: '$12.5',
            rides: 53,
            rating: 4.4,
            avatar: require('../../../assets/images/Avatar2.png'),

            isSelected: false,
        },
        {
            id: 3,
            name: 'Olive Rodrigo',
            time: '10 min',
            price: '$12.5',
            rides: 53,
            rating: 4.4,
            avatar: require('../../../assets/images/Avatar2.png'),

            isSelected: false,
        },
    ];

    const renderDriver = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.driverCard,
                item.isSelected && styles.selectedDriverCard,
            ]}
        >
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.driverInfo}>
                <Text style={styles.driverName}>{item.name}</Text>
                <Text style={styles.driverTime}>
                    {item.time} {item.price}
                </Text>
            </View>
            <View style={styles.driverStats}>
                <Text style={styles.driverRating}>
                    <Ionicons name="star" size={14} color="#FFC107" /> {item.rating} | {item.rides} rides
                </Text>
                <Text style={[styles.driverRides, { fontSize: 15, fontWeight: '600', color: '#000' }]}>{item.price} </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
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
                    source={require('../../../assets/images/map.png')}
                    style={styles.mapImage}
                />
                <View style={styles.pickupDetails}>
                    <Text style={styles.pickupAddress}>
                        AMLI 7th Street Station...
                    </Text>
                    <Text style={styles.pickupTime}>7 min</Text>
                </View>
            </View>

            {/* Driver Selection */}
            <View style={styles.selectionContainer}>
                <Text style={styles.selectionTitle}>Choose a driver</Text>
                <Text style={styles.selectionSubtitle}>
                    Prices are given by drivers
                </Text>
                <FlatList
                    data={drivers}
                    renderItem={renderDriver}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
<View style={{position:'absolute',bottom:0}}>
            {/* Payment Options */}
            <View style={{ marginLeft:25,marginRight:25,flexDirection:'row',justifyContent: 'space-between' }}>
                    <Ionicons name="card-outline" size={20} />
                    <Text style={styles.paymentMethod}>
                        Choose payment method
                    </Text>
                    <Ionicons name="chevron-forward" size={20} />
                </View>
            <View style={styles.paymentContainer}>
               
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.CarButton}>
                        <Image source={require('../../../assets/images/Car.png')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('RideDetailsScreen')}>
                        <Ionicons name="car-outline" size={20} color="#FFF" />
                        <Text style={styles.paymentButtonText}>Make payment ➔</Text>
                    </TouchableOpacity>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
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
    },
    pickupAddress: {
        color: '#FFF',
        fontSize: 12,
    },
    selectionContainer: {
        padding: 16,
    },
    selectionTitle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 4,
    },
    selectionSubtitle: {
        fontSize: 16,
        textAlign: 'center',

        color: '#6B7280',
        marginBottom: 16,
    },
    driverCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    selectedDriverCard: {
        borderColor: '#1D4ED8',
        backgroundColor: '#EAF4FF',
    },
    avatar: {
        width: 50,
        height: 50,
        //   borderRadius: 25,
        marginRight: 16,
    },
    driverInfo: {
        flex: 1,
    },
    driverName: {
        fontSize: 18,
        fontWeight: '500',
    },
    driverTime: {
        fontSize: 14,
        color: '#6B7280',
    },
    driverStats: {
        alignItems: 'flex-end',

    },
    driverRating: {
        fontSize: 12,
        color: '#6B7280',
    },
    driverRides: {
        fontSize: 12,
        color: '#6B7280',
    },
    paymentContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    paymentMethod: {
        fontSize: 14,
        marginBottom: 16,
    },
    paymentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D4ED8',
        padding: 15,
        borderRadius: 8,
        width: 320,
        margin: 20
    },
    CarButton: {
        marginTop: 20,

    },
    paymentButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
