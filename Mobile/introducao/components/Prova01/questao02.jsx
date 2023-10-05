import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import estilos2 from './MyStyle2';

const MyModal1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={estilos2.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={estilos2.centeredView}>
          <View style={estilos2.modalView}>
            <Text style={estilos2.modalText}>asdas</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[estilos2.button, estilos2.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={estilos2.textStyle}>asdasdas</Text>
      </Pressable>
    </View>
  );
};

export default MyModal1;