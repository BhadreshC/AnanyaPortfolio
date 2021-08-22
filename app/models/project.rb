class Project < ApplicationRecord
  # has_many_attached :images
  has_many :project_images
end
#XL p.images.attach(io: File.open("#{Rails.root}/app/assets/images/2-ml/ml.jpg"), filename: "bookstore_xl.jpg")
#L p.images.attach(io: File.open("#{Rails.root}/app/assets/images/2-ml/ml_lap.jpg"), filename: "bookstore_l.jpg")
#M p.images.attach(io: File.open("#{Rails.root}/app/assets/images/2-ml/ml_hand.jpg"), filename: "bookstore_m.jpg")
#S p.images.attach(io: File.open("#{Rails.root}/app/assets/images/2-ml/ml_palm.jpg"), filename: "bookstore_s.jpg")