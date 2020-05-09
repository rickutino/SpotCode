Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
  origins '*' #<= Colocar o endereco url da pagina
              # Para que so a pagina autorizada possa acessar os campos a baixo.
​
  resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end