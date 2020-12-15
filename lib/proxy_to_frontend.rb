# frozen_string_literal: true

require 'rack/proxy'

class ProxyToFrontend < Rack::Proxy
  def initialize(app)
    super
    @app = app
  end

  def call(env)
    if env['PATH_INFO'] =~ %r{^/api/}
      @app.call(env)
    else
      env['HTTP_HOST'] = "localhost:#{ENV['FRONTEND_PORT']}"
      env['PATH_INFO'] = '/' unless env['PATH_INFO'] =~ %r{(bundle\.js$)|(^/css)|(hot-update\.json$)}

      perform_request(env)
    end
  end
end
