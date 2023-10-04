import { View, Text, Image, ScrollView } from "react-native"

const imagem = {
    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    width: 200,
    height: 200
}

const MyScrollView = () => {
    return (
        <ScrollView>

            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: 390,
                    paddingTop: 25,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>gatinho</Text>
                <Image source={imagem} />
                <Image source={imagem} />
                <Image source={imagem} />
                <Image source={imagem} />
                <Image source={imagem} />
            </View>
        </ScrollView>
    )
}

export default MyScrollView
