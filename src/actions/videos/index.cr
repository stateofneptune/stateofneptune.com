class Videos::Index < BrowserAction
  get "/videos" do
    html Videos::IndexPage
  end
end
