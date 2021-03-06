class Api::V1::ProductsController < ApplicationController
  skip_before_action :authorized, only: [:show, :index, :update, :destroy]

  def index
    products = Product.all
    render json: products, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock], include: { reviews: { only: [:user_id, :product_id, :rating, :review] } }
  end

  def show
    product = Product.find(params[:id])
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock], include: { reviews: { only: [:user_id, :product_id, :rating, :review] } }
  end

  def create
    product = Product.create(name: params[:name], category: params[:cateogry], price: params[:price], description: params[:description], num_in_stock: params[:num_in_stock], image_url: params[:image_url], brand: params[:brand])
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end

  def update
    product = Product.find(params[:id])
    product.update(num_in_stock: params[:num_in_stock])
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end
end
