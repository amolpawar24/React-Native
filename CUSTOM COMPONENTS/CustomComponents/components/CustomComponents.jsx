import { Text, View } from 'react-native'

export default function CustomComponents(props) {

    // props destructuring
    const { name } = props;

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center', marginTop: 20 }}>
                    My Name is  {name}
                </Text>
            </View>

        </>
    )
}

