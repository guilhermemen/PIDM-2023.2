import { View, Text, FlatList } from "react-native"
import { useEffect, useState } from "react"
import Estilos from "./14Estilos"

const MyNetworking = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(
        () => {
            getMovies()
        }
        ,
        []
    )

    const getMovies = () => {
        fetch("https://reactnative.dev/movies.json")
            .then(response => response.json())
            .then(
                ({ title, description, movies }) => {
                    setTitle(title)
                    setDescription(description)
                    setMovies(movies)
                }
            )
            .catch(error => console.log(error))
    }
    return (
        <View style={Estilos.container}>
            <Text style={Estilos.header}>{title}</Text>
            <View style={{ padding: 30, backgroundColor: "red", margin: 20 }}>
                <Text style={Estilos.description}>{description}</Text>
            </View>

            <FlatList
                style={{width:"100%", backgroundColor: "orange"}}
                data={movies}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={{flex:1, flexDirection: "row",
                            padding:10, margin:10, backgroundColor:"yellow"}}>
                                <View>
                                    <Text style={{fontSize:25, fontWeight:"bold"}}>{item.id}</Text>
                                </View>

                                <View>
                                    <Text style={{fontSize:25}}>{item.title}</Text>
                                    <Text style={{fontSize:25}}>{item.releaseYear}</Text>
                                </View>
                            </View>
                        )
                    }
                }
            />

        </View>
    )
}

export default MyNetworking