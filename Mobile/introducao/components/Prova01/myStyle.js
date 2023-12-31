import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding:30,
        paddingTop: 25,
        width:390,
        backgroundColor: "white",
    },
    //data das compras
    conteudo1:{
        color:"black",
        fontSize:20,
        fontWeight:"medium"
    },
    //compras
    conteudo2: {
        fontSize: 25,
        color:"black",
        fontWeight:"600",
        paddingLeft: 20

    },

    conteudo3: {
        fontSize: 40,
        color:"black",
        fontWeight:"600",
        paddingLeft: 20,

        flexDirection:"column-reverse",
        justifyContent:"flex-end",
        alignItems:"column"
    },

})

export default estilos