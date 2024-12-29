import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReserveRideScreen( ) {
    const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date) setSelectedDate(date);
  };

  const handleTimeChange = (event, time) => {
    if (time) {
      setShowTimePicker(false);
      setSelectedTime(time);
    }
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${isPM ? 'PM' : 'AM'}`;
  };

  return (
            <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.container}>
        
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reserve ride</Text>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>
            <Ionicons name="chevron-back-outline" size={24} color="#007BFF" />
          </TouchableOpacity>
          <Text style={styles.calendarMonth}>
            {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </Text>
          <TouchableOpacity onPress={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>
            <Ionicons name="chevron-forward-outline" size={24} color="#007BFF" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[...Array(31).keys()].map((i) => ({
            day: i + 1,
            isSelected: selectedDate.getDate() === i + 1,
          }))}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.calendarDay, item.isSelected && styles.selectedDay]}
              onPress={() => setSelectedDate(new Date(selectedDate.setDate(item.day)))}
            >
              <Text
                style={[
                  styles.dayText,
                  item.isSelected && styles.selectedDayText,
                ]}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={7}
          keyExtractor={(item) => item.day.toString()}
          contentContainerStyle={styles.daysGrid}
        />
        <View style={styles.timePickerContainer}>
          <Text style={styles.timeLabel}>Time</Text>
          <TouchableOpacity
            onPress={() => setShowTimePicker(true)}
            style={styles.timeButton}
          >
            <Text style={styles.timeText}>{formatTime(selectedTime)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        {[
          {
            icon: 'calendar-outline',
            text: 'Choose your exact pickup date up to 120 days in advance',
          },
          {
            icon: 'time-outline',
            text: 'Take your time, a driver will be waiting for you',
          },
          {
            icon: 'car-outline',
            text: 'Cancellation of ride, absent—no charges up to 60 minutes before the ride',
          },
        ].map((item, index) => (
          <View key={index} style={styles.infoItem}>
            <Ionicons name={item.icon} size={24} color="#000" />
            <Text style={styles.infoText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Reserve Button */}
      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Reserve a ride</Text>
      </TouchableOpacity>

      {/* Time Picker */}
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={false}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}
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
    calendarContainer: {
      padding: 16,
      backgroundColor: '#FFFFFF',
      margin: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    calendarHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    calendarMonth: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#374151',
    },
    daysGrid: {
      justifyContent: 'center',
    },
    calendarDay: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
      borderRadius: 20,
      backgroundColor: '#F3F4F6',
    },
    selectedDay: {
      backgroundColor: '#007BFF',
    },
    dayText: {
      fontSize: 14,
      color: '#6B7280',
    },
    selectedDayText: {
      color: '#FFF',
    },
    timePickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    timeLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#374151',
    },
    timeButton: {
      marginLeft: 16,
      backgroundColor: '#EAF4FF',
      padding: 8,
      borderRadius: 8,
    },
    timeText: {
      fontSize: 16,
      color: '#007BFF',
    },
    infoContainer: {
      paddingHorizontal: 16,
      marginTop: 16,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    infoText: {
      marginLeft: 16,
      fontSize: 16,
      color: '#000',
    },
    reserveButton: {
      backgroundColor: '#007BFF',
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginTop: 16,
      alignItems: 'center',
    },
    reserveButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });
