/* Example variables */
var task = {
    numeroDomanda: 3,
    question: 'diametro della Terra?',
    type: 1,
    answers: ['9.742 km',
        '19.742 km',
        '12.742 km'],
    correctAnswer: '3',
    studentAnswer: '1'
};

/*export*/ var tasks = [task];

var peerReview = {
    id: 0,
    examid: 1,
    task: task,
    studentanswer: 3,
    mark: 30,
    description: 'The task is perfect as it is',
    deadline: 900
}

/*export*/ var peerReviews = [peerReview];

var exam = {
  id: 1,
  example: null,
  description: 'esame di valutazione conoscenze generali',
  deadline: 3600,
  numerotasks: 2,
  teacher: {
    id: 32,
    firstname: 'Marco',
    lastname: 'Giunta',
    email: 'marco.giunta@example.com',
    type: 'Teacher',
    identification_number: 908765
  },
  tasks: [task,
    {
      id: 456,
      numeroDomanda: 3,
      question: 'diametro della Luna?',
      type: 1,
      answers: [
        '4.742 km',
        '14.742 km',
        '8.742 km'
      ],
      correctAnswer: 3
    }
  ],
  students: [
    {
      id: 5,
      firstname: 'Mario',
      lastname: 'Rossi',
      email: 'mario.rossi@example.com',
      type: 'Student',
      identification_number: 345678
    }
  ]
};

/*export*/ var exams = [exam];

module.exports = {tasks, peerReviews, exams};