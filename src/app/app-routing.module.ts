import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { ScoringComponent } from './scoring/scoring.component';
import { WinnerDeclarationComponent } from './winner-declaration/winner-declaration.component';

const routes: Routes = [
  {path :'', redirectTo:'login', pathMatch:'full'},
  {path :'login', component:LoginComponent},
  {path :'register', component:RegisterComponent},
  {path :'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path :'forgotPassword', component:ForgotPasswordComponent},
  {path :'varifyEmail', component:VarifyEmailComponent, },
  { path: 'auth', redirectTo: '/authentication', pathMatch: 'full' },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'group-management', component: GroupManagementComponent },
  { path: 'player-selection', component: PlayerSelectionComponent },
  { path: 'match-display', component: MatchDisplayComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'winner-declaration', component: WinnerDeclarationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
