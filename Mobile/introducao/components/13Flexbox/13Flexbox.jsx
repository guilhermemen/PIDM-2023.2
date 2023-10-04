import {View, Text, StyleSheet} from "react-native"

const MyFlexbox = () => {
    return(
        <View style={estilos.container}>
            <Text>Jefferson</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"red",
        marginTop:25,
        width: 390
    }
})

export default MyFlexbox