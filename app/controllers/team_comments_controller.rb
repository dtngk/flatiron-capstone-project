class TeamCommentsController < ApplicationController
    def index
        render json: TeamComment.all
    end
    
    def show
        team = TeamComment.find_by(id: params[:id])
        if team
            render json: team
        else
            render json: { error: "Team not found" }, status: :not_found
        end

    end

    def create
        team = TeamComment.create!(teamComment_params)
        render json: team, status: :created
    end

    def update
        team = TeamComment.find_by(id: params[:id])
        if team
            team.update(teamComment_params)
            render json: team
        else
            render json: { error: "Team not found" }, status: :not_found
        end
    end

    def destroy
        team = TeamComment.find_by(id: params[:id])
        if team
            team.destroy
            head :no_content
        else
            render json: { error: "Team not found" }, status: :not_found
        end
    end

    private

    def teamComment_params
        params.permit(:id, :comment, :user_id, :team_id)
    end
end
