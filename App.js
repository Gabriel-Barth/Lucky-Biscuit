import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./img/closed.png'));
  const [frase, setFrase] = useState('');

  let phrases = [
    'Don’t hold onto things that require a tight grip.',
    ' I didn’t come this far to only come this far.',
    'Vulnerability sounds like faith and looks like courage.',
    'Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.',
    'Every good and perfect gift is from above.',
    'Be careful who you trust.Salt and sugar look the same.',
    'The fortune you seek is in another cookie.',
    'A cynic is only a frustrated optimist.',
    'You will be hungry again in one hour.',
    'Don’t forget you are always on our minds.',
    'You love Japanese food.',
    'Ask your mom instead of a cookie.',
    'Flattery will go far tonight.',
    'You will die alone and poorly dressed.'

  ];


  function dealingcrack() {
let aleatoryn = Math.floor(Math.random()*phrases.length)

setFrase('"'+phrases[aleatoryn]+'"')
setImg(require('./img/opened.png'))

  }


function dealingreset(){
  
setFrase('')
setImg(require('./img/closed.png'))

}

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dealingcrack()}>
        <View style={styles.btnarea}>
          <Text style={styles.textbutton}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity >
      <TouchableOpacity style={[styles.button, {marginTop: 10}]} onPress={() => dealingreset()}>
        <View style={styles.btnarea}>
          <Text style={styles.textbutton}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 239,
    height: 230,
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 7.5,
  },
  btnarea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbutton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
