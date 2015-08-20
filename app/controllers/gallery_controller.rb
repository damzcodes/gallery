class GalleryController < ApplicationController

	def index
		render 'gallery/index.html.slim'
		#tell the controller which view to render
		# respond_to do |format|
		# 	format.html
		# 	#eventually there will have to be a json file that is passed to the view
		# 	#format.json {@object = Object.order('in spesific order')}
		# end
	end
end
