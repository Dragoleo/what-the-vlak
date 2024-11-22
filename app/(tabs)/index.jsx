import { StyleSheet, TouchableOpacity as Ghost, Image } from 'react-native';
import { ThemedText as Yap } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { useState } from 'react';
import { questions as quizData } from '@/components/Questions';


export default function Index(optionHighlight) {

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
      alert(`Nesprávná odpověď.\nSprávná odpověď: ${answer}`);
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
          <Yap styles={style.white}> Skóre: {score} </Yap>
          <Ghost style={styles.optionContainer} onPress={handRestart} >
            <Yap style={styles.optionStyle}>Restartovat</Yap>
          </Ghost>
        </View> :
        <View style={styles.questionContainer}>
          { quizData[currentQuestion]?.image != "" ? <Image source={quizData[currentQuestion]?.image} style={styles.questionImage} /> : null }
          <Yap style={styles.header}> { quizData[currentQuestion]?.question } </Yap>
          { quizData[currentQuestion]?.options.map((prop) => {
            return <Ghost style={[styles.optionContainer]} className={optionHighlight} onPress={ () => handleAnswer(prop) }>
              <Yap style={styles.optionStyle}> {prop} </Yap>
            </Ghost>
          })}
        </View> 
        }
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "white"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 69,
    backgroundColor: "#222"
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 30,
    color: "white",
  },
  questionContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "initial",
  },
  optionStyle: {
    color: "#E9E9E9",
    padding: 5,
    alignSelf: "center",
    fontSize: 16,
  },
  optionContainer: {
    borderColor: "#DBDBDB",
    borderWidth: 4,
    borderRadius: 5,
    marginTop: 15,
  },
  questionImage: {
    width: "100%",
    height: null,
    aspectRatio: 1.1,
    resizeMode: "contain",
  },
  correct: {
    backgroundColor: "green !important",
    color: "white",
  },
  incorrect: {
    backgroundColor: "red",
    color: "white",
  }

});
