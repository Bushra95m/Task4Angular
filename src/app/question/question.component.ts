import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {
  //previousButtonClicked: boolean = false;
  questions: any[] = [
    {
      question: 'Question 1:Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>','<b>'],
      answer:'<b>'
    },
    {
      question: 'Question 2 :Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>','<pre>'],
      answer:'<br>'
    },
    {
   question:'Question 3:How to create a hyperlink in HTML?',
   options:['<a link = “www.thinkandlearn.com”> thinkandlearn.com</a> ','<a >www.thinkandlearn.com <thinkandlearn.com/a> ',
   '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
   '<a url = “www.thinkandlearn.com” thinkandlearn.com /a>'],
   answer:'<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>'
  },
  {
    question:'Question 4:In HTML, how do we insert an image?',
    options:['<img src="jtp.png"/>','<img href="jtp.png"/>','<img link="jtp.png"/>','<img url="jtp.png"/>'],
    answer:'<img src="jtp.png"/>'
  },
  {
    question:'Question 5:Which tag do we use to define the options present in the drop-down selection lists?',
    options:['<list>','<option>','<dropdown>','select'],
    answer:'<option>'
  },
  ];
  currentQuestionIndex: number = 0;
  currentQuestion: any = this.questions[this.currentQuestionIndex];
  selectedOption: any = null;
  answers: any[] = [];

  previousQuestion() {
   
    
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedOption = null;
    }
    
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedOption = this.answers[this.currentQuestionIndex]?.selectedOption || null;
  }
  
  nextQuestion() {
    if (this.selectedOption === 0) {
      
       alert("Please select an option before moving to the next question.");
      
      return;
    }
  
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.answers[this.currentQuestionIndex] = { selectedOption: this.selectedOption };
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedOption = this.answers[this.currentQuestionIndex]?.selectedOption || null;
    }
    
  }

  
  isOptionCorrect(selectedOption: any): boolean {
    return selectedOption === this.currentQuestion.answer;
  }



  submitQuiz() {
    
    
    alert(`Submit Successful. Thank you! `);

}
}
