class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items, status: :ok
    # render json: items.all se puede de esta manera
  end

  def show
    item = Item.find(params[:id]) 
    render json: item, status: :ok
  end

  def create
    item = Item.create!(item_params)
    render json: item, status: :created
  end

  def update
    item = Item.find(params[:id])
    item.update!(item_params)
    render json: item, status: :accepted
  end

  def destroy
    item = Item.find(params[:id])
    render json: item.destroy, status: :ok
  end
  private 

  def item_params
    params.permit(:name, :description, :image_url)
  end
end
