class Shared::Header < BaseComponent
  def render
    header class: "top-0 w-full transition-all p-2 md:p-4 md:flex md:flex-col md:gap-4 md:justify-between" do
      div class: "relative flex justify-center items-center" do
        render_logo
      end

      render_navigation_bar
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
        NAV_PAGE_REFS.each do |page, page_title|
          link page_title, to: page,
            class: "transition-all data-[selected=true]:text-persian-blue hover:text-persian-blue",
            data_selected: current_page? page
        end
      end
    end
  end
end
