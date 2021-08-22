class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :company_name
      t.string :color

      t.timestamps
    end
  end
end
