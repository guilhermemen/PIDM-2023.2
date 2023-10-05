import { View, Text, SectionList, StyleSheet } from "react-native"
import estilos from "./myStyle"
import dados from "./MyDados"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

const MyProva = () => {
    return (

        <PaperProvider>
            <View style={estilos.container}>
                <SectionList
                    sections={dados}
                    keyExtractor={(item) => "SDDCeredEDDe" + item}
                    renderItem={
                        ({ item }) => {
                            return (
                                <>
                                    <IconButton
                                        icon="cart"
                                        iconColor={MD3Colors.tertiary0}
                                        size={30}
                                        onPress={() => console.log('Pressed')}
                                        mode="contained"
                                    />

                                    <IconButton
                                        icon="medical-bag"
                                        iconColor={MD3Colors.tertiary0}
                                        size={30}
                                        onPress={() => console.log('Pressed')}
                                        mode="contained"
                                    />
                                    <IconButton
                                        icon="tools"
                                        iconColor={MD3Colors.tertiary0}
                                        size={30}
                                        onPress={() => console.log('Pressed')}
                                        mode="contained"
                                        disabled={true}
                                    />
                                    <Text style={estilos.conteudo2}>{item.nome}</Text>
                                    <Text style={estilos.conteudo2}>{item.value}</Text>
                                    <Text style={estilos.conteudo2}>{item.time}</Text>
                                </>
                                // <Text style={estilos.conteudo3}>{item2.nome}</Text>
                            )
                        }

                    }

                    renderSectionHeader={
                        ({ section }) => {
                            return (
                                <Text style={estilos.conteudo1}>{section.title}</Text>
                            )
                        }
                    }
                />
                
            </View>

        </PaperProvider>
    )
}


export default MyProva