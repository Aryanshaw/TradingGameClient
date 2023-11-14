/* eslint-disable prettier/prettier */

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import iconImg from '../../assets/Images/icon.png';
import userImg from '../../assets/Images/userImg.png';
import starIcon from '../../assets/Images/starIcon.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BadgeData, GamesPlayedData} from '../../data/data';
import Badge from '../../components/Badges/Badge';
import Game from '../../components/Games/Game';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('badges');

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={iconImg} alt="" />
        <Text style={styles.header}>Profile</Text>
        <View style={styles.chatIcon}>
          <Ionicons name="chatbox" size={29} color="gray" />
          <Text style={styles.msgText}>1</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <Image source={userImg} alt="" style={styles.userImg} />
        <Text style={styles.name}>Jinna Simons</Text>
        <Text style={styles.points}>6000 Pts</Text>
        <Text style={styles.userDesc}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <MaterialCommunityIcons name="logout" size={23} color="gray" />
          <Text style={{color: 'gray', fontSize: 15, letterSpacing: 1}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <Image source={starIcon} alt="" style={styles.starIcon} />
        <View style={styles.middleContent}>
          <Text
            style={{
              color: 'gray',
              fontSize: 18,
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Under or Over
          </Text>
          <View style={styles.scoreContent}>
            <View style={styles.upIcon}>
              <AntDesign name="arrowup" size={22} color="green" />
            </View>
            <Text style={styles.score}>81%</Text>
          </View>
        </View>
        <View style={styles.middleContent}>
          <Text
            style={{
              color: 'gray',
              fontSize: 18,
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Top 5
          </Text>
          <View style={styles.scoreContent}>
            <View style={styles.downIcon}>
              <AntDesign name="arrowdown" size={22} color="red" />
            </View>
            <Text style={styles.score}>-51%</Text>
          </View>
        </View>
      </View>

      <View style={styles.emptyView} />
      <View style={styles.lowerContainer}>
        <View style={styles.tabSwitchContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'games' && styles.activeTab]}
            onPress={() => setActiveTab('games')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'games' && styles.activeText,
              ]}>
              Games Played
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'badges' && styles.activeTab]}
            onPress={() => setActiveTab('badges')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'badges' && styles.activeText,
              ]}>
              Badges
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{overflow: 'scroll'}}>
        {activeTab === 'badges' &&
          BadgeData.map((item, index) => (
            <View key={index} style={styles.tabComponentContainer}>
              <Badge item={item} />
            </View>
          ))}
      </ScrollView>

      <ScrollView contentContainerStyle={{overflow: 'scroll'}}>
        {activeTab === 'games' &&
          GamesPlayedData.map((item, index) => (
            <View key={index} style={styles.tabComponentContainer}>
              <Game item={item} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 25,
  },
  header: {
    fontSize: 17,
    color: 'gray',
    letterSpacing: 1,
  },
  chatIcon: {
    position: 'relative',
  },
  msgText: {
    backgroundColor: '#6231AD',
    color: 'white',
    borderRadius: 50,
    width: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    right: -2,
    top: -2,
  },
  userInfo: {
    alignSelf: 'center',
    marginTop: 12,
  },
  userImg: {
    width: 80,
    alignSelf: 'center',
    height: 80,
  },
  name: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  points: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 8,
  },
  userDesc: {
    color: 'gray',
    padding: 15,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  logoutBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    marginHorizontal: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 25,
    position: 'relative',
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10,
  },
  scoreContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  upIcon: {
    backgroundColor: '#addbad',
    opacity: 0.7,
    borderRadius: 50,
    padding: 5,
  },
  downIcon: {
    backgroundColor: '#ffdede',
    opacity: 0.7,
    borderRadius: 50,
    padding: 5,
  },
  middleContent: {
    marginVertical: 15,
  },
  starIcon: {
    position: 'absolute',
    top: -15,
    left: '60%',
  },
  tabSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 30,
    marginTop: 10,
    backgroundColor: 'white',
  },
  tab: {
    padding: 10,
    borderWidth: 0,
    borderColor: 'white',
    borderBottomWidth: 1.5,
    width: '46%',
    alignItems: 'center',
  },
  activeTab: {
    borderColor: '#6231AD',
    borderWidth: 0,
  },
  activeText: {
    color: '#6231AD',
  },
  tabText: {
    color: '#b3b3b3',
    fontSize: 17,
    fontWeight: '600',
  },
  emptyView: {
    backgroundColor: '#eeebf7',
    width: '100%',
    height: 2,
    marginTop: 20,
  },
  tabComponentContainer: {
    padding: 10,
    backgroundColor: '#eeebf7',
  },
});
