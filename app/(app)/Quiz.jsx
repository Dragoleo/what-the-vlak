import { StyleSheet, TouchableOpacity as Ghost, Image } from 'react-native';
import { ThemedText as Yap } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { useState } from 'react';
import { questions as quizData } from '@/components/Questions';
import { styles } from "@/components/Styles";


export default function Quiz(optionHighlight) {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  /* 
  const [buttonChecked, setButtonChecked, isCorrect, isIncorrect] = useState(false);
   const handlePress = () => {
    setButtonChecked(true)
  }
    */
  const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve,ms))
  }

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = async (checkedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === checkedAnswer) {
      await delay(200);
      alert("Správná odpověď.")
      setScore((preScore) => preScore + 1);
    } else {
      await delay(200);
      alert(`Nesprávná odpověď.`);
    } 

    const nextQuestion = currentQuestion + 1;

    nextQuestion < quizData.length ? setCurrentQuestion(nextQuestion) : setShowScore(true)
  }

  const handRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);  
  }

  return (
    <>
      <View style={styles.container}>
        {showScore ? <View style={styles.questionContainer}>
          <Yap style={styles.white}> Skóre: {score} </Yap>
          <Ghost style={styles.optionContainer} onPress={handRestart} >
            <Yap style={styles.optionStyle}>Restartovat</Yap>
          </Ghost>
        </View> :
        <View style={styles.questionContainer}>
          { quizData[currentQuestion]?.image != "" ? <Image source={quizData[currentQuestion]?.image} style={styles.questionImage} /> : null }
          <Yap style={styles.white}>Otázka {currentQuestion + 1}/{quizData.length}</Yap>
          <Yap style={styles.header}> { quizData[currentQuestion]?.question } </Yap>
          { quizData[currentQuestion]?.options.map((prop) => {
            return <Ghost style={[styles.optionContainer]} className={optionHighlight} onPress={ () => handleAnswer(prop) }>
              <Yap style={styles.optionStyle}> {prop} </Yap>
            </Ghost>
          })}<Yap>{"\n"}</Yap>
          <Ghost style={styles.redOptionContainer} onPress={handRestart} >
            <Yap style={[styles.optionStyle, styles.red]}>Restartovat</Yap>
          </Ghost>
        </View> 
        }
      </View>
      </>
  );
}