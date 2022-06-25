import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamURL='http://localhost:3000/teams'
  constructor(private httlclient:HttpClient) {}

    getAllTeams()
    {
      return (this.httlclient.get(this.teamURL))
    }

    getTeamById(id:any)
    {
      return(this.httlclient.get(this.teamURL+'/'+id))
    }

    addTeam(obj:any)
    {
      return(this.httlclient.post(this.teamURL,obj))
    }

    deleteTeamById(id:any)
    {
      return (this.httlclient.delete(this.teamURL+'/'+id))
    }

    updateTeam(obj:any)
    {
      return(this.httlclient.put(this.teamURL+'/'+obj.id,obj))
    }





}
