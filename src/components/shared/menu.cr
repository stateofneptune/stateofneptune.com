class Shared::Menu < BaseComponent
  def render
    render_menu_backdrop
    render_menu
  end

  def render_menu
    div id: "menu", data_menu_open: false, tabindex: -1,
      class: "fixed inset-0 w-64 h-[100lhv] p-2 bg-deep-bg data-[menu-open=false]:-translate-x-full \
        data-[menu-open=true]:transform-none transition" do
      render_menu_close_button
      render_navigation_bar
    end
  end

  def render_menu_backdrop
    div id: "menu-backdrop", data_menu_open: false,
      class: "fixed inset-0 w-[100lwv] h-[100lhv] bg-deep-bg/0 invisible data-[menu-open=true]:visible \
        data-[menu-open=true]:bg-deep-bg/70 transition-all"
  end

  def render_menu_close_button
    div class: "mb-6" do
      button id: "menu-close-button", data_menu_open: false,
        class: "w-8 h-8 text-body/0 data-[menu-open=true]:text-body/100 data-[menu-open=false]:transition-none delay-500 duration-1000" do
        inline_svg "close.svg", false
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
    nav class: "font-subtitle p-2" do
      ul class: "flex flex-col gap-4" do
        render_navigation_bar_elements
      end
    end
  end

  def render_navigation_bar_elements
    NAV_PAGE_REFS.each do |page, page_title|
      link page_title, to: page, class: "transition-all hover:text-accent"
    end
  end
end
