import { View, Text, Button } from "react-native"
import myStyle from "./MyStyle"

const student = {name: "Fulano", grade:"A-"}

const Screen01 = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}> screen 1</Text>

            <Button
                title="ir para screen 2"
                onPress={() => navigation.navigate("Screen02", student)}
            />
        </View>


    )
}

export default Screen01