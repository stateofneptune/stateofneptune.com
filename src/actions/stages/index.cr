class Stages::Index < BrowserAction
  get "/stages" do
    html Stages::IndexPage
  end
end
