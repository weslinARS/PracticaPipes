import { Component } from '@angular/core';
import {DataService} from '../../services/data.service'
import {IPatient} from '../../../utilities/patientFakeData'
@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent {
  pacientes : IPatient[];
  constructor(private dataService : DataService) {
    this.pacientes = this.dataService.getPacientes();
    console.log(this.pacientes);
  }
}
