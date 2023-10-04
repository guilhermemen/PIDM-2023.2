import { View, Image } from "react-native"

const ChildA = () => {
    return (
        <View style={{backgroundColor:"red", alignItems: "center"}}>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{ width:150, height:150}}
            />
        </View>
    )
}

export default ChildA