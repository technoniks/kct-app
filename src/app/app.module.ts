import { UploadService } from './service/upload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './service/data.service';
import { MatIconModule} from '@angular/material/icon';
import { GalleryComponent } from './gallery/gallery.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'angular-bootstrap-md'
import {MatDialogModule} from '@angular/material/dialog';
import { GymkhanaComponent } from './gymkhana/gymkhana.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HeaderComponent,
    DataEntryComponent,
    GalleryComponent,
    GraphComponent,
    GymkhanaComponent,
    DeveloperComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatIconModule,
    ChartsModule,
    MatDialogModule
  ],
  providers: [DataService,UploadService],
  bootstrap: [AppComponent],
})
export class AppModule { }
