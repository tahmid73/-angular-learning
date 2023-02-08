import { Component, Input, OnInit, Output } from '@angular/core';
import {EmployeeList} from '../employee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  ngOnInit (): void {
  }
  @Input() employeeList:EmployeeList[]|null=[]
  
}
