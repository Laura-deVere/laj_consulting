require 'sinatra'
require 'mandrill' 

get '/' do 
	@title = "LAJ Consulting - Home"
	erb :home
end

get '/ourteam' do 
	@title = "LAJ Consulting - Our Team"
	erb :about
end

get '/contact' do 
	@title = "LAJ Consulting - Contact"
	erb :contact
end

get '/portfolio' do 
	@title = "LAJ Consulting - Portfolio"
	erb :portfolio
end

get '/blog' do 
	@title = "LAJ Consulting - Blog"
	erb :about
end