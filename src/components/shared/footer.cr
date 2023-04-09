class Shared::Footer < BaseComponent
  def render
    footer class: "font-text-body" do
      section class: "p-2" do
        mount NavBar, elements: NAV_ELEMENTS

        render_copyright
      end
    end
  end

  def render_copyright
    div class: "flex text-center justify-center" do
      text "© 2023 State Of Neptune – All Rights Reserved"
    end
  end

  private NAV_ELEMENTS = [
    NavBar::Element.new("https://www.instagram.com/stateofneptune/", "fab fa-instagram"),
    NavBar::Element.new("https://www.facebook.com/stateofneptune/", "fab fa-facebook"),
    NavBar::Element.new("https://twitter.com/stateofneptune", "fab fa-twitter"),
    NavBar::Element.new("https://stateofneptune.bandcamp.com/", "fab fa-bandcamp"),
    NavBar::Element.new("https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW", "fab fa-spotify"),
    NavBar::Element.new("https://www.deezer.com/us/artist/158840862", "fab fa-deezer"),
    NavBar::Element.new("https://www.youtube.com/@stateofneptune1864", "fab fa-youtube"),
    NavBar::Element.new("mailto:stateofneptune@gmail.com", "fas fa-envelope"),
  ]

  class NavBar < BaseComponent
    needs elements : Array(Element)

    class Element
      getter href : String
      getter fa_class : String

      def initialize(@href : String, @fa_class : String)
      end
    end

    def render
      nav do
        ul class: "flex justify-center items-center" do
          elements.each do |element|
            render_element element
          end
        end
      end
    end

    def render_element(element : Element)
      div class: "h-12 w-12 min-w-[2rem] flex justify-center items-center" do
        a class: "text-md md:text-lg transition-all hover:text-persian-blue", href: element.href, target: "_blank" do
          i class: element.fa_class
        end
      end
    end
  end
end
