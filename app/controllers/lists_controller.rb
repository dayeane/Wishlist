class ListsController < ApplicationController

  def index
    list = List.all
    render json: lists, status: :ok
  end

  def show
    list = List.find(params[:id])
    render json: list, status: :ok
    # render json: list, serializer: ListSerializer
  end

  def create
    list = List.create!(list_params)
    render json: list, status: :created
  end

  def destroy
    list = List.find(params[:id])
    render json: list, status: :destroyed
  end

  private 

  def list_params
    params.permit(:name, :user)
  end
end
