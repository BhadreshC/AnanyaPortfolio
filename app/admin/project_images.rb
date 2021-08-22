ActiveAdmin.register ProjectImage do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :img_type, :project_id, :image
  form do |f|
    f.inputs do
      f.input :project, as: :select
      f.input :img_type, as: :select
      f.input :image, as: :file, input_html: { multiple: false }
    end
     f.actions
  end
  # form partial: 'form'
  #
  # or
  #

  # permit_params do
  #   permitted = [:img_type, :project_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
