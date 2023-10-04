import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react"

const JuntarFrases = () => {

    const[frase1, setFrase1] = useState("")
    const[frase2, setFrase2] = useState("")
    const[frase3, setFrase3] = useState("")

    return(
        <View style={estilos.view}>
            <Text style={estilos.header}> juntador de frasees</Text>
            <TextInput 
                style={estilos.input}
                defaultValue={frase1}
                onChangeText={

                    (textoDigitado) => 
                    setFrase1(textoDigitado)

                }
            />

            <TextInput 
                style={estilos.input}
                defaultValue={frase2}
                onChangeText={

                    (textoDigitado) => 
                    setFrase2(textoDigitado)

                }
            />

            <View style={{width: 350, height:100, fontSize:40, padding:50}}>
                <Button
                    title = "Juntar"
                    onPress={
                        () => {
                            setFrase3(frase1 + frase2)
                        }
                    }
                />
            </View>

            <Text style={estilos.frase}>
               {frase3}
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
        marginTop:20
    },

    frase:{
        fontSize: 25,
        fontWeight:"bold",
        paddingTop: 25
    }
})

export default JuntarFrases