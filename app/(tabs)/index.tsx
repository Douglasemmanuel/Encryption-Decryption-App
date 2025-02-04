import { StyleSheet , TextInput , Button  , KeyboardAvoidingView , TouchableWithoutFeedback  , Platform , Keyboard , SafeAreaView, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { encrypt, decrypt } from './encryption';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


// const text = "ABC";
// const key = 1;

// // Encrypt the text
// const encryptedText = encrypt(text, key);
// console.log("Encrypted:", encryptedText);  // "Khoor, Zruog!"

// // Decrypt the text
// const decryptedText = decrypt(encryptedText, key);
// console.log("Decrypted:", decryptedText); 
export default function TabOneScreen() {
  return (
   
    <App/>
   
    
  );
}
const App = () => {
  const colorScheme = useColorScheme();
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
// Handle the encryption
const handleEncrypt = () => {
  const keyNumber = parseInt(key);
  if (!isNaN(keyNumber)) {
      const result = encrypt(text, keyNumber);
      setEncryptedText(result);
      setDecryptedText('');
  } else {
      alert('Please enter a valid number for the key');
  }
};

// Handle the decryption
const handleDecrypt = () => {
  const keyNumber = parseInt(key);
  if (!isNaN(keyNumber)) {
      const result = decrypt(encryptedText, keyNumber);
      setDecryptedText(result);
  } else {
      alert('Please enter a valid number for the key');
  }
};
  

  return (

    <SafeAreaView >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
    <Text style={styles.header}>Encryption & Decryption App</Text>
    <Text style={styles.resultTitle}>Text</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter text here"
      value={text}
      onChangeText={setText}
    />
    <Text style={styles.resultTitle}>Key</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter key (numeric)"
      value={key}
      onChangeText={setKey}
      // value={key.toString()}
      // onChangeText={handleKeyChange}
      keyboardType="numeric"
    />
      <TouchableOpacity style={styles.button} onPress={handleEncrypt}>
            <Text style={styles.buttonText}>Encrypt</Text>
        </TouchableOpacity>
    {/* <Button title="Encrypt" onPress={handleEncrypt} /> */}
   <View style={{flexDirection:'row'}}>
    <View style={{flex:1}}>
   <Text style={styles.resultTitle}>Encrypted Text:</Text>
    </View>
    <View style={{flex:1, marginTop:20}}>
    <Text style={styles.result}>{encryptedText}</Text>
    </View>
   </View>
   <TouchableOpacity style={styles.button} onPress={handleDecrypt}>
            <Text style={styles.buttonText}>Decrypt</Text>
        </TouchableOpacity>
    {/* <Button title="Decrypt" onPress={handleDecrypt} /> */}
    <View style={{flexDirection:'row'}}>
    <View style={{flex:1}}>
    <Text style={styles.resultTitle}>Decrypted Text:</Text>
      </View>
      <View style={{flex:1 , marginTop:20}}>
      <Text style={styles.result}>{decryptedText}</Text>
      </View>
      </View>
   
   
    </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems:'center',
    marginTop:20,
    marginBottom:10,
    paddingTop:40,
    paddingBottom:40,
    paddingLeft:20,
    paddingRight:20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    marginTop:10,
    
  },
  outputText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  resultTitle: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
},
result: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: 'black',
    marginBottom: 20,
},

button: {
  backgroundColor: '#6200ea',  // Nice purple color
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 30, // Rounded corners
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5, // Add shadow for Android
  shadowColor: '#000', // iOS shadow
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  margin: 10,
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
}


 
});
