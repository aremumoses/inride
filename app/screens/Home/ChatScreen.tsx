import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChatScreen() {
    const navigation = useNavigation();
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const messages = [
    { id: '1', text: "Hi!", time: "10:10pm", isSent: true },
    {
      id: '2',
      text: "Awesome, thanks for letting me know! Can't wait for my delivery. 🎉",
      time: "10:11pm",
      isSent: true,
    },
    {
      id: '3',
      text: "No problem at all! I'll be there in about 15 minutes.",
      time: "10:12pm",
      isSent: false,
    }, {
        id: '4',
        text: "Awesome, thanks for letting me know! Can't wait for my delivery. 🎉",
        time: "10:11pm",
        isSent: true,
      },
  ];

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.isSent ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text style={ item.isSent ? styles.messageText: styles.messageTextt}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
 <LinearGradient colors={['#EAF4FF', '#FFFFFF']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/images/Avatar.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Olive Rodrigo</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="videocam-outline" size={24} color="#000" style={styles.icon} />
          <Ionicons name="call-outline" size={24} color="#000" />
        </View>
      </View>

      {/* Info */}
      <Text style={styles.infoText}>
        Keep your account safe—don’t share personal or account information here
      </Text>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
      />

      {/* Options */}
      {isOptionsVisible && (
        <View style={styles.optionsContainer}>
          {[
            { id: '1', icon: require('../../../assets/images/Mic-icon.png'), text: 'Camera' },
            { id: '2', icon: require('../../../assets/images/Mic-icon.png'), text: 'Record' },
            { id: '3', icon: require('../../../assets/images/Contact-icon.png'), text: 'Contact' },
            { id: '4', icon: require('../../../assets/images/Image-icon.png'), text: 'Gallery' },
            { id: '5', icon: require('../../../assets/images/Loc-icon.png'), text: 'My Location' },
            { id: '6', icon: require('../../../assets/images/File-icon.png'), text: 'Document' },
          ].map((option) => (
            <TouchableOpacity key={option.id} style={styles.option}>
 <Image
          source={option.icon}
          style={[styles.driverImage,{width:30,height:30,marginRight:0}]}
        />  
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Input */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setIsOptionsVisible(!isOptionsVisible)}>
          <Ionicons name="add-outline" size={24} color="#1D4ED8" />
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Type a message..." />
        <TouchableOpacity>
          <Ionicons name="send-outline" size={24} color="#FFF" style={styles.sendButton} />
        </TouchableOpacity>
      </View>
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
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginLeft: 16,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    profileName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerIcons: {
      flexDirection: 'row',
    },
    icon: {
      marginRight: 16,
    },
    infoText: {
      textAlign: 'center',
      fontSize: 12,
      color: '#6B7280',
      padding: 8,
      backgroundColor: '#E5E7EB',
    },
    messagesList: {
      flex: 1,
      padding: 16,
    },
    messageContainer: {
      padding: 12,
      borderRadius: 8,
      marginBottom: 8,
      maxWidth: '70%',
    },
    sentMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#1D4ED8',
    },
    receivedMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFFFFF',
      borderColor: '#E5E7EB',
      borderWidth: 1,
    },
    messageText: {
      color: '#FFF',
      fontSize: 14,
    },
    messageTextt: {
        color: '#000',
        fontSize: 14,
      },
    receivedMessageText: {
      color: '#374151',
    },
    messageTime: {
      marginTop: 4,
      fontSize: 10,
      color: '#D1D5DB',
      alignSelf: 'flex-end',
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: '#FFFFFF',
      padding: 16,
      elevation:3,
      borderRadius:5
    },
    driverImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
      },
    option: {
      alignItems: 'center',
      marginBottom: 16,
    },
    optionText: {
      marginTop: 8,
      fontSize: 12,
      color: '#000',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
    },
    textInput: {
      flex: 1,
      backgroundColor: '#F3F4F6',
      borderRadius: 8,
      padding: 12,
      marginHorizontal: 8,
    },
    sendButton: {
      backgroundColor: '#1D4ED8',
      padding: 8,
      borderRadius: 8,
    },
  });
  