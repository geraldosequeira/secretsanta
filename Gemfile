source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.0'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'

gem 'sass-rails', '~> 5.0'
gem 'jquery-rails'

gem 'uglifier', '>= 1.3.0'
gem 'devise'
gem 'redis'
gem 'sidekiq'

gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'

gem 'materialize-sass'
gem 'material_icons'

gem 'bootsnap', '>= 1.1.0', require: false

gem 'inky-rb', require: 'inky'
gem 'premailer-rails'

group :development, :test do
  gem 'rspec-rails', '~> 3.5' 
  gem "pry-meta"
  gem "awesome_print"
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem "factory_bot_rails"
  gem "ffaker"
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
