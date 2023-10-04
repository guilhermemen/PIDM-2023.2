import {StyleSheet} from "react-native"

const estilos = StyleSheet.create({

    container: {
        flex:1,
        width:390,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },

    header: {
        fontSize: 22,
        fontWeight:"bold"
    },

    input:{
        height: 35,
        width: 200,
        borderColor: "black",
        borderWidth: 2,
        paddingLeft:10,
        margin: 5,

        fontSize:20
    },

    containerBotoes: {
        flexDirection:"row",
        width: 300,
        justifyContent:"space-evenly",
        marginTop:5
    }
})

export default estilos
