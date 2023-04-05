class Music::Index < BrowserAction
  get "/music" do
    html Music::IndexPage
  end
end
