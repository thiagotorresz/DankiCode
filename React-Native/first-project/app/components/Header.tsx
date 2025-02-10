import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={{ ...styles.view }}>
            <Text style={{ ...styles.text }}>Casa Campo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
      backgroundColor: 'green',
      padding: 20,
      borderRadius: '15',
      width: '100%',
    },
    text: {
        textAlign: "center",
        fontSize: 30, 
        color: "white"
    }

  });

export default Header;