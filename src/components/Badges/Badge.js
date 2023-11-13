/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import badgeIcon from '../../assets/Images/badgeIcon.png';

const Badge = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeComponent}>
        <Image source={badgeIcon} alt="" style={styles.badgeIcon} />
        <View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.bonus}>{item.bonus}</Text>
          </View>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    fontWeight: '600',
    color: 'black',
    fontSize: 17,
  },
  badgeComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  badgeIcon: {
    marginRight: 10,
  },
  desc: {
    color: 'gray',
    maxWidth: '90%',
    fontSize: 15,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  bonus: {
    fontWeight: 'bold',
    color: '#f7cf4a',
    fontSize: 18,
    marginLeft: 10,
  },
});
