import React from 'react';
import { ActivityIndicator, Modal, Platform, View } from 'react-native';
import styles from './styles';

const LoaderView = (props) => {
    const { loading } = props;
    return (
        <Modal visible={loading} animationType="none" transparent={true}>
            <View style={styles.mainView}>
                <ActivityIndicator color={'#53D495'} size={Platform.OS === 'ios' ? 'large' : 30} />
            </View>
        </Modal>
    );
}

export default LoaderView;


