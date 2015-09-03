require 'sinatra'
require 'mandrill' 

get '/' do 
	@title = "LAJ Consulting - Home"
	erb :home
end