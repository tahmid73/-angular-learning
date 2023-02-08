import { Injectable } from '@angular/core';
import { EmployeeList } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList:EmployeeList[]=[]
  constructor() { }
}
