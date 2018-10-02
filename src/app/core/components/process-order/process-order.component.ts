import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Subscription, pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private errorMessages = {
    firstName: {
      required: 'Please enter your First Name'
    },
    lastName: {
      required: 'Please enter your Last Name'
    },
    email: {
      required: 'Please enter your email address!',
      pattern: 'Please enter a valid email address!'
    },
    phone: {
      required: 'Please enter your phone!',
      pattern: 'Please enter a valid phone!',
    }
  };
  createOrderForm: FormGroup;
  delivery: boolean;
  errorMesage = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildFrom();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get phones(): FormArray {
    return <FormArray>this.createOrderForm.get('phones');
  }

  buildFrom() {
    this.createOrderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['',
        [Validators.required, Validators.pattern('[0-9]{10}')]
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      needDelivery: 'no',
      city: '',
      street: '',
      phones: this.fb.array([])
    });
  }

  deliveryOrder(answer: string) {
    if (answer === 'yes') {
      this.delivery = true;
    } else {
      this.delivery = false;
    }
  }

  watchValueChanges() {
    this.sub = this.createOrderForm.get('needDelivery').valueChanges
      .subscribe(value => this.deliveryOrder(value));
    const emailControl = this.createOrderForm.get('email');
    const phoneControl = this.createOrderForm.get('phone');
    const subEmail = emailControl.valueChanges
        .pipe(
          debounceTime(1500)
        )
        .subscribe(value => this.setErrorMessage(emailControl, 'email'));
    const subPhone = phoneControl.valueChanges
        .pipe(
          debounceTime(1500)
        )
        .subscribe(value => this.setErrorMessage(phoneControl, 'phone'));
    this.sub.add(subEmail);
    this.sub.add(subPhone);

  }

  private setErrorMessage(control: AbstractControl, controlName: string) {
    this.errorMesage[controlName] = '';

    if ((control.touched || control.dirty) && control.errors) {
      this.errorMesage[controlName] = Object.keys(control.errors)
        .map(key => this.errorMessages[controlName][key]);
    }
  }

  onBlur(controlName) {
    const control = this.createOrderForm.get(controlName);
    this.setErrorMessage(control, controlName);
  }

  onAddPhone() {
    this.phones.push(this.buildPhones());
  }

  onDeleteNumber(index: number) {
    this.phones.removeAt(index);
  }

  confirmOrder() {
    alert('order was confirmed');
  }

  private buildPhones() {
    return this.fb.group({
      phone: ''
    });
  }
}
