import { StyleSheet, TouchableOpacity as Ghost } from 'react-native';
import { ThemedText as Yap } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import React, { useState } from 'react';


export default function Index() {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  const quizData = [
    {
      question: 'Co dělá Vlaky David nejčastěji?',
      options: ["Fotí vlaky", "Šotí vlaky", "Kouká na vlaky", "Hraje MSTS"],
      answer: "Šotí vlaky",
    },
    {
      question: "Jak se říká lokomotivě 362",
      options: ["Eso", "Peršing", "Krysa", "Nevim"],
      answer: "Eso",
    },
  ]

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (checkedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === checkedAnswer) {
      alert ("Správná odpověď!")
      setScore((preScore) => preScore + 1);
    } else {
      alert("Jsi debil");
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
          <Yap> Skóre: {score} </Yap>
          <Ghost style={styles.optionContainer} onPress={handRestart}> 
            <Yap style={styles.optionStyle}>Restartovat</Yap>
          </Ghost>
        </View> :
        <View style={styles.questionContainer}>
          <Yap style={styles.header}> { quizData[currentQuestion]?.question } </Yap>
          { quizData[currentQuestion]?.options.map((prop) => {
            return <Ghost style={styles.optionContainer} onPress={ () => handleAnswer(prop) }>
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
  },
  questionContainer: {
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
  }

});
