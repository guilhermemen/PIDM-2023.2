import { View, Text, SectionList, StyleSheet } from "react-native"
import estilos from "./myStyle"
import dados from "./MyDados"
import dados2 from "./MyDados2"

const MyProva = () => {
    return (
        <View style={estilos.container}>
            <SectionList 
                sections={dados}
                keyExtractor={(item) => "SDDCeredEDDe" + item}
                renderItem={
                    ({item, section}) => {
                        return (
                            <Text style={estilos.conteudo2}>{item.nome}, {section.preco} </Text>
                            // <Text style={estilos.conteudo3}>{item2.nome}</Text>
                        )
                    }

                }

                renderSectionHeader={
                    ({section}) => {
                        return (
                            <Text style={estilos.conteudo1}>{section.title}</Text>
                        )
                    }
                }
            />

            <SectionList 
                sections={dados2}
                keyExtractor={(item) => "SDDCeredEDDe" + item}
                renderItem={
                    ({item}) => {
                        return (
                            <Text style={estilos.conteudo3}>{item.value} </Text>
                            // <Text style={estilos.conteudo3}>{item2.nome}</Text>
                        )
                    }

                }
            />
        </View>
    )
}


export default MyProva