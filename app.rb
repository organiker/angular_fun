require 'sinatra'

set :public_dir, 'public'

get '/' do
  "hello world"
end
