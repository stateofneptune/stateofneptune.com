class Shared::NavElement < BaseComponent
  needs page : BrowserAction.class
  needs class_name : String
  needs label : String

  def render
    link label, to: page, class: class_name, data_selected: current_page? page
  end
end
