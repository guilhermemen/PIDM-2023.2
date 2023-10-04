import { View, Text, Pressable } from "react-native"

const MyPressable = ({ funcao, titulo }) => {
    return (
        <View>
            <Pressable
                onPress={funcao}

                style={
                    ({ Pressed }) => [
                        {
                            backgroundColor: Pressed ? 'gray' : '#2196f3',
                            margin: 5,
                            padding: 5,
                        }
                    ]
                }>
                <Text style={{ color: "white", fontWeight: "bold" }}> {titulo} </Text>
            </Pressable>
        </View>
    )
}

export default MyPressable