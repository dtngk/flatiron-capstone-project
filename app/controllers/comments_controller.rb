class CommentsController < ApplicationController
    
    def index
        comments = Comment.all
        render json: comments
    end
    
    def show
        comment = Comment.find_by(id: params[:id])
        if comment
            render json: comment
        else
            render json: { error: "Comment not found" }, status: :not_found
        end

    end

    def create
        comment = comments.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.update(comment_params)
            render json: comment
        else
            render json: { error: "Comment not found" }, status: :not_found
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else
            render json: { error: "Comment not found" }, status: :not_found
        end
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :character_id)
    end
end
