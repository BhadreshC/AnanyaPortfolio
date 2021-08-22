class ProjectController < ApplicationController
  def index
    @projects = Project.all
    @project_images = Project.includes(:project_images)
  end
  def create
  end
end
