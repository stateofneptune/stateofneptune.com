class Shared::Menu < BaseComponent
  def render
    render_menu_backdrop
    render_menu
  end

  def render_menu
    div id: "menu", data_menu_open: false, tabindex: -1,
      class: "fixed right-0 top-0 z-10 w-64 h-[100lvh] bg-deep-bg translate-x-full \
        data-[menu-open=true]:translate-x-0 transition duration-300" do
      render_menu_close_button
      render_navigation_bar
    end
  end

  def render_menu_backdrop
    div id: "menu-backdrop", data_menu_open: false,
      class: "fixed inset-0 z-10 bg-deep-bg/0 invisible data-[menu-open=true]:visible \
        data-[menu-open=true]:bg-deep-bg/70 ease-out transition-all duration-300"
  end

  def render_menu_close_button
    div class: "p-2 mb-4 flex justify-end" do
      button id: "menu-close-button", data_menu_open: false,
        class: "w-8 h-8 text-body/0 data-[menu-open=true]:text-body/100 transition delay-300 \
          duration-0 data-[menu-open=true]:duration-1000" do
        inline_svg "menu-close-icon.svg", false
      end
    end
  end

  def render_navigation_bar
    nav do
      ul do
        render_navigation_bar_elements
      end
    end
  end

  def render_navigation_bar_elements
    class_name = "block font-subtitle p-3 transition-all hover:bg-zinc-900/70"

    li do
      mount Shared::NavElement, page: Home::Index, label: "Home", class_name: class_name
    end

    li do
      mount Shared::NavElement, page: Music::Index, label: "Music", class_name: class_name
    end

    li do
      mount Shared::NavElement, page: Videos::Index, label: "Videos", class_name: class_name
    end

    # li do
    #   mount Shared::NavElement, page: Stages::Index, label: "Stages", class_name: class_name
    # end

    li do
      mount Shared::NavElement, page: Contact::Index, label: "Contact", class_name: class_name
    end
  end
end
