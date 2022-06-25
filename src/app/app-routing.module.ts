import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NewsComponent } from './components/news/news.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchinforComponent } from './components/matchinfor/matchinfor.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { FormplayerComponent } from './components/formplayer/formplayer.component';
import { TeaminfoComponent } from './components/teaminfo/teaminfo.component';
import { TeamComponent } from './components/team/team.component';
import { FormteamComponent } from './components/formteam/formteam.component';
import { FormmatchComponent } from './components/formmatch/formmatch.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'players',component:PlayersComponent},
  {path:'matches',component:MatchesComponent},
  // nzidou : pour le rendre un path dynamique
  {path:'matcheInfor/:id',component:MatchinforComponent},
  {path:'playerInfo/:id',component:PlayerinfoComponent},
  {path:'teamInfo/:id',component:TeaminfoComponent},
  {path:'team',component:TeamComponent},
  {path:'addplayer',component:FormplayerComponent},  
  {path:'editplayer/:id',component:FormplayerComponent},
  {path:'addteam',component:FormteamComponent},
  {path:'editteam/:id',component:FormteamComponent},
  {path:'addmatch',component:FormmatchComponent},
  {path:'editmatch/:id',component:FormmatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
