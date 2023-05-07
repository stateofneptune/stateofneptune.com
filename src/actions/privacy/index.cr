class Privacy::Index < BrowserAction
  get "/privacy_policy" do
    html Privacy::IndexPage
  end
end
