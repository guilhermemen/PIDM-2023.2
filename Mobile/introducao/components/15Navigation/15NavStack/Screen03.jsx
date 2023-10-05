import { View, Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Screen3 = ({navigation}) =>{
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.header}> screen 3</Text>

            <Button
                title="desempilhar tudo"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Screen3