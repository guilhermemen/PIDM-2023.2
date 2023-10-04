import { View, Text, TextInput, Button, Pressable } from "react-native"
import { useState } from "react"
import estilos from "./09CSS"
import MyPressable from "./MyPressable"

const Calculadora = () => {

    const [number1, setNumber1] = useState(" ")
    const [number2, setNumber2] = useState(" ")
    const [result, setResult] = useState(" ")

    function Somar() {
        setResult(parseInt(number1) + parseInt(number2))
    }

    function Subtrair() {
        setResult(parseInt(number1) - parseInt(number2))
    }

    function Multiplicar() {
        setResult(parseInt(number1) * parseInt(number2))
    }

    function Dividir() {
        const res = parseInt(number1) / parseInt(number2)
        setResult(res.toFixed(2))
    }


    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>Calculadora 0.1</Text>
            <TextInput
                style={estilos.input}
                onChangeText={(numero) => setNumber1(numero)}
                keyboardType="numeric"
            />

            <TextInput
                style={estilos.input}
                onChangeText={(numero) => setNumber2(numero)}
                keyboardType="numeric"
            />

            <View style={estilos.containerBotoes}>
                <Button title="Somar" onPress={Somar} />
                <Button title="Sub" onPress={Subtrair} />
                <Button title="Multi" onPress={Multiplicar} />
                <Button title="Dividir" onPress={Dividir} />
            </View>

            <MyPressable funcao={Somar} titulo="Somar" />
            <Text style={[estilos.header, { marginTop: 20 }]}>
                Resultado: {result}
            </Text>
        </View>

    )
}

export default Calculadora