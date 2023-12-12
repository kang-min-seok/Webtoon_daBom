import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CommunityList = ({ title, subTitle }) => {
    const navigation = useNavigation();
    const [isIcons, setIsIcons] = useState(false);
    const [count, setCount] = useState(0);

    const handleIcon = () => {
        setIsIcons(!isIcons);
        setCount(prevCount => isIcons ? prevCount - 1 : prevCount + 1);
    };

    return (
        <View style={styles.communityListContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subTitle}>
                <Text>{subTitle}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DetailedCommunityPage');
                    }}
                >
                    <MaterialCommunityIcons name="chat-outline" size={24} color={"white"} />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={handleIcon}>
                        {isIcons ? (
                            <MaterialCommunityIcons name="cards-heart" size={24} color={"black"} />
                        ) : (
                            <MaterialCommunityIcons name="cards-heart-outline" size={24} color={"white"} />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.countText}>{count}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    communityListContainer: {
        padding: 10,
        backgroundColor: '#858585',
        borderRadius: 10,
        marginBottom : 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle: {
        backgroundColor:'#CACACA',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countText: {
        color: 'white',
        marginLeft: 5,
    },
});

export default CommunityList;