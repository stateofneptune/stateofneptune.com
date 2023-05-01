class Shared::Header < BaseComponent
  def render
    header class: "top-0 w-full bg-deep-bg transition-all p-2 md:p-4 md:flex md:flex-col md:gap-4 md:justify-between" do
      div class: "relative flex justify-center items-center" do
        render_menu_open_button
        render_logo
      end

      render_navigation_bar
    end
  end

  def render_menu_open_button
    div class: "absolute left-0 md:hidden" do
      button id: "menu-open-button", class: "w-8 h-8 text-body transition" do
        inline_svg "menu-3-burger-icon.svg", false
      end
    end
  end

  def render_logo
    a href: "/" do
      figure do
        img src: asset("images/logo/state-of-neptune-wht-inline.png"),
          class: "transition-all h-10 md:h-12 lg:h-14"
      end
    end
  end

  private NAV_PAGE_REFS = [
    {Home::Index, "Home"},
    {Music::Index, "Music"},
    {Videos::Index, "Videos"},
    {Stages::Index, "Stages"},
  ]

  def render_navigation_bar
    nav class: "hidden flex justify-center md:block font-subtitle" do
      ul class: "flex justify-center transition-all gap-12 lg:gap-14" do
        render_navigation_bar_elements
      end
    end
  end

  def render_navigation_bar_elements
    NAV_PAGE_REFS.each do |page, page_title|
      link page_title, to: page,
        class: "transition-all data-[selected=true]:text-accent hover:text-accent",
        data_selected: current_page? page
    end
  end
end
