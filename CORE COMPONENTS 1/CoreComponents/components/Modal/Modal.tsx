
import { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'

export default function ModalExample() {
    // States
    const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
        <View style = {{position: "relative", top: "50%", height: 800}}>

            <Button
                title='Press'
                onPress={() => {setModalVisible(true)}}
                color={"red"}
            /> 


        </View>

        <Modal
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
            style={{backgroundColor: "cyan"}}
            animationType='fade'
            presentationStyle='overFullScreen'
        >
            <View style={{ flex: 1, position: "relative", top : "30%"}}>
                <Text 
                    style={{height: 300, textAlign: "center"}}
                >
                    The Modal is Visible
                </Text>

                <Button
                    title='Close'
                    onPress={() => setModalVisible(false)}
                />
            </View>
        </Modal>


    </>
  )
}
