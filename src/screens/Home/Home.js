/* eslint-disable prettier/prettier */

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import background1 from '../../assets/Images/background1.png';
import DraggableModal from '../../components/DraggableModal/DraggableModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [prediction, setPrediction] = useState('');

  const openModal = str => {
    setModalVisible(true);
    setPrediction(str);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleValueChange = value => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Games</Text>

      {/* Modal */}

      {/* <BottomSheet hasDraggableIcon ref={bottomSheet} height={600}>
        <Text style={styles.header}>hello</Text>
        <ScrollPicker
          dataSource={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          selectedIndex={index}
          renderItem={(data, index) => {
            return (
              <View>
                <Text style={styles.header}>{data}</Text>
              </View>
            );
          }}
          onValueChange={(data, selectedIndex) => {
            //
            index(selectedIndex);
          }}
          wrapperHeight={150}
          wrapperColor="#FFFFFF"
          itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </BottomSheet> */}

      <View style={styles.componentContainer}>
        <View style={styles.componentImgContainer}>
          <Image style={styles.background} source={background1} alt="" />
          <View style={styles.imgContent}>
            <View style={styles.imgTopContent}>
              <Text style={styles.imgText}>UNDER OR OVER</Text>
              <Text style={styles.imgText}>
                Starting in{' '}
                <AntDesign
                  name="clockcircle"
                  color={styles.imgText}
                  size={14}
                />{' '}
                24.02.03
              </Text>
            </View>
            <View style={styles.imgTopContent2}>
              <Text style={styles.imgText}>Bitcoin price will be under</Text>
              <Text style={styles.bitcoinText}>
                $24,524 at 7 a ET on 22nd Jan’21
              </Text>
            </View>
          </View>
        </View>

        {/* table  */}
        <View style={styles.table}>
          {/* Header row */}
          <View style={styles.tableRow}>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeader}>PRIZE POOL</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeader}>UNDER</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeader}>OVER</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeader}>ENTRY FEES</Text>
            </View>
            {/* Add more header cells as needed */}
          </View>

          <View style={styles.tableRow}>
            <View style={styles.cell}>
              <Text style={styles.tableData}>$12,000</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.tableData}>3.25x</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.tableData}>1.25x</Text>
            </View>
            <View
              style={[styles.cell, {display: 'flex', flexDirection: 'row'}]}>
              <Text style={styles.tableData}>5</Text>
              <FontAwesome
                name="circle"
                size={20}
                color="yellow"
                style={{marginLeft: 10}}
              />
            </View>
            {/* Add more data cells as needed */}
          </View>
        </View>

        <View style={styles.middleComponent}>
          <Text style={styles.textComponent}>What's your prediction?</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.underBtn}
              onPress={() => openModal('under')}>
              <View style={styles.btnContent}>
                <Entypo name="arrow-bold-down" size={20} color="white" />
                <Text style={styles.btnText}>Under</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overBtn}
              onPress={() => openModal('over')}>
              <View style={styles.btnContent}>
                <Entypo name="arrow-bold-up" size={20} color="white" />
                <Text style={styles.btnText}>Over</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.lowerTopContainer}>
            <View style={styles.lowerTopContent}>
              <FontAwesome name="user" size={20} color="gray" />
              <Text style={styles.textComponent}>355 Players</Text>
            </View>
            <View style={styles.lowerTopContent}>
              <FontAwesome name="area-chart" size={20} color="gray" />
              <Text style={styles.textComponent}>View Chart</Text>
            </View>
          </View>
          <View style={styles.lowerMiddleContainer}>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progress,
                  {width: '75%', backgroundColor: '#FE4190'},
                ]}
              />
              <View
                style={[
                  styles.progress,
                  {width: '25%', backgroundColor: '#2DABAD'},
                ]}
              />
            </View>
          </View>
          <View style={styles.lowerTopContainer}>
            <Text style={styles.lowerContentText}>232 predicted under</Text>
            <Text style={styles.lowerContentText}>150 prdicted over</Text>
          </View>
        </View>
      </View>
      <DraggableModal
        isVisible={modalVisible}
        onClose={closeModal}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
        prediction={prediction}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  componentImgContainer: {
    width: '100%',
  },
  componentContainer: {
    display: 'flex',
    position: 'relative',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.4,
  },
  background: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgContent: {
    position: 'absolute',
    top: '16%',
    paddingHorizontal: 10,
    width: '100%',
  },
  imgTopContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  imgText: {
    color: 'lightgray',
  },
  imgTopContent2: {
    marginTop: 20,
  },
  bitcoinText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  table: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  tableRow: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 0,
    marginTop: 5,
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  tableHeader: {
    color: 'grey',
    fontSize: 14,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableData: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  middleComponent: {},
  textComponent: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  underBtn: {
    backgroundColor: '#452C55',
    width: 120,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overBtn: {
    backgroundColor: '#6231AD',
    width: 120,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lowerContainer: {
    backgroundColor: '#F6F3FA',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  lowerTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  lowerTopContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 20,
    overflow: 'hidden',
    width: '92%',
    alignSelf: 'center',
    marginTop: 5,
  },
  progress: {
    // flex: 1,
    opacity: 0.7,
  },
  lowerLowerContainer: {},
  lowerContentText: {
    color: 'gray',
    fontSize: 13,
    marginTop: 10,
  },
});
