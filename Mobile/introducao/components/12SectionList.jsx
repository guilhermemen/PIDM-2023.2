import { View, Text, SectionList, StyleSheet } from "react-native"

const dados = [
    {
        title: "W", data: [
            { nome: "Jefferson", id: 1 },
            { nome: "Jonas", id: 2 },
        ]
    },
    {
        title: "I", data: [
            { nome: "beltrano", id: 3 },
            { nome: "Jonas", id: 4 }
        ]
    },
    {
        title: "E", data: [
            { nome: "Ciclano", id: 5 },
            { nome: "fulano", id: 6}
        ]
    },

]

const MySectionList = () => {
    return (
        <View style={estilos.container}>
            <SectionList 
                sections={dados}
                keyExtractor={(item) => "SDDCeredEDDeed" + item}
                renderItem={
                    ({item}) => {
                        return (
                            <Text style={{fontSize:25}}>{item.nome}</Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({section}) => {
                        return (
                            <Text style={{fontSize:25, fontWeight:"bold"}}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
        width:390
    }
})
export default MySectionList