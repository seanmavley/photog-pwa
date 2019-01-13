import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRadioModule,
  MatBottomSheetModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatGridListModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToHtmlPipe } from '../pipes/md-to-html.pipe';

@NgModule({
  exports: [
    FlexLayoutModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MdToHtmlPipe,
    MatGridListModule
  ],
  declarations: [MdToHtmlPipe],
  providers: [],

})
export class SharedModule { }
