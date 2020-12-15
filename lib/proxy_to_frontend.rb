# frozen_string_literal: true

require 'rack/proxy'

class ProxyToFrontend < Rack::Proxy
  def initialize(app)
    @app = app
  end

  def call(env)
    env['HTTP_HOST'] = "localhost:#{ENV['FRONTEND_PORT']}"
    unless env['PATH_INFO'] =~ /(bundle\.js$)|(^\/css)|(hot-update\.json$)/
      env['PATH_INFO'] = '/'
    end

    perform_request(env)
  end
end
