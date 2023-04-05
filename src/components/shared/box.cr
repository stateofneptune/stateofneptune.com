class Shared::Box < BaseComponent
  needs image : String
  needs href : String

  def render(&)
    article do
      div class: "relative transition-all hover:scale-105 hover:shadow-md z-0 hover:z-10" do
        a href: href do
          yield

          img src: image
        end
      end
    end
  end

  def render
    render { }
  end
end
