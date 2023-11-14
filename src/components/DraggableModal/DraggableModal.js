/* eslint-disable prettier/prettier */

import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ScrollPicker from 'react-native-picker-scrollview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DraggableModal = ({
  isVisible,
  onClose,
  onValueChange,
  selectedValue,
  prediction,
}) => {
  const num = Array.from({length: 30}, (_, i) => i + 1);
  const spRef = useRef(null);

  return (
    <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <View style={styles.dragIcon}></View>
        <Text style={styles.title}>Your prediction is {prediction}</Text>
        <Text style={styles.ticketText}>Entry Tickets</Text>
        <ScrollPicker
          ref={spRef}
          dataSource={num}
          selectedIndex={num.indexOf(selectedValue.toString())}
          itemHeight={50}
          wrapperHeight={265}
          wrapperColor={'#ffffff'}
          highlightColor={'#d8d8d8'}
          renderItem={(data, index, isSelected) => (
            <View>
              <Text style={isSelected ? styles.selectedText : styles.text}>
                {data}
              </Text>
            </View>
          )}
          onValueChange={(data, selectedIndex) => onValueChange(data)}
        />
        <Text style={styles.winText}>You can win</Text>

        <View style={styles.lowerContainer}>
          <Text style={styles.priceText}>$2000</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'gray', marginRight: 10, fontSize: 16}}>
              Total
            </Text>
            <FontAwesome
              name="circle"
              size={20}
              color="yellow"
              style={{marginRight: 10}}
            />
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              5
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Submit my prediction</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  dragIcon: {
    width: 50,
    height: 6,
    backgroundColor: 'gray',
    borderRadius: 20,
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    height: 500,
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: 'black',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    letterSpacing: 1,
  },
  ticketText: {
    color: 'gray',
    marginTop: 20,
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#6231AD',
    borderRadius: 30,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    color: 'black',
    backgroundColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedItem: {
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  winText: {
    color: 'gray',
    opacity: 0.6,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  priceText: {
    color: '#03A67F',
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  lowerContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DraggableModal;
