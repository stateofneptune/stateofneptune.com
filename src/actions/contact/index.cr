class Contact::Index < BrowserAction
  get "/contact" do
    html Contact::IndexPage
  end
end
