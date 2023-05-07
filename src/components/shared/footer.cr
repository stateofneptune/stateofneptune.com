class Shared::Footer < BaseComponent
  def render
    footer class: "p-4 bg-deep-bg font-body" do
      render_navigation_bar

      div class: "flex justify-center items-center text-dim text-center" do
        text "© 2023 State Of Neptune – All Rights Reserved"
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

  def render_navigation_bar_elements
    li do
      mount NavElement, href: "https://www.instagram.com/stateofneptune/", fa_class: "fab fa-instagram"
    end

    li do
      mount NavElement, href: "https://www.facebook.com/stateofneptune/", fa_class: "fab fa-facebook"
    end

    li do
      mount NavElement, href: "https://www.tiktok.com/@stateofneptune", fa_class: "fab fa-tiktok"
    end

    li do
      mount NavElement, href: "https://twitter.com/stateofneptune", fa_class: "fab fa-twitter"
        hidden: true, show_above_md: true
    end

    li do
      mount NavElement, href: "https://www.youtube.com/@stateofneptune1864", fa_class: "fab fa-youtube"
    end

    li do
      mount NavElement, href: "https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW", fa_class: "fab fa-spotify"
    end

    li do
      mount NavElement, href: "https://stateofneptune.bandcamp.com/", fa_class: "fab fa-bandcamp"
    end

    li do
      mount NavElement, href: "https://music.apple.com/pl/artist/state-of-neptune/1570636107", fa_class: "fab fa-itunes-note"
        hidden: true, show_above_lg: true
    end

    li do
      mount NavElement, href: "https://music.amazon.com/artists/B09RCQG8XZ/state-of-neptune", fa_class: "fab fa-amazon"
        hidden: true, show_above_lg: true
    end

    li do
      mount NavElement, href: "https://www.deezer.com/us/artist/158840862", fa_class: "fab fa-deezer"
        hidden: true, show_above_lg: true
    end

    li do
      mount NavElement, href: "mailto:stateofneptune@gmail.com", fa_class: "fas fa-envelope"
    end
  end
end
