import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ObjNgForPipe} from './obj-ng-for/obj-ng-for.pipe';
import {
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ImportExportModule {
}

@NgModule({
  declarations: [
    ObjNgForPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ObjNgForPipe,
    ImportExportModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImportExportModule
  ]
})
export class SharedModule {
}
