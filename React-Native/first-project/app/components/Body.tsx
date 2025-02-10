import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import styleExterno from "../style";

const Body = () => {
    return (
        <View>
            <View style={{ ...styles.view }}>
                <Image
                    style={{width: 190, height: 190, backgroundColor: "blue"}}
                    source="https://picsum.photos/seed/696/3000/2000"
                    contentFit="cover"
                    transition={1000}
                />
                <Text style={{ ...styleExterno.fontStyle }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi mollitia deleniti sequi laborum voluptatibus quasi. Laborum, quo odio quaerat culpa a autem impedit eveniet maiores at distinctio tempora labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt minima facilis et optio. Suscipit debitis, nesciunt nam vero quos expedita. Assumenda eligendi laudantium debitis pariatur eius obcaecati alias reiciendis.</Text>
            </View>
            <View style={{ ...styles.view }}>
                <Text style={{ ...styles.text }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi mollitia deleniti sequi laborum voluptatibus quasi. Laborum, quo odio quaerat culpa a autem impedit eveniet maiores at distinctio tempora labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt minima facilis et optio. Suscipit debitis, nesciunt nam vero quos expedita. Assumenda eligendi laudantium debitis pariatur eius obcaecati alias reiciendis.</Text>
                <Image
                    style={{width: 190, height: 190, backgroundColor: "blue"}}
                    source="https://picsum.photos/seed/696/3000/2000"
                    contentFit="cover"
                    transition={1000}
                />
            </View>
        </View>
                );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row" ,
        flexWrap: "wrap",
        padding: 4,
    },
    text: {
        width: "50%",
        borderWidth: 1,
        color: "black",
        padding: 10,
    }

  });

export default Body;