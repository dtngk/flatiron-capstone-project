class RankingsController < ApplicationController
    def index
        render json: Ranking.all
    end
    
    def show
        rank = Ranking.find_by(id: params[:id])
        if rank
            render json: rank
        else
            render json: { error: "Ranking not found" }, status: :not_found
        end
    end

    def create
        rank = Ranking.create!(rank_params)
        render json: rank, status: :created
    end

    def update
        rank = Ranking.find_by(id: params[:id])
        if rank
            rank.update(rank_params)
            render json: rank
        else
            render json: { error: "Ranking not found" }, status: :not_found
        end
    end

    private

    def rank_params
        params.permit(:id, :user_id, rank:[:id, :name]) 
    end
    
end
