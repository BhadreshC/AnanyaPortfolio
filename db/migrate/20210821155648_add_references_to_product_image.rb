class AddReferencesToProductImage < ActiveRecord::Migration[6.1]
  def change
    add_reference :project_images , :project , index: true
  end
end
