import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState  } from 'react'
import styles from './MainScreenStyles';

const MainScreen = () => {
  const [value,setValue] = useState('0');
  const [bracketopen,setbracketopen] = useState(false);
  const ScrollViewRef = useRef();

  const handlePress = (val) => {
    if (val == 'AC')
    {
      setValue(0)
    }

    else if (val == '='){
      try {
        if ((value.match(/\(/g) || []).length ==  (value.match(/\)/g) || []).length)
        {
          if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.')
          {
            setValue(`${eval(value.replace('()','(0)').slice(0,-1))}`)
          }

          else {
            setValue(`${eval(value.replace('()','(0)')+ '*1')}`)
          }

        }
      }

      catch(e){
        setValue('Format Error')
      }
    }

    else if (val == 'back'){
      setValue(value.slice(0,-1));
    }

    else if (val == '()'){
      if (value == '0'){
        setValue('(')
        setbracketopen(true)
      }

      else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' )
      {
        setValue(value+ '(')
        setbracketopen(true)
      }

      else {
        if (bracketopen == true){
          setValue(value + ')')
          setbracketopen(false)
        }

        else {
          setValue(value + '(')
          setbracketopen(true)
        }
      }
    }

    else {

      if (value == '0'){
        if (val == '+' || val == '-' || val == '*' || val == '/' || val == '.' || val == '%'){
          setValue(value + val)
        }
        else
        {
          setValue(val);
        }
      }

      else if (isNaN(val)){
        if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.')
        {
          setValue(value.slice(0, -1) + val)
        }

      else {
        setValue(value + val)
      }
    }

    else if (!isNaN(val))
    {
      setValue(value + val)
    }
  }
}


  return (
    <View style={styles.main_screen}>
      <ScrollView style={styles.main_screen_display} ref = {ScrollViewRef}
      onContentSizeChange={() => ScrollViewRef.current.scrollToEnd({animated: true})} >
        <Text style={styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
      </ScrollView>

      <View style={styles.main_screen_keypad}>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('()')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>( )</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('%')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>/</Text>
            </View>
          </Pressable>
        </View>
     
     
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress('7')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('8')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('9')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('*')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>*</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress('4')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('5')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('6')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress('1')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('2')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('3')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress('0')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('.')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('back')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>&lt;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('=')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>


    </View>
  )
}

export default MainScreen
