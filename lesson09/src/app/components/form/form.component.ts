import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import { NameGenerationService } from "../../services/name-generation.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  private user: User;
  private questions: Question[];
  private genders: string[];

  @Output()
  formWasSent: EventEmitter<string> = new EventEmitter();

  constructor(private nameGeneration: NameGenerationService) {
    this.nameGeneration = new NameGenerationService();
  }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      secret: '',
      questionAnswer: '',
      gender: ''
    };

    this.questions = [
      {
        key: 'pet',
        question: 'What is your pet\'s name?'
      },{
        key: 'mother',
        question: 'What is your mother\'s name?'
      },{
        key: 'city',
        question: 'What city are you living in?'
      },{
        key: 'color',
        question: 'What is your favorite color?'
      }
    ];

    this.genders = ['Female', 'Male'];
  }

  getName(): void {
    console.log('test');
    this.user.username = this.nameGeneration.getRandomName();
  }

  onSubmit(form: NgForm): void {
    this.formWasSent.emit(JSON.stringify(form.value));
    form.reset();
  }

}
