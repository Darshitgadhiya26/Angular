import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './core/auth.guard';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { ScoringComponent } from './scoring/scoring.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WinnerDeclarationComponent } from './winner-declaration/winner-declaration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    AuthenticationComponent,
    GroupManagementComponent,
    PlayerSelectionComponent,
    MatchDisplayComponent,
    ScoringComponent,
    LeaderboardComponent,
    WinnerDeclarationComponent,
    MatchCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [AuthGuard,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AngularFirestore


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
