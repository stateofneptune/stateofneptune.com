class Contact::Index < BrowserAction
  get "/contact" do
    plain_text "Render something in Contact::Index"
  end
end
