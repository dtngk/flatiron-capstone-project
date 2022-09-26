class UsersController < ApplicationController
    #skip_before_action :authorize
    
    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
