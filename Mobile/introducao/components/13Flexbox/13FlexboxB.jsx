import {View, Text, StyleSheet} from "react-native"

const MyFlexboxB= () => {
    return(
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
            <View 
            style={{
                backgroundColor:"white",
                width:200,
                height:200
            }}>

                <Text>FULANO</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"red",
        backgroundColor: "lightgray",

        width: 390,

        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    view1: {
        backgroundColor: "powderblue",
        width: 100,
        height: 100
    },

    view2: {
        backgroundColor: "skyblue",
        width: 100,
        height: 100
    },

    view3: {
        backgroundColor: "steelblue",
        width: 100,
        height: 100,
        alignSelf:"flex-end"
    }

})

export default MyFlexboxB