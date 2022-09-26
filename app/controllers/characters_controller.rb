class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end
    
    def show
        character = Character.find_by(id: params[:id])
        if character
            render json: character
        else
            render json: { error: "Character not found" }, status: :not_found
        end

    end

    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def update
        character = Character.find_by(id: params[:id])
        if character
            character.update(character_params)
            render json: character
        else
            render json: { error: "Character not found" }, status: :not_found
        end
    end

    def destroy
        character = Character.find_by(id: params[:id])
        if character
            character.destroy
            head :no_content
        else
            render json: { error: "Character not found" }, status: :not_found
        end
    end

    private

    def character_params
        params.permit(:id, :name, :photo, :attack, :defense, :magic, :speed, :health)
    end
end
