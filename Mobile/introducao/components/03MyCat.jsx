import {View, Text} from "react-native"

const MyCat = () => {

    let nomeDoGato = "Tom"

    const getFullName = (primeiroNome, segundoNome) => {
        return primeiroNome + " " + segundoNome
    }
    return (
        <View>
            <Text style={{fontSize:20, fontWeight: "bold"}}>
                O nome do Gato é {getFullName("Tom", "Felino")}
            </Text>
        </View>
    )
}

export default MyCat