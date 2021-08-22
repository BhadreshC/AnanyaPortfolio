class ProjectImage < ApplicationRecord
  enum img_type: [:XL, :L, :M, :S]
  has_one_attached :image
  belongs_to :project
end
# rails generate active_admin:resource ProjectImage

