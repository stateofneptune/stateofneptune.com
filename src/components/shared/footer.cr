class Shared::Footer < BaseComponent
  def render
    footer class: "font-text-body" do
      section class: "p-2" do
        render_navigation_bar
        render_copyright
      end
    end
  end

  def render_navigation_bar
    nav do
      ul class: "flex justify-center items-center" do
        render_navigation_bar_elements
      end
    end
  end

  private NAV_ELEMENTS = [
    {"https://www.instagram.com/stateofneptune/", "fab fa-instagram"},
    {"https://www.facebook.com/stateofneptune/", "fab fa-facebook"},
    {"https://twitter.com/stateofneptune", "fab fa-twitter"},
    {"https://www.youtube.com/@stateofneptune1864", "fab fa-youtube"},
    {"https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW", "fab fa-spotify"},
    {"https://stateofneptune.bandcamp.com/", "fab fa-bandcamp"},
    {"https://music.apple.com/pl/artist/state-of-neptune/1570636107", "fab fa-itunes-note"},
    {"https://www.deezer.com/us/artist/158840862", "fab fa-deezer"},
    {"mailto:stateofneptune@gmail.com", "fas fa-envelope"},
  ]

  def render_navigation_bar_elements
    NAV_ELEMENTS.each do |href, fa_class|
      div class: "h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all flex justify-center items-center" do
        a class: "text-md md:text-lg transition-all hover:text-accent", href: href, target: "_blank" do
          i class: fa_class
        end
      end
    end
  end

  def render_copyright
    div class: "flex text-center justify-center" do
      text "© 2023 State Of Neptune – All Rights Reserved"
    end
  end
end
