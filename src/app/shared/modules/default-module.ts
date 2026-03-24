// --- Form ---
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker';

// --- Button ---
import { ButtonModule } from 'primeng/button';

// --- Panel ---
import { CardModule } from 'primeng/card';

// --- Angular Common ---
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 

// --- Translate ---
import { TranslateModule } from '@ngx-translate/core';

export const DefaultModules = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    CardModule,
    ButtonModule,
    DatePickerModule,
    MultiSelectModule,
    SelectModule,
    RadioButtonModule,
    CheckboxModule,
    TextareaModule,
    InputNumberModule,
    InputTextModule,
    TranslateModule,
    AsyncPipe,
    NgIf
]