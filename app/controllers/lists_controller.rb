class ListsController < ApplicationController

  def index
    user.find(1).lists
    list = List.all
    render json: list, status: :ok
  end

  def show
    list = List.find(params[:id])
    render json: list, serializer: ListItemSerializer, status: :ok
  end

  def create
    list = List.create!(list_params)
    render json: list, status: :created
  end

  def update
    list = List.find(params[:id])
    list.update!(list_params)
    render json: list, status: :accepted
  end

  def destroy
    list = List.find(params[:id])
    render json: list.destroy, status: :ok
  end

  def add_item
    list = List.find(params[:list_id])
    list.items << item
    render json: list.reload, serializer: ListItemSerializer, status: :ok
  end

  def remove_item
    list = List.find(params[:list_id])
    list.items.delete(item)

    render json: list.reload, serializer: ListItemSerializer, status: :ok
  end

  private 

  def list_params
    params.permit(:name, :user)
  end

  def item
    item ||= Item.find(params[:item_id])
  end
end
