import { View, Text, TextInput, StyleSheet } from "react-native"
import { useState } from "react"

const MyText = () => {

    const[frase, setFrase] = useState("")

    return(
        <View style={estilos.view}>
            <Text style={estilos.header}> Tradutor emoji</Text>
            <TextInput 
                style={estilos.input}
                placeholder="digite uma frase"
                defaultValue={frase}
                onChangeText={

                    (textoDigitado) => 
                    setFrase(textoDigitado)

                }
            />
            <Text style={estilos.frase}>
                {
                    frase
                    .split(" ")
                    .map((palavra) => palavra && "😭")
                    .join(" ")
                }
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({

    header:{
        fontSize: 30,
        fontWeight:"bold",
        color:"red",
        paddingBottom: 25
    },

    view:{
        flex:1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "gray",
    },

    input:{
        height: 35,
        width: 350,
        borderColor: "white",
        borderWidth: 2,
        fontSize: 22,
        fontWeight:"bold",
        paddingLeft: 10,
    },

    frase:{
        fontSize: 25,
        fontWeight:"bold",
        paddingTop: 25
    }
})

export default MyText