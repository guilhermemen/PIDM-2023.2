import {View, Text, StyleSheet} from "react-native"

const MyFlexbox = () => {
    return(
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"red",
        width: 390
    },

    view1: {
        backgroundColor: "green",
        flex:1
    },

    view2: {
        backgroundColor: "blue",
        flex:2
    },

    view3: {
        backgroundColor: "yellow",
        flex:3
    }

})

export default MyFlexbox