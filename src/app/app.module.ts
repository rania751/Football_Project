import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchestableComponent } from './components/matchestable/matchestable.component';
import { TeamstableComponent } from './components/teamstable/teamstable.component';
import { PlayerstableComponent } from './components/playerstable/playerstable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { MatchinforComponent } from './components/matchinfor/matchinfor.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { FormplayerComponent } from './components/formplayer/formplayer.component';
import { HttpClientModule } from "@angular/common/http";
import { TeaminfoComponent } from './components/teaminfo/teaminfo.component';
import { TeamComponent } from './components/team/team.component';
import { FormteamComponent } from './components/formteam/formteam.component';
import { FormmatchComponent } from './components/formmatch/formmatch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    MatchestableComponent,
    TeamstableComponent,
    PlayerstableComponent,
    PlayersComponent,
    MatchesComponent,
    PlayerComponent,
    BannerComponent,
    AsterixPipe,
    MatchinforComponent,
    PlayerinfoComponent,
    FormplayerComponent,
    TeaminfoComponent,
    TeamComponent,
    FormteamComponent,
    FormmatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // FormsModule :yattini les mots technique
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
