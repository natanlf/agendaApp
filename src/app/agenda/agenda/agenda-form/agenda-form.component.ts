import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.css']
})
export class AgendaFormComponent implements OnInit {

  agendaForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initAgendaForm();
  }

  private initAgendaForm() {
    this.agendaForm = new FormGroup({
      
    });
  }

}
