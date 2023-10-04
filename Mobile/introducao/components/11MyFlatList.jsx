import {View, Text, FlatList} from "react-native"

// const dados = [
//     {key: 1, nome:"jefferson", nota: 8.5},
//     {key: 2, nome:"william", nota: 8},
//     {key: 3, nome:"ariadne", nota: 9},
//     {key: 4, nome:"Guilherme", nota: 9.5},
//     {key: 5, nome:"anderson", nota: 7.5},
// ]

const dados = [
    {nome: "Fulano", nota: 10},
    {nome: "Beltrano", nota: 10},
    {nome: "Ciclano", nota: 10},
]

const MyFlatList = () => {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                width: 390,
                paddingTop: 25,
            }}
        >

           <FlatList
                data={dados}
                renderItem={
                    ({item}) =>{
                        return(
                            <View>
                                <Text style={{fontSize: 25, fontWeight:"bold"}}>
                                    {item.nome} - {item.nota}
                                </Text>
                            </View>
                        )
                    }
                }

                keyExtractor={
                    (elemento) => {
                        return elemento.nome + elemento
                    }
                }
           />

        </View>
    )
}

export default MyFlatList