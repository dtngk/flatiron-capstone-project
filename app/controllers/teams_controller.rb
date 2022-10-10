class TeamsController < ApplicationController

    def index
        render json: Team.all
    end
    
    def show
        team = Team.find_by(id: params[:id])
        if team
            render json: team
        else
            render json: { error: "Team not found" }, status: :not_found
        end

    end

    def create
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    def update
        team = Team.find_by(id: params[:id])
        if team
            team.update(team_params)
            render json: team
        else
            render json: { error: "Team not found" }, status: :not_found
        end
    end

    def destroy
        team = Team.find_by(id: params[:id])
        if team
            team.destroy
            head :no_content
        else
            render json: { error: "Team not found" }, status: :not_found
        end
    end

    private

    def team_params
        params.permit(:id, :team_name, :user_id, characters:[:character, :id, :name, :attack, :defense, :magic, :speed, :health]) 
    end
    
end
