class CreateProjectImages < ActiveRecord::Migration[6.1]
  def change
    create_table :project_images do |t|
      t.integer :img_type
      # t.timestamps
    end
  end
end
