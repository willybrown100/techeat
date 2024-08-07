import React from 'react'

export default function QuestionList({questions,render}) {
  return (
    <ul className="">
      {questions.map(render)}
    </ul>
  );
}
