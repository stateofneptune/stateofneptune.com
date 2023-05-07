class Shared::Footer::NavElement < BaseComponent
  needs href : String
  needs fa_class : String

  needs hidden : Bool = false
  needs show_above_md : Bool = false
  needs show_above_lg : Bool = false

  def render
    render_container do
      a class: "text-md md:text-lg transition-all hover:text-accent", href: href, target: "_blank" do
        i class: fa_class
      end
    end
  end

  def render_container(&)
    class_names = ["h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all"]

    if hidden?
      class_names.push "hidden"
      class_names.push "md:flex md:justify-center md:items-center" if show_above_md?
      class_names.push "lg:flex lg:justify-center lg:items-center" if show_above_lg? && !show_above_md?
    else
      class_names.push "flex justify-center items-center"
    end

    container_class = class_names.join " "

    div class: container_class do
      yield
    end
  end
end
