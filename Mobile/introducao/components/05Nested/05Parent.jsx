import { View, Text } from "react-native"
import ChildA from "./05ChildA"
import ChildB from "./05ChildB"

const Parent = () => {
    return (
        <View>
            <Text style={
                {
                    color: "purple",
                    fontSize: 25,
                    fontWeight: "bold"
                }
            }>Eu sou o componente pai
            </Text>

            <ChildA />
            <ChildB dica="Aqui escreva seu nome hdfsd"/>
            <ChildB dica="Aqui escreva seu endereço"/>
            <ChildB dica="Aqui escreva seu sobrenome"/>
        </View>
    )
}

export default Parent