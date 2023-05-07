class Shared::Header::NavElement < BaseComponent
  needs page : BrowserAction.class
  needs label : String

  def render
    link label, to: page,
      class: "transition-all data-[selected=true]:text-accent hover:text-accent",
      data_selected: current_page? page
  end
end
