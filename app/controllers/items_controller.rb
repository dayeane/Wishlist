class ItemsController < ApplicationController
  def index
    items = Items.all
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

  def destroy
    item = Item.find(params[:id])
    render json: item, status: :destroyed
  end
  private 

  def item_params
    params.permit(:name, :description, :image_url)
  end
end
