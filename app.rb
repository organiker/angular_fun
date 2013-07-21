require 'sinatra'
require 'yaml'
require 'json'

set :public_dir, 'public'

get '/items.json' do
	file = File.read('db.yml')
	db = YAML::load(file)
	db.to_json
end

post '/items' do
  puts "Received POST to items: #{request.body.read}"
end