class Shared::Menu < BaseComponent
  def render
    render_menu_backdrop
    render_menu
  end

  def render_menu
    div id: "menu", data_menu_open: false, tabindex: -1,
      class: "fixed inset-0 z-10 w-64 h-[100lvh] bg-deep-bg data-[menu-open=false]:-translate-x-full \
        data-[menu-open=true]:transform-none transition" do
      render_menu_close_button
      render_navigation_bar
    end
  end

  def render_menu_backdrop
    div id: "menu-backdrop", data_menu_open: false,
      class: "fixed inset-0 z-10 w-[100lvw] h-[100lvh] bg-deep-bg/0 invisible data-[menu-open=true]:visible \
        data-[menu-open=true]:bg-deep-bg/70 transition-all"
  end

  def render_menu_close_button
    div class: "p-2 mb-4" do
      button id: "menu-close-button", data_menu_open: false,
        class: "w-8 h-8 text-body/0 data-[menu-open=true]:text-body/100 data-[menu-open=false]:duration-0 \
          data-[menu-open=false]:delay-150 delay-500 duration-1000" do
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
    nav class: "font-subtitle" do
      ul class: "flex flex-col" do
        render_navigation_bar_elements
      end
    end
  end

  def render_navigation_bar_elements
    NAV_PAGE_REFS.each do |page, page_title|
      link page_title, to: page, class: "p-3 transition-all hover:bg-zinc-900"
    end
  end
end
