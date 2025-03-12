import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { Post } from '../../models/mock';
import { UpperPipe } from '../pipes/upper.pipe';
import { DirectDirective } from '../../directives/direct.directive';
import { KeypressDirective } from '../../directives/keypress.directive';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    UpperPipe,
    KeypressDirective,
    DirectDirective,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mock: Post[] = [];
  userForm!: FormGroup;
  constructor(
    private service: HttpService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    // console.log((this.mock = route.snapshot.data['user']));
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      names: new FormArray([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
      ]),
    });
    this.getPosts();
  }
  getPosts() {
    this.service.getPosts().subscribe({
      next: (l) => {
        this.mock = l.slice(0, 2);
        // console.log(l[0].id);
      },
    });
  }

  get names() {
    return this.userForm.get('names') as FormArray;
  }

  checkForm() {
    console.log(this.userForm);
    (this.userForm.get('names') as FormArray).push(
      this.fb.control('', [Validators.required, Validators.maxLength(20)])
    );
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '20rem',
      height: '15rem',
      data: {
        show: 'something',
      },
    });
  }
}
