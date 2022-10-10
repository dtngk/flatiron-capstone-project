class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # added rescue_from
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        comments = Comment.all
        render json: comments
    end
    
    def show
        comment = Comment.find_by(id: params[:id])
        #if comment
        #    render json: comment
        #else
        #    render json: { error: "Comment not found" }, status: :not_found
        #end
        render json: comment
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = Comment.find_by(id: params[:id])
        #if comment
            comment.update(comment_params)
            render json: comment
        #else
        #    render json: { error: "Comment not found" }, status: :not_found
        #end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
       # if comment
            comment.destroy
            head :no_content
       # else
       #     render json: { error: "Comment not found" }, status: :not_found
       # end
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :character_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Comment not found" }, status: :not_found
    end
end
